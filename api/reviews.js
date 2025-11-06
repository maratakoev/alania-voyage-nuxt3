import axios from 'axios'

const API_URL = 'http://localhost:4000'

// Валидация данных перед отправкой
const validateReview = (review) => {
  const errors = []
  
  if (!review.author?.trim()) errors.push('Укажите имя')
  if (!review.email?.trim()) errors.push('Укажите email')
  if (!review.text?.trim()) errors.push('Напишите текст отзыва')
  if (!review.rating || review.rating < 1 || review.rating > 5) {
    errors.push('Рейтинг должен быть от 1 до 5')
  }
  
  // Простая валидация email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (review.email && !emailRegex.test(review.email)) {
    errors.push('Укажите корректный email')
  }
  
  return errors
}

// Получить все отзывы
export const getReviews = async () => {
  try {
    const res = await axios.get(`${API_URL}/reviews`)
    return res.data
  } catch (err) {
    console.error('Ошибка при получении отзывов:', err)
    throw new Error('Не удалось загрузить отзывы')
  }
}

// Отправить новый отзыв
export const postReview = async (review) => {
  try {
    // Валидация
    const errors = validateReview(review)
    if (errors.length > 0) {
      throw new Error(errors.join(', '))
    }

    const formData = new FormData()
    formData.append('author', review.author.trim())
    formData.append('email', review.email.trim().toLowerCase())
    formData.append('text', review.text.trim())
    formData.append('rating', review.rating.toString())
    
    if (review.image) {
      formData.append('image', review.image)
    }

    const res = await axios.post(`${API_URL}/review`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
      timeout: 10000 // 10 секунд таймаут
    })

    return res.data.review

  } catch (err) {
    console.error('Ошибка при отправке отзыва:', err)
    
    // Обработка разных типов ошибок
    if (err.response?.data?.error) {
      throw new Error(err.response.data.error)
    } else if (err.message) {
      throw new Error(err.message)
    } else {
      throw new Error('Неизвестная ошибка при отправке отзыва')
    }
  }
}