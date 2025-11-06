import { defineStore } from 'pinia'
import axios from 'axios'

const BASE_URL = 'http://localhost:4000'

export const useReviewsStore = defineStore('reviews', {
  state: () => ({
    reviews: []
  }),
  
  getters: {
    // Дополнительно: геттер для сортированных отзывов
    sortedReviews: (state) => {
      return [...state.reviews].sort((a, b) => b.id - a.id)
    }
  },
  
  actions: {
    async fetchReviews() {
      try {
        console.log('🔄 Загрузка отзывов с сервера...')
        const res = await axios.get(`${BASE_URL}/reviews`)
        
        // УБИРАЕМ добавление BASE_URL - сервер уже возвращает полные URL
        this.reviews = res.data
        
        console.log(`✅ Загружено ${this.reviews.length} отзывов`)
      } catch (err) {
        console.error('❌ Ошибка при загрузке отзывов:', err)
        throw new Error('Не удалось загрузить отзывы')
      }
    },
    
    async addReviewServer(review) {
      try {
        console.log('📤 Отправка отзыва на сервер...')
        
        const formData = new FormData()
        formData.append('author', review.author)
        formData.append('email', review.email)
        formData.append('text', review.text)
        formData.append('rating', review.rating.toString()) // важно: строка
        
        if (review.image) {
          formData.append('image', review.image)
          console.log('📎 Прикреплен файл:', review.image.name)
        }

        // Логируем данные для отладки
        console.log('📝 Данные отзыва:', {
          author: review.author,
          email: review.email,
          text: review.text,
          rating: review.rating,
          hasImage: !!review.image
        })

        const res = await axios.post(`${BASE_URL}/review`, formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
          timeout: 10000
        })

        console.log('✅ Ответ сервера:', res.data)
        
        // УБИРАЕМ добавление BASE_URL
        const savedReview = res.data.review
        
        // Добавляем в store
        this.reviews.push(savedReview)
        
        return savedReview
        
      } catch (err) {
        console.error('❌ Ошибка при отправке отзыва:')
        console.error('Status:', err.response?.status)
        console.error('Data:', err.response?.data)
        console.error('Message:', err.message)
        
        // Пробрасываем понятную ошибку
        const errorMessage = err.response?.data?.error || 
                           err.response?.data?.message || 
                           'Ошибка при отправке отзыва'
        
        throw new Error(errorMessage)
      }
    },
    
    // Дополнительные методы для удобства
    async removeReview(reviewId) {
      try {
        await axios.delete(`${BASE_URL}/reviews/${reviewId}`)
        this.reviews = this.reviews.filter(r => r.id !== reviewId)
      } catch (err) {
        console.error('Ошибка при удалении отзыва:', err)
        throw err
      }
    },
    
    findReviewByEmail(email) {
      return this.reviews.find(r => r.email === email)
    }
  }
})