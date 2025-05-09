<template>
  <section class="booking-block">
    <!-- Заголовок -->
    <div class="booking-header">
      <h2>Забронируйте экскурсию</h2>
      <p>Быстрое оформление за 3 шага</p>
    </div>

    <!-- Шаги бронирования -->
    <div class="steps-wrapper">
      <div class="step">
        <div class="step-icon">
          <svg viewBox="0 0 24 24">
            <path d="M19 4h-1V3c0-.6-.4-1-1-1s-1 .4-1 1v1H8V3c0-.6-.4-1-1-1s-1 .4-1 1v1H5c-1.7 0-3 1.3-3 3v12c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3V7c0-1.7-1.3-3-3-3zm1 15c0 .6-.4 1-1 1H5c-.6 0-1-.4-1-1V10h16v9z"/>
          </svg>
        </div>
        <h3>Выберите дату</h3>
        <p>Любой доступный день в календаре</p>
      </div>

      <div class="step-divider"></div>

      <div class="step">
        <div class="step-icon">
          <svg viewBox="0 0 24 24">
            <path d="M20 9V7c0-1.1-.9-2-2-2h-4c0-1.1-.9-2-2-2S10 3.9 10 5H6c-1.1 0-2 .9-2 2v2h16zM4 11v8c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-8H4zm6 5h4c.6 0 1-.4 1-1s-.4-1-1-1h-4c-.6 0-1 .4-1 1s.4 1 1 1z"/>
          </svg>
        </div>
        <h3>Укажите участников</h3>
        <p>Взрослые и дети</p>
      </div>

      <div class="step-divider"></div>

      <div class="step">
        <div class="step-icon">
          <svg viewBox="0 0 24 24">
            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/>
          </svg>
        </div>
        <h3>Подтверждение</h3>
        <p>Мгновенно в мессенджере</p>
      </div>
    </div>

    <!-- Форма бронирования -->
    <div class="booking-form">
      <div class="form-row">
        <div class="input-group">
          <label>Дата экскурсии:</label>
          <input 
            type="date" 
            v-model="selectedDate"
            class="date-input"
            :min="minDate"
          >
        </div>

        <div class="input-group">
          <label>Количество человек:</label>
          <div class="counter">
            <button 
              @click="decrement"
              :disabled="peopleCount === 1"
              class="counter-btn"
            >
              <svg viewBox="0 0 24 24">
                <path d="M19 13H5v-2h14v2z"/>
              </svg>
            </button>
            <span class="count">{{ peopleCount }}</span>
            <button 
              @click="increment"
              :disabled="peopleCount >= 10"
              class="counter-btn"
            >
              <svg viewBox="0 0 24 24">
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div class="price-summary">
        <div class="total-price">
          <span>Итого:</span>
          <strong>{{ totalPrice }} ₽</strong>
        </div>
        <button 
          class="book-button"
          :disabled="!selectedDate"
        >
          Перейти к оплате
          <svg viewBox="0 0 24 24">
            <path d="M10 7l5 5-5 5-1.4-1.4 3.6-3.6H3v-2h9.2L8.6 8.4 10 7z"/>
          </svg>
        </button>
      </div>
    </div>

    <!-- Гарантии -->
    <div class="guarantees">
      <div class="guarantee-item">
        <svg viewBox="0 0 24 24">
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
        </svg>
        <p>Безопасная оплата</p>
      </div>
      <div class="guarantee-item">
        <svg viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l4.25 2.53.75-1.23-3.5-2.11V7z"/>
        </svg>
        <p>Возврат за 24 часа</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const selectedDate = ref('')
const peopleCount = ref(2)
const pricePerPerson = 2500

const minDate = new Date().toISOString().split('T')[0]
const totalPrice = computed(() => peopleCount.value * pricePerPerson)

const increment = () => peopleCount.value < 10 && peopleCount.value++
const decrement = () => peopleCount.value > 1 && peopleCount.value--
</script>

<style scoped>
/* Базовые стили */
.booking-block {
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.booking-header {
  text-align: center;
  margin-bottom: 2.5rem;
}

.booking-header h2 {
  font-size: 2rem;
  color: #1a365d;
  margin-bottom: 0.5rem;
}

.booking-header p {
  color: #718096;
  font-size: 1.1rem;
}

/* Шаги бронирования */
.steps-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 0;
}

.step {
  text-align: center;
  flex: 1;
  padding: 1rem;
}

.step-icon {
  width: 56px;
  height: 56px;
  margin: 0 auto 1rem;
  background: #f7fafc;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.step-icon svg {
  width: 24px;
  height: 24px;
  fill: #4299e1;
}

.step h3 {
  color: #2d3748;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
}

.step p {
  color: #718096;
  font-size: 0.9rem;
}

.step-divider {
  width: 1px;
  height: 60px;
  background: #e2e8f0;
}

/* Форма бронирования */
.booking-form {
  background: #f7fafc;
  border-radius: 12px;
  padding: 2rem;
  margin: 2rem 0;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.input-group label {
  display: block;
  color: #4a5568;
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
}

.date-input {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.date-input:focus {
  border-color: #4299e1;
  outline: none;
}

.counter {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 0.5rem;
}

.count {
  font-size: 1.2rem;
  font-weight: 600;
  color: #1a365d;
  min-width: 30px;
  text-align: center;
}

.counter-btn {
  width: 36px;
  height: 36px;
  border: none;
  background: #f7fafc;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.counter-btn:hover:not(:disabled) {
  background: #4299e1;
}

.counter-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.counter-btn svg {
  width: 20px;
  height: 20px;
  fill: #4299e1;
}

.counter-btn:hover:not(:disabled) svg {
  fill: #fff;
}

/* Блок цены */
.price-summary {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #e2e8f0;
  padding-top: 1.5rem;
}

.total-price {
  font-size: 1.2rem;
  color: #2d3748;
}

.total-price strong {
  color: #1a365d;
  font-size: 1.4rem;
  margin-left: 0.5rem;
}

.book-button {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1rem 2rem;
  background: #4299e1;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background 0.3s ease;
}

.book-button:hover:not(:disabled) {
  background: #3182ce;
}

.book-button:disabled {
  background: #cbd5e0;
  cursor: not-allowed;
}

.book-button svg {
  width: 20px;
  height: 20px;
  fill: #fff;
}

/* Гарантии */
.guarantees {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 2rem;
}

.guarantee-item {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1rem;
  background: #f7fafc;
  border-radius: 8px;
}

.guarantee-item svg {
  width: 24px;
  height: 24px;
  fill: #4299e1;
}

.guarantee-item p {
  color: #4a5568;
  font-size: 0.95rem;
}

/* Адаптивность */
@media (max-width: 768px) {
  .form-row {
    grid-template-columns: 1fr;
  }

  .steps-wrapper {
    flex-direction: column;
    gap: 2rem;
  }

  .step-divider {
    width: 60px;
    height: 1px;
  }

  .price-summary {
    flex-direction: column;
    gap: 1.5rem;
    align-items: stretch;
  }

  .guarantees {
    grid-template-columns: 1fr;
  }
}
</style>