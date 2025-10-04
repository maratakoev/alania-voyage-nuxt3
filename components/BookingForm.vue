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
          <h3 class="booking-title">Форма бронирования</h3>
          
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
                placeholder="+7 (___) ___-__-__"
                required
              />
            </div>

            <!-- Выбор дат -->
            <div class="form-group">
              <label class="booking-body__label">Желаемые даты</label>
              
              <!-- Выбранные даты -->
              <div class="selected-dates" v-if="formData.selectedDates.length > 0">
                <div 
                  v-for="(date, index) in formData.selectedDates" 
                  :key="index"
                  class="date-tag"
                >
                  <span class="date-text">{{ formatDate(date) }}</span>
                  <button 
                    type="button" 
                    class="date-remove"
                    @click="removeSelectedDate(index)"
                  >
                    &times;
                  </button>
                </div>
              </div>
              
              <div class="date-input-container">
                <input 
                  type="date" 
                  class="booking-body__input date-input"
                  v-model="newDate"
                  :min="today"
                />
                <button 
                  type="button" 
                  class="add-date-btn"
                  @click="addSelectedDate"
                  :disabled="!newDate"
                >
                  Добавить дату
                </button>
              </div>
              <div class="date-hint">
                💡 Можно поочередно выбрать несколько дат для разных маршрутов
              </div>
            </div>

            <!-- Количество человек -->
            <div class="form-group">
              <label for="people" class="booking-body__label">Количество человек</label>
              <select 
                id="people" 
                class="booking-body__input booking-body__select"
                v-model="formData.people"
              >
                <option value="" selected>Выберите количество</option>
                <option value="1">от 1 до 4</option>
                <option value="2">5 и более</option>

              </select>
            </div>

            <!-- Выбор маршрутов -->
            <div class="form-group">
              <label class="booking-body__label">Выберите маршруты</label>
              
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
                v-if="!showRouteSelector"
              >
                + Добавить маршрут
              </button>
            </div>

            <!-- Селектор дополнительных маршрутов -->
            <div class="form-group" v-if="showRouteSelector">
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
              <label for="comment" class="booking-body__label">Комментарий</label>
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
import { ref, reactive, watch } from 'vue';
import BtnOne from './buttons/BtnOne.vue';

const props = defineProps({
  isOpen: Boolean,
  selectedRoute: String,
  modalData: {
    type: Object,
    default: () => ({})
  }
});

const emit = defineEmits(['close']);

// Текущая дата для ограничения выбора
const today = new Date().toISOString().split('T')[0];

// Данные формы
const formData = reactive({
  name: '',
  contact: '',
  selectedDates: [],
  people: '',
  mainRoute: '',
  additionalRoutes: [],
  comment: ''
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
function submitForm() {
  if (!formData.contact) {
    alert('Пожалуйста, укажите телефон для связи');
    return;
  }
  
  console.log('Данные формы:', formData);
  isSubmitted.value = true;
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
    comment: ''
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