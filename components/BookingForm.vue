<template>
  <transition name="booking-fade">
    <div
      class="booking-overlay"
      v-if="isOpen"
      @click.self="emitClose"
    >
      <div class="booking-content">
        <button class="booking-close" @click="emitClose">&times;</button>
        
        <!-- Основная форма -->
        <div v-if="!isSubmitted">
          <h3 class="booking-title">
            Бронирование: {{ props.serviceData?.title || 'услуги' }}
          </h3>
          
          <form @submit.prevent="submitForm" class="booking-form">
            <!-- Поле имени -->
            <div class="form-group">
              <label for="name" class="booking-body__label">Имя</label>
              <input 
                id="name" 
                type="text" 
                class="booking-body__input"
                v-model="formData.name"
                placeholder="Введите имя"
              />
            </div>

            <!-- Поле контакта -->
            <div class="form-group">
              <label for="contact" class="booking-body__label">Номер телефона *</label>
              <input 
                id="contact" 
                type="tel" 
                class="booking-body__input"
                v-model="formData.contact"
                @input="formatPhone"
                placeholder="_(___) ___-__-__"
                required
              />
            </div>

            <!-- Для GENERAL - выбор типа услуги -->
            <div v-if="showGeneralFields" class="form-group">
              <label class="booking-body__label">Выберите тип услуги</label>
              <select class="booking-body__input booking-body__select" v-model="formData.selectedServiceType">
                <option value="">Выберите услугу</option>
                <option value="excursion">🎯 Экскурсия</option>
                <option value="accommodation">🏠 Проживание</option>
                <option value="combo">🌟 Тур "всё включено"</option>
              </select>
            </div>

            <!-- Для EXCURSION - даты экскурсии -->
            <div v-if="showExcursionFields" class="form-group">
              <label class="booking-body__label">🗓️ Дата экскурсии</label>
              <input 
                type="date" 
                class="booking-body__input"
                v-model="formData.excursionDate"
                :min="today"
              />
            </div>

            <!-- Для ACCOMMODATION - даты проживания -->
            <div v-if="showAccommodationFields" class="form-group">
              <label class="booking-body__label">🏨 Даты проживания</label>
              <div class="date-row">
                <div class="date-col">
                  <label class="booking-body__label date-sublabel">Заезд</label>
                  <input type="date" class="booking-body__input" v-model="formData.checkIn" :min="today">
                </div>
                <div class="date-col">
                  <label class="booking-body__label date-sublabel">Выезд</label>
                  <input type="date" class="booking-body__input" v-model="formData.checkOut" :min="formData.checkIn || today">
                </div>
              </div>
            </div>

            <!-- Для COMBO - даты тура -->
            <div v-if="showComboFields" class="form-group">
              <label class="booking-body__label">📅 Даты тура</label>
              <div class="date-row">
                <div class="date-col">
                  <label class="booking-body__label date-sublabel">Начало тура</label>
                  <input type="date" class="booking-body__input" v-model="formData.tourStart" :min="today">
                </div>
                <div class="date-col">
                  <label class="booking-body__label date-sublabel">Окончание тура</label>
                  <input type="date" class="booking-body__input" v-model="formData.tourEnd" :min="formData.tourStart || today">
                </div>
              </div>
            </div>

            <!-- Количество человек (для всех) -->
            <div class="form-group">
              <label for="people" class="booking-body__label">👥 Количество человек</label>
              <select id="people" class="booking-body__input booking-body__select" v-model="formData.people">
                <option value="">Выберите количество</option>
                <option value="1">1 человек</option>
                <option value="2">2 человека</option>
                <option value="3">3 человека</option>
                <option value="4">4 человека</option>
                <option value="5+">5 и более</option>
              </select>
            </div>

            <!-- Выбор маршрутов (только для экскурсий и комбо) -->
            <div class="form-group" v-if="showExcursionFields ">
              <label class="booking-body__label">🗺️ Выберите маршруты</label>
              
              <!-- Основной маршрут -->
              <div class="route-item" v-if="formData.mainRoute">
                <div class="route-name">{{ formData.mainRoute }}</div>
              </div>

              <!-- Дополнительные маршруты -->
              <div 
                class="route-item" 
                v-for="(route, index) in formData.additionalRoutes" 
                :key="index"
              >
                <div class="route-name">{{ route }}</div>
                <button 
                  type="button" 
                  class="route-remove" 
                  @click="removeAdditionalRoute(index)"
                >
                  &times;
                </button>
              </div>

              <!-- Кнопка добавления маршрута -->
              <button 
                type="button" 
                class="add-route-btn"
                @click="showRouteSelector = true"
  v-if="!showRouteSelector && showExcursionFields"
              >
                + Добавить маршрут
              </button>
            </div>

            <!-- Селектор дополнительных маршрутов -->
            <div class="form-group" v-if="showRouteSelector && (showExcursionFields || showComboFields)">
              <label class="booking-body__label">Выберите маршрут</label>
              <div class="route-selector">
                <select 
                  class="booking-body__input booking-body__select"
                  v-model="selectedAdditionalRoute"
                >
                  <option value="" disabled selected>Выберите маршрут</option>
                  <option 
                    v-for="route in availableRoutes" 
                    :value="route"
                    :disabled="isRouteSelected(route)"
                    :key="route"
                  >
                    {{ route }}
                  </option>
                </select>
                <button 
                  type="button" 
                  class="add-route-confirm"
                  @click="addAdditionalRoute"
                  :disabled="!selectedAdditionalRoute"
                >
                  Добавить
                </button>
                <button 
                  type="button" 
                  class="cancel-select-btn"
                  @click="showRouteSelector = false"
                >
                  Отмена
                </button>
              </div>
            </div>

            <!-- Комментарий -->
            <div class="form-group">
              <label for="comment" class="booking-body__label">💬 Комментарий</label>
              <textarea 
                id="comment" 
                class="booking-body__input booking-body__textarea"
                v-model="formData.comment"
                placeholder="Тут можно оставить комментарий к бронированию. Это может быть вопрос или дополнительное пожелание..."
                rows="3"
              ></textarea>
            </div>

            <!-- Кнопки -->
            <div class="booking-buttons">
              <btn-one
                type="submit"
                :buttonText="'Отправить заявку'"
                :buttonBgColor="'#4CAF50'"
                :buttonFontColor="'white'"
              />
            </div>
          </form>
        </div>

        <!-- Сообщение об успешной отправке -->
        <div v-else class="success-message">
          <div class="success-icon">✓</div>
          <h3 class="success-title">Спасибо за заявку!</h3>
          <p class="success-text">
            Ваши данные успешно отправлены. Мы свяжемся с вами в ближайшее время.
          </p>
          <p class="success-contact">
            Если спешите, то можете написать нам напрямую:
          </p>
          <div class="contact-buttons">
            <button class="contact-btn telegram-btn" @click="openTelegram">
              💬 Написать в Telegram
            </button>
            <button class="contact-btn phone-btn" @click="makeCall">
              📞 Позвонить нам
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref, reactive, watch, computed } from 'vue';
import BtnOne from './buttons/BtnOne.vue';

const props = defineProps({
  isOpen: Boolean,
  selectedRoute: String,
  serviceData: Object,
});

const emit = defineEmits(['close']);

// Текущая дата для ограничения выбора
const today = new Date().toISOString().split('T')[0];

// Определяем тип услуги
const serviceType = computed(() => props.serviceData?.serviceType)

// Computed свойства для показа нужных секций
const showGeneralFields = computed(() => serviceType.value === 'general')
const showExcursionFields = computed(() => serviceType.value === 'excursion')
const showAccommodationFields = computed(() => serviceType.value === 'accommodation')
const showComboFields = computed(() => serviceType.value === 'combo')

// Данные формы
const formData = reactive({
  name: '',
  contact: '',
  selectedDates: [],
  people: '',
  mainRoute: '',
  additionalRoutes: [],
  comment: '',
  // Новые поля для разных типов услуг
  selectedServiceType: '',
  excursionDate: '',
  checkIn: '',
  checkOut: '',
  tourStart: '',
  tourEnd: ''
});

// Состояние UI
const isSubmitted = ref(false);
const showRouteSelector = ref(false);
const selectedAdditionalRoute = ref('');
const newDate = ref('');

// Список доступных маршрутов
const availableRoutes = [
  'Горный поход',
  'Лесной маршрут', 
  'Водный тур',
  'Экскурсионный тур',
  'Спелеотур',
  'Веломаршрут'
];

// Наблюдаем за изменением выбранного маршрута
watch(() => props.selectedRoute, (newRoute) => {
  if (newRoute && !formData.mainRoute) {
    formData.mainRoute = newRoute;
  }
}, { immediate: true });

function emitClose() {
  emit('close');
  resetForm();
}

// Форматирование даты
function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('ru-RU', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });
}

// Проверка выбран ли уже маршрут
function isRouteSelected(route) {
  return formData.mainRoute === route || formData.additionalRoutes.includes(route);
}

// Добавление дополнительного маршрута
function addAdditionalRoute() {
  if (selectedAdditionalRoute.value && !isRouteSelected(selectedAdditionalRoute.value)) {
    formData.additionalRoutes.push(selectedAdditionalRoute.value);
    selectedAdditionalRoute.value = '';
    showRouteSelector.value = false;
  }
}

// Удаление дополнительного маршрута
function removeAdditionalRoute(index) {
  formData.additionalRoutes.splice(index, 1);
}

// Добавление выбранной даты
function addSelectedDate() {
  if (newDate.value && !formData.selectedDates.includes(newDate.value)) {
    formData.selectedDates.push(newDate.value);
    // Сортируем даты по порядку
    formData.selectedDates.sort();
    newDate.value = '';
  }
}

// Удаление выбранной даты
function removeSelectedDate(index) {
  formData.selectedDates.splice(index, 1);
}

// Отправка формы
async function submitForm() {
  if (!formData.contact) {
    alert('Пожалуйста, укажите телефон для связи');
    return;
  }

  // --- Проверка и автоподстановка телефона ---
  let phone = formData.contact.trim();

  // если номер начинается не с +7 или 8 — добавляем +7
  if (!phone.startsWith('+7') && !phone.startsWith('8')) {
    phone = '+7' + phone.replace(/\D/g, '');
  }

  // убираем все лишние символы
  phone = phone.replace(/\D/g, '');

  // приводим к формату +7XXXXXXXXXX
  if (phone.startsWith('8')) phone = '+7' + phone.slice(1);
  else if (!phone.startsWith('+7')) phone = '+7' + phone;

  // ✅ проверяем уже нормализованный номер
  const phoneRegex = /^(?:\+7|8)\d{10}$/;
  if (!phoneRegex.test(phone)) {
    alert('Введите корректный номер телефона (пример: +7(999)999-99-99');
    return;
  }

  // сохраняем нормализованный номер в форму
  formData.contact = phone;

  try {
    const nameParts = formData.name.split(' ');
    const firstName = nameParts[0] || '';
    const lastName = nameParts.slice(1).join(' ') || '';

    const serviceSpecificData = getServiceSpecificData();

    const requestData = {
      firstName,
      lastName,
      phone,
      serviceType: serviceType.value || formData.selectedServiceType,
      serviceTitle: props.serviceData?.title || 'Общая заявка',
      people: formData.people,
      comment: formData.comment || '',
      ...serviceSpecificData
    };

    console.log('Отправляемые данные:', requestData);

    const response = await fetch('http://localhost:3000/order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(requestData)
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Ошибка сервера: ${response.status} - ${errorText}`);
    }

    const result = await response.json();
    console.log('Успешно отправлено:', result);
    isSubmitted.value = true;
        if (typeof ym !== 'undefined') {
      ym(105535314, 'reachGoal', 'form_send_telegram');
    }

  } catch (error) {
    console.error('Ошибка отправки:', error);
    alert(`Ошибка отправки: ${error.message}. Пожалуйста, свяжитесь с нами напрямую.`);
  }
}


// Функция для получения специфичных данных услуги
function getServiceSpecificData() {
  if (showExcursionFields.value) {
    return {
      excursionDate: formData.excursionDate,
      routes: [formData.mainRoute, ...formData.additionalRoutes].filter(r => r).join(', ')
    };
  }
  
  if (showAccommodationFields.value) {
    return {
      checkIn: formData.checkIn,
      checkOut: formData.checkOut
    };
  }
  
  if (showComboFields.value) {
    return {
      tourStart: formData.tourStart,
      tourEnd: formData.tourEnd,
      routes: [formData.mainRoute, ...formData.additionalRoutes].filter(r => r).join(', ')
    };
  }
  
  if (showGeneralFields.value) {
    return {
      selectedServiceType: formData.selectedServiceType
    };
  }
  
  return {};
}

// Сброс формы
function resetForm() {
  isSubmitted.value = false;
  showRouteSelector.value = false;
  selectedAdditionalRoute.value = '';
  newDate.value = '';
  Object.assign(formData, {
    name: '',
    contact: '',
    selectedDates: [],
    people: '',
    mainRoute: props.selectedRoute || '',
    additionalRoutes: [],
    comment: '',
    selectedServiceType: '',
    excursionDate: '',
    checkIn: '',
    checkOut: '',
    tourStart: '',
    tourEnd: ''
  });
}

// Открытие Telegram
function openTelegram() {
  window.open('https://t.me/your_telegram', '_blank');
}

// Звонок
function makeCall() {
  window.location.href = 'tel:+79999999999';
}
</script>

<style scoped>
.booking-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
}

.booking-content {
  background: white;
  border-radius: 12px;
  padding: 30px;
  max-width: 500px;
  width: 100%;
  position: relative;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  overflow-y: auto;
  max-height: 80vh;
}

.booking-title {
  margin-top: 0;
  font-size: 28px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
}

.booking-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.booking-body__label {
  font-size: 14px;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
  display: block;
}

.date-sublabel {
  font-size: 12px;
  font-weight: 500;
  color: #666;
  margin-bottom: 4px;
}

.booking-body__input {
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #e1e5e9;
  border-radius: 8px;
  font-size: 16px;
  transition: all 0.3s ease;
  box-sizing: border-box;
  background: #fafbfc;
}

.booking-body__input:focus {
  outline: none;
  border-color: #4CAF50;
  background: white;
  box-shadow: 0 0 0 3px rgba(76, 175, 80, 0.1);
}

.booking-body__select {
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23666' stroke-width='2'%3e%3cpath d='M6 9l6 6 6-6'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 16px center;
  background-size: 16px;
  padding-right: 50px;
}

.booking-body__textarea {
  resize: vertical;
  min-height: 80px;
  font-family: inherit;
  line-height: 1.4;
}

/* Стили для строки с датами */
.date-row {
  display: flex;
  gap: 12px;
}

.date-col {
  flex: 1;
  display: flex;
  flex-direction: column;
}

/* Стили для выбранных дат */
.selected-dates {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 12px;
}

.date-tag {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  background: #e3f2fd;
  border: 1px solid #bbdefb;
  border-radius: 16px;
  font-size: 13px;
  color: #1976d2;
}

.date-text {
  font-weight: 500;
}

.date-remove {
  background: none;
  border: none;
  color: #1976d2;
  font-size: 14px;
  cursor: pointer;
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.2s ease;
}

.date-remove:hover {
  background: #bbdefb;
}

.date-input-container {
  display: flex;
  gap: 8px;
  align-items: flex-start;
}

.date-input {
  flex: 1;
}

.add-date-btn {
  padding: 12px 16px;
  background: #2196f3;
  border: none;
  border-radius: 6px;
  color: white;
  font-size: 14px;
  cursor: pointer;
  transition: background 0.3s ease;
  white-space: nowrap;
}

.add-date-btn:hover:not(:disabled) {
  background: #1976d2;
}

.add-date-btn:disabled {
  background: #ccc;
  cursor: not-allowed;
}

.date-hint {
  font-size: 12px;
  color: #666;
  margin-top: 6px;
  display: flex;
  align-items: center;
  gap: 6px;
}

/* Стили для выбранных маршрутов */
.route-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 12px;
  background: #f8f9fa;
  border: 1px solid #e1e5e9;
  border-radius: 6px;
  margin-bottom: 6px;
  font-size: 14px;
}

.route-name {
  font-weight: 500;
  color: #333;
}

.route-remove {
  background: none;
  border: none;
  color: #999;
  font-size: 16px;
  cursor: pointer;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.2s ease;
  flex-shrink: 0;
}

.route-remove:hover {
  background: #ffebee;
  color: #f44336;
}

.add-route-btn {
  padding: 8px 12px;
  background: white;
  border: 1px dashed #e1e5e9;
  border-radius: 6px;
  color: #666;
  font-size: 13px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  width: fit-content;
}

.add-route-btn:hover {
  border-color: #4CAF50;
  color: #4CAF50;
  background: #f8fff8;
}

/* Селектор маршрутов */
.route-selector {
  display: flex;
  gap: 8px;
  align-items: flex-start;
}

.route-selector .booking-body__select {
  flex: 1;
}

.add-route-confirm {
  padding: 12px 16px;
  background: #4CAF50;
  border: none;
  border-radius: 6px;
  color: white;
  font-size: 14px;
  cursor: pointer;
  transition: background 0.3s ease;
  white-space: nowrap;
}

.add-route-confirm:hover:not(:disabled) {
  background: #45a049;
}

.add-route-confirm:disabled {
  background: #ccc;
  cursor: not-allowed;
}

.cancel-select-btn {
  padding: 12px 16px;
  background: none;
  border: 1px solid #e1e5e9;
  border-radius: 6px;
  color: #666;
  font-size: 14px;
  cursor: pointer;
  white-space: nowrap;
}

.cancel-select-btn:hover {
  background: #f5f5f5;
}

.booking-close {
  position: absolute;
  top: 10px;
  right: 15px;
  font-size: 28px;
  background: none;
  border: none;
  cursor: pointer;
  color: #999;
  transition: color 0.2s ease;
}

.booking-close:hover {
  color: #000;
}

.booking-buttons {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

/* Сообщение об успехе */
.success-message {
  text-align: center;
  padding: 20px 0;
}

.success-icon {
  font-size: 60px;
  color: #4CAF50;
  margin-bottom: 20px;
}

.success-title {
  font-size: 24px;
  color: #333;
  margin-bottom: 15px;
  font-weight: 600;
}

.success-text {
  font-size: 16px;
  color: #666;
  line-height: 1.5;
  margin-bottom: 15px;
}

.success-contact {
  font-size: 14px;
  color: #888;
  margin-bottom: 20px;
}

.contact-buttons {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
}

.contact-btn {
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.telegram-btn {
  background-color: #0088cc;
  color: white;
}

.telegram-btn:hover {
  background-color: #0077b3;
}

.phone-btn {
  background-color: #4CAF50;
  color: white;
}

.phone-btn:hover {
  background-color: #45a049;
}

.booking-fade-enter-active,
.booking-fade-leave-active {
  transition: opacity 0.3s ease;
}

.booking-fade-enter-from,
.booking-fade-leave-to {
  opacity: 0;
}

/* Адаптивность */
@media (max-width: 600px) {
  .booking-content {
    padding: 20px;
    margin: 10px;
  }
  
  .booking-title {
    font-size: 24px;
  }
  
  .date-row {
    flex-direction: column;
    gap: 8px;
  }
  
  .date-input-container {
    flex-direction: column;
  }
  
  .add-date-btn {
    width: 100%;
  }
  
  .route-selector {
    flex-direction: column;
  }
  
  .add-route-confirm,
  .cancel-select-btn {
    width: 100%;
  }
}
</style>