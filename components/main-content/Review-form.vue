<template>
  <div class="reviews-container">
    <h2 class="reviews-title">Что говорят наши гости</h2>

    <div class="reviews-list">
<div v-for="review in reviewsStore.sortedReviews" :key="review.id">
        <div class="review-header">
          <span class="review-author">{{ review.name }}</span>
        </div>
        <div class="review-date">{{ formatDate(review.date) }}</div>

        <star-rating
          :model-value="Math.ceil(review.rating)" 
          :read-only="true"
          :star-size="20"
          active-color="#FFD700"
          :inactive-color="'#e0e0e0'"
          :show-rating="false"
          :increment="1"
          :round-start-rating="true"
        />
        <div class="review-text">{{ review.text }}</div>
        <div v-if="review.image" class="review-image">
          <img 
            :src="review.image" 
            :alt="'Фото от ' + review.name"
            @click="toggleZoom($event)"
            :class="{zoomed: zoomedImage === review.image}"
          />
        </div>
      </div>
    </div>

    <!-- Обновленное модальное окно ошибки -->
    <div v-if="showErrorModal" class="modal-overlay" @click.self="showErrorModal = false">
      <div class="modal">
        <p>{{ errorMessage }}</p>
        <button @click="showErrorModal = false" class="modal-button">OK</button>
      </div>
    </div>

    <transition name="zoom-fade">
      <div v-if="zoomedImage" class="zoom-overlay" @click.self="zoomedImage = null">
        <img 
          :src="zoomedImage" 
          class="zoomed-image"
          @click.stop="zoomedImage = null"
        />
      </div>
    </transition>

    <button 
      @click="toggleReviewForm" 
      class="create-review-button"
      v-if="!newReviewOpen"
    >
      Оставить свой отзыв
    </button>

    <transition name="slide-fade">
      <div v-if="newReviewOpen" class="add-review">
        <h3>Расскажите о вашем впечатлении</h3>
        
        <!-- Валидация email в реальном времени -->
        <div class="input-group">
          <input
            v-model="newReview.author"
            type="text"
            placeholder="Ваше имя *"
            class="review-author-input"
            :class="{ error: !newReview.author && formTouched }"
          />
        </div>

        <div class="input-group">
          <input
            v-model="newReview.email"
            type="email"
            placeholder="Ваш Email *"
            class="review-author-input"
            :class="{ error: (!newReview.email || !isValidEmail) && formTouched }"
          />
          <small v-if="formTouched && newReview.email && !isValidEmail" class="error-text">
            Введите корректный email
          </small>
        </div>

        <div class="rating-input">
          <span>Оценка *:</span>
          <star-rating
            v-model="newReview.rating"
            :show-rating="true"
            :star-size="30"
            active-color="#FFD700"
            :increment="1"
          />
          <small v-if="formTouched && newReview.rating === null" class="error-text">
            Укажите оценку
          </small>
        </div>

        <div class="input-group">
          <textarea
            v-model="newReview.text"
            placeholder="Напишите ваш отзыв... *"
            class="review-textarea"
            rows="4"
            :class="{ error: !newReview.text && formTouched }"
          ></textarea>
        </div>

        <div class="image-upload">
          <label for="review-image" class="upload-label">
            <span v-if="!newReview.image">Добавить фото</span>
            <span v-else>Изменить фото</span>
            <input
              id="review-image"
              type="file"
              accept="image/*"
              @change="handleImageUpload"
              class="file-input"
            />
          </label>
          <div v-if="newReview.imagePreview" class="image-preview">
            <img :src="newReview.imagePreview" alt="Предпросмотр фото" />
            <button @click="removeImage" class="remove-image-btn">×</button>
          </div>
        </div>

        <div class="form-buttons">
          <button @click="submitReview" class="submit-button" :disabled="isSubmitting">
            {{ isSubmitting ? 'Отправка...' : 'Отправить отзыв' }}
          </button>
          <button @click="cancelReview" class="cancel-button">Отмена</button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { reactive, ref, onMounted, computed } from 'vue'
import StarRating from 'vue3-star-ratings'
import { useReviewsStore } from '~/stores/reviews'

const reviewsStore = useReviewsStore()
const showErrorModal = ref(false)
const newReviewOpen = ref(false)
const zoomedImage = ref(null)
const formTouched = ref(false)
const isSubmitting = ref(false)
const errorMessage = ref('')

const newReview = reactive({
  author: '',
  text: '',
  email: '',
  rating: 5, // изменено с null на 5
  image: null,
  imagePreview: null
})

// Валидация email
const isValidEmail = computed(() => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(newReview.email)
})

// Проверка всей формы
const isFormValid = computed(() => {
  return newReview.author && 
         newReview.email && 
         isValidEmail.value && 
         newReview.text && 
         newReview.rating !== null
})

onMounted(() => {
  reviewsStore.fetchReviews()
})

const toggleReviewForm = () => {
  newReviewOpen.value = !newReviewOpen.value
  formTouched.value = false
}

const handleImageUpload = (event) => {
  const file = event.target.files[0]
  if (!file) return
  
  if (file.size > 5 * 1024 * 1024) {
    errorMessage.value = 'Файл слишком большой. Максимальный размер - 5MB'
    showErrorModal.value = true
    return
  }
  
  if (!file.type.startsWith('image/')) {
    errorMessage.value = 'Выберите файл изображения'
    showErrorModal.value = true
    return
  }
  
  newReview.image = file
  newReview.imagePreview = URL.createObjectURL(file)
}

const removeImage = () => {
  newReview.image = null
  if (newReview.imagePreview) URL.revokeObjectURL(newReview.imagePreview)
  newReview.imagePreview = null
}

const submitReview = async () => {
  formTouched.value = true
  
  if (!isFormValid.value) {
    errorMessage.value = 'Пожалуйста, заполните все обязательные поля (*)'
    showErrorModal.value = true
    return
  }

  isSubmitting.value = true

  try {
    await reviewsStore.addReviewServer({
      author: newReview.author.trim(),
      email: newReview.email.trim().toLowerCase(),
      text: newReview.text.trim(),
      rating: newReview.rating,
      image: newReview.image
    })

    // Сброс формы
    resetForm()
    
  } catch (error) {
    errorMessage.value = error.message
    showErrorModal.value = true
  } finally {
    isSubmitting.value = false
  }
}

const cancelReview = () => {
  resetForm()
}

const resetForm = () => {
  newReview.author = ''
  newReview.email = ''
  newReview.text = ''
  newReview.rating = 5
  removeImage()
  newReviewOpen.value = false
  formTouched.value = false
  errorMessage.value = ''
}

const formatDate = (date) => {
  return new Date(date).toLocaleDateString('ru-RU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

const toggleZoom = (event) => {
  zoomedImage.value = zoomedImage.value === event.target.src ? null : event.target.src
}
</script>


<style scoped>
/* Анимации для плавного появления/исчезновения */
.zoom-fade-enter-active,
.zoom-fade-leave-active {
  transition: all 0.5s ease;
}


.zoom-fade-enter-from,
.zoom-fade-leave-to {
  opacity: 0;
}

.zoom-fade-enter-active .zoomed-image,
.zoom-fade-leave-active .zoomed-image {
  transition: all 0.5s ease;
}

.zoom-fade-enter-from .zoomed-image {
  transform: scale(0.9);
  opacity: 0;
}

.zoom-fade-leave-to .zoomed-image {
  transform: scale(0.9);
  opacity: 0;
}

/* Базовые стили оверлея */
.zoom-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
  cursor: zoom-out;
  
}

.zoomed-image {
  max-width: 90vw;
  max-height: 90vh;
  object-fit: contain;
  cursor: zoom-out;
  border-radius: 20px;
}

:root {
  --ios-background: #F9F9F9;
  --ios-card: #FFFFFF;
  --ios-border: #E0E0E0;
  --ios-accent: #007AFF;
  --ios-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  --ios-font: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}

.input-group {
  margin-bottom: 15px;
}

.error-text {
  color: #ff3b30;
  font-size: 12px;
  margin-top: 4px;
  display: block;
}

.review-author-input.error,
.review-textarea.error {
  border-color: #ff3b30;
}

.form-buttons {
  display: flex;
  gap: 10px;
}

.submit-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.reviews-container {
  max-width: 1075px;
  max-height: 1121px;
  margin: 0 auto;
  padding: 20px;
  font-family: var(--ios-font);
  background-color: var(--ios-background);
  color: #1c1c1e;
  /* overflow-y: auto; */
  scrollbar-width: thin; /* Для Firefox */
  scrollbar-color: #c1c1c1 #f1f1f1; /* Для Firefox */
}

.reviews-list {
  display: flex;
  /* max-width: 5 00px; */
  gap: 20px;
  overflow-x: auto;
  overflow-y: hidden; /* Отключаем вертикальный скролл */
  padding-bottom: 20px; /* Место для скроллбара */
  scroll-snap-type: x mandatory; /* Плавная остановка при скролле */
  -webkit-overflow-scrolling: touch; /* Плавный скролл на iOS */
  scrollbar-width: thin; /* Тонкий скроллбар для Firefox */
  scrollbar-color: #c1c1c1 #f1f1f1; /* Цвет скроллбара */
}

/* Стилизация скроллбара для WebKit браузеров (Chrome, Safari) */
.reviews-container::-webkit-scrollbar {
  width: 8px;
}

.reviews-container::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 4px;
}

.reviews-container::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 4px;
}

.reviews-container::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}

.reviews-title {
  text-align: center;
  font-size: 22px;
  font-weight: 600;
  color: #1c1c1e;
  margin-bottom: 24px;
}

.add-review {
  background-color: var(--ios-card);
  border-radius: 14px;
  padding: 20px;
  box-shadow: var(--ios-shadow);
  border: 1px solid var(--ios-border);
  margin-bottom: 30px;
}

.add-review h3 {
  margin-top: 0;
  font-size: 18px;
  color: #333;
  font-weight: 500;
}

.rating-input {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 15px 0;
}

.review-textarea,
.review-author-input {
  width: 100%;
  padding: 12px;
  border-radius: 10px;
  font-size: 16px;
  border: 2px solid grey;
  background-color: #fff;
  margin-bottom: 15px;
  box-sizing: border-box;
  font-family: var(--ios-font);
}

.review-textarea {
  min-height: 100px;
  resize: vertical;
  border-radius: 15px;
  border: 2px solid grey;
}

.image-upload {
  margin-bottom: 15px;
}

.upload-label {
  display: inline-block;
  padding: 10px 16px;
  background-color: #f2f2f7;
  color: #333;
  border-radius: 10px;
  border: 1px dashed var(--ios-border);
  cursor: pointer;
  transition: background-color 0.3s;
}

.upload-label:hover {
  background-color: #e6e6ec;
}

.file-input {
  display: none;
}

.image-preview {
  position: relative;
  margin-top: 10px;
  max-width: 100%;
}

.image-preview img {
  width: 100%;
  max-height: 240px;
  object-fit: cover;
  border-radius: 10px;
  border: 1px solid var(--ios-border);
}

.remove-image-btn {
  position: absolute;
  top: -10px;
  right: -10px;
  background: #ff3b30;
  color: white;
  border: none;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  font-size: 18px;
  line-height: 26px;
  text-align: center;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.submit-button {
  background-color: #0056cc;
  color: white;
  
  font-size: 17px;
  font-weight: 500;
  padding: 14px;
  border: 2px solid #0056cc;
  border-radius: 12px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 50%;
  box-shadow: var(--ios-shadow);
}

.submit-button:hover {
  background-color: #0056cc;
}

.reviews-list {
  display: flex;
  /* flex-direction: column; */
  gap: 20px;
  overflow-x: auto;
  max-height: 500px;
}

.review-item {
  background-color: var(--ios-card);
  padding: 20px;
  border-radius: 14px;
  border: 1px solid var(--ios-border);
  box-shadow: var(--ios-shadow);
  min-width: 240px; 
    overflow-y: auto;
    scrollbar-width: thin; /* Для Firefox */
  scrollbar-color: #c1c1c1 #f1f1f1; /* Для Firefox */
  max-height: 399px;
}

.review-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.review-author {
  font-weight: 600;
  font-size: 16px;
  color: #1c1c1e;
}

.review-date {
  font-size: 14px;
  color: #8e8e93;
}

.review-text {
  margin-top: 12px;
  font-size: 16px;
  color: #3c3c43;
  line-height: 1.5;
}

.review-image img {
  max-width: 100%;
  max-height: 300px ; /* Оптимальная высота для просмотра */
  width: auto;
  height: auto;
  object-fit: contain;
  border-radius: 10px;
  border: 1px solid var(--ios-border);
  margin-top: 12px;
  cursor: zoom-in; 
}



.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal {
  background: white;
  padding: 24px;
  border-radius: 12px;
  max-width: 80%;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.modal-button {
  margin-top: 16px;
  padding: 8px 16px;
  background-color: #0056cc;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}


.create-review-button {
  background-color: #007AFF;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 12px 20px;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 20px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.create-review-button:hover {
  background-color: #0062CC;
}

.cancel-button {
  background-color: #FF3B30;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 12px 20px;
  font-size: 16px;
  margin-left: 10px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.cancel-button:hover {
  background-color: #D70015;
}

/* Анимация появления/скрытия формы */
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}



/* Анимация закрытия при свайпе */
.zoom-overlay.swipe-down {
  transition: transform 0.3s ease, opacity 0.3s ease;
  transform: translateY(100%);
  opacity: 0;
}


@media (max-width: 600px) {
  .reviews-container {
    padding: 15px;
  }

  .review-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .review-date {
    margin-top: 4px;
  }
}
</style>