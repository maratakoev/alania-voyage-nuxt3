import { defineStore } from 'pinia'

export const useReviewsStore = defineStore('reviews', {
  state: () => ({
    reviews: [
      {
        author: "Анна Петрова",
        text: "Невероятные впечатления! Организация на высшем уровне, гиды настоящие профессионалы. Обязательно вернусь ещё!",
        rating: 5,
        date: new Date('2024-03-15'),
        image: "/images/complecs.webp"
      },
      {
        author: "Максим Иванов",
        text: "Спасибо за прекрасный отдых! Все было продумано до мелочей. Особенно понравились необычные маршруты.",
        rating: 4,
        date: new Date('2024-04-02'),
        image: "/images/zgid.webp"
      },
      {
        author: "Ольга Смирнова",
        text: "Лучший сервис из тех, что я встречала! Быстрая реакция на запросы, индивидуальный подход к каждому клиенту.",
        rating: 5,
        date: new Date('2024-05-20'),
        image: null
      },
      {
        author: "Владислава Шегрена",
        text: "Обратились по рекомендации наших друзей и ни капли не пожалели! Спасибо ребятам большое!",
        rating: 5,
        date: new Date('2024-05-20'),
        image: "/images/karmadon-darg.webp"
      }
    ], // Список отзывов
  }),
  actions: {
    addReview(review) {
      console.log('Добавление отзыва: ', review)  // Логируем новый отзыв
      this.reviews.push(review)
      console.log('После добавления отзыва, состояние reviews: ', this.reviews)  // Логируем текущее состояние reviews
    },
    
  },
})