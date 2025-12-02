<template>
  <section class="trust-section">
    <div class="container">
      <div class="badges-grid">
        <div 
          v-for="(item, index) in trustItems" 
          :key="index" 
          class="badge-card"
        >
          
          <img :src="item.icon" :alt="item.title" class="feature-image" />
          
          <div class="badge-content">
            <h3 class="title">{{ item.title }}</h3>
            <p class="description">{{ item.description }}</p>

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
    title: "Местные гиды.",
    description: "Местный гид это доверие, безопасность, настоящее знакомство с культурой.",

    icon: "/images/family.png" // Путь к вашему изображению
  },
  {
    title: "Лучшие фото-моменты.",
    description: "Мы покажем лучшие ресурсы для создания потрясающего контента, который соберет лайки.",

    icon: "/images/ladyRed.png" // Путь к вашему изображению
  },
  {
    title: "Путешествие в кругу друзей. ",
    description: "Мы чувствуем наших гостей и создаем для них идеальную атмосферу для отдыха",
    
    
    icon: "/images/happy.png" // Путь к вашему изображению
  },
  // {
  //   title: "Без посторонних",
  //   description: "На экскурсиях только ваша компания, без сборных групп незнакомых людей",
  //   link: "/guides",
  //   linkText: "Подробнее",
  //   icon: "/images/happy.png" // Путь к вашему изображению
  // }
]);
</script>

<style scoped>
.trust-section {
  background: linear-gradient(to bottom, #ffffff, #f9fafb);
  padding: 0rem 1rem 3rem 1rem;
}

.container {
  max-width: 1064px;
  margin: 0 auto;
}

.badges-grid {
  /* Сетка осталась, чтобы элементы красиво располагались */
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); 
  gap: 2rem; /* Увеличим отступы */
}

.badge-card {
  display: flex;
  flex-direction: column;
  /* Убрали "align-items: center;" чтобы текст не центрировался */
  align-items: flex-start; 
  text-align: left; /* Текст слева */
  background: white;
  border-radius: 0.75rem;
  padding: 1rem; /* Уменьшим паддинг, так как изображение внутри */
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.02);
  border: 1px solid rgba(0, 0, 0, 0.03);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.badge-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

/* --- НОВЫЕ СТИЛИ ДЛЯ ИЗОБРАЖЕНИЯ --- */
.feature-image {
  /* Принудительно устанавливаем размеры */
  width: 100%; /* Занимает всю ширину карточки */
  /* max-width: 200px; Ограничиваем максимальную ширину */
  height: 300px; 
  object-fit: cover; /* Изображение будет обрезаться, чтобы заполнить область */
  border-radius: 0.5rem; /* Немного скругляем края изображения */
  margin-bottom: 1rem;
}
/* ------------------------------------- */

/* УДАЛЕНЫ СТИЛИ ДЛЯ .badge-icon И .icon-image */

.badge-content {
  /* ... стили остались без изменений ... */
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
  /* На мобильных устройствах изображение будет занимать всю ширину карточки (100%) */
  .feature-image {
    max-width: 100%;
  }
}
</style>