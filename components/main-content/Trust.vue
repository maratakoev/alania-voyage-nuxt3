<template>
  <section class="trust-section">
    <div class="container">
      <div class="badges-grid">
        <div 
          v-for="(item, index) in trustItems" 
          :key="index" 
          class="badge-card"
        >
          <div class="badge-icon" :style="gradientBackground">
            <svg 
              class="icon"
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24"
              fill="none" 
              stroke="currentColor"
              stroke-width="2" 
              stroke-linecap="round" 
              stroke-linejoin="round"
            >
              <component :is="'path'" v-for="(path, i) in item.iconPaths" :key="i" :d="path" />
            </svg>
          </div>
          
          <div class="badge-content">
            <h3 class="title">{{ item.title }}</h3>
            <p class="description">{{ item.description }}</p>
            <!-- <a 
              v-if="item.link" 
              :href="item.link" 
              class="link"
            >
              {{ item.linkText }} →
            </a> -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const gradientBackground = {
  background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)'
};

const trustItems = ref([
{
    title: "Более 1000 довольных гостей",
    description: "Мы работаем так, чтобы вы захотели вернуться.",
    link: "/reviews",
    linkText: "Смотреть отзывы",
    iconPaths: [
      'M22 11.08V12a10 10 0 1 1-5.93-9.14',
      'M22 4L12 14.01l-3-3'
    ]
  },
  {
  title: "Простая и безопасная оплата",
  description: " Мы не собираем ваши личные данные, данные карты. Быстро отвечаем в Telegram и оплата там же.",
  link: "/how-it-works", // или другой актуальный путь
  linkText: "Как это работает",
  iconPaths: [
    'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z', // Щит — символ безопасности
    'M12 8v3', // Ключевое отверстие
    'M12 15h.01' // Замок
  ]
}
,
  {
    title: "Поддержка 24/7",
    description: "Решаем вопросы даже во время тура: от поиска лекарств до экстренного трансфера.",
    link: "/guides",
    linkText: "Подробнее",
    iconPaths: [
      'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z', // Круг
      'M16 12a4 4 0 11-8 0 4 4 0 018 0z', // Центральный круг
      'M12 8v4l3 3' // Телефонная трубка
    ]
  },

  
  // {
  //   title: "Маршруты для Instagram",
  //   description: "— Только самые живописные места, где кадры получаются сами собой!",
  //   link: "/flexibility",
  //   linkText: "Условия бронирования",
  //   iconPaths: [
  //     'M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l2 2h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2z',
  //     'M8 3v4',
  //     'M16 3v4',
  //     'M3 10h18'
  //   ]
  // }
]);
</script>

<style scoped>
.trust-section {
  background: linear-gradient(to bottom, #ffffff, #f9fafb);
  padding: 4rem 1rem;
}

.container {
  max-width: 1064px;
  margin: 0 auto;
}

.badges-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.badge-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: white;
  border-radius: 0.75rem;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.02);
  border: 1px solid rgba(0, 0, 0, 0.03);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.badge-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.badge-icon {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
}

.icon {
  width: 1.5rem;
  height: 1.5rem;
  color: white;
}

.badge-content {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.title {
  font-size: 1.125rem;
  font-weight: 600;
  color: #111827;
}

.description {
  font-size: 0.875rem;
  color: #4b5563;
  line-height: 1.5;
}

.link {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 500;
  color: #2563eb;
  margin-top: 0.5rem;
  text-decoration: none;
  transition: color 0.2s ease;
}

.link:hover {
  color: #1d4ed8;
  text-decoration: underline;
}

@media (max-width: 640px) {
  .badges-grid {
    grid-template-columns: 1fr;
  }
  
  .trust-section {
    padding: 2rem 1rem;
  }
}
</style>