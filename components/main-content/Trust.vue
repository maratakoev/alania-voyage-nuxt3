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

// Использование ref для данных, которые могут быть получены асинхронно
const trustItems = ref([
  {
    title: "Местные гиды.",
    description: "Местный гид это доверие, безопасность, настоящее знакомство с культурой.",
    icon: "/images/horse.png"
  },
  {
    title: "Лучшие фото-моменты.",
    description: "Мы покажем лучшие ресурсы для создания потрясающего контента, который соберет лайки.",
    icon: "/images/inst.png"
  },
  {
    title: "Путешествие в кругу друзей. ",
    description: "Мы чувствуем наших гостей и создаем для них идеальную атмосферу для отдыха",
    icon: "/images/fri.png"
  },
]);
</script>

<style scoped>
/* -------------------- ОБЩИЕ СТИЛИ -------------------- */
.trust-section {
  background: linear-gradient(to bottom, #ffffff, #f9fafb);
  padding: 0rem 1rem 3rem 1rem;
}

.container {
  max-width: 1064px;
  margin: 0 auto;
  /* Уберем горизонтальный padding в контейнере, чтобы карточки 
     начинались от края экрана на мобильных. */
  padding: 0 1rem; 
}

/* -------------------- СТИЛИ ДЛЯ ДЕСКТОПА (Grid) -------------------- */
.badges-grid {
  display: grid;
  /* Три колонки на широком экране */
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); 
  gap: 2rem;
}

.badge-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start; 
  text-align: left;
  background: white;
  border-radius: 0.75rem;
  padding: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.02);
  border: 1px solid rgba(0, 0, 0, 0.03);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.badge-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.feature-image {
  width: 100%;
  height: 300px; 
  object-fit: cover;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
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

/* -------------------- СТИЛИ ДЛЯ МОБИЛЬНЫХ (Horizontal Scroll) -------------------- */
@media (max-width: 640px) {
  
  /* Отменяем padding в контейнере, чтобы прокрутка была от самого края */
  .container {
      padding: 0;
  }
  
  .trust-section {
    padding: 2rem 0 2rem 0; /* Убираем горизонтальные паддинги здесь */
  }
  
  .badges-grid {
    /* Меняем Grid на Flexbox для горизонтальной прокрутки */
    display: flex;
    gap: 1rem; /* Отступ между карточками */
    overflow-x: scroll; /* Главное свойство: разрешаем горизонтальную прокрутку */
    grid-template-columns: none; /* Отключаем Grid */
    
    /* Свойства для улучшения опыта прокрутки на мобильных */
    -webkit-overflow-scrolling: touch;
    padding: 0 1rem; /* Возвращаем padding, но уже внутри скроллируемого контейнера */
    padding-bottom: 1rem; /* Немного места для скроллбара/пальца */
  }

  /* Скрытие стандартного скроллбара (необязательно, но улучшает вид) */
  .badges-grid::-webkit-scrollbar {
    display: none; /* Chrome, Safari */
  }
  .badges-grid {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }

  .badge-card {
    /* Делаем ширину карточки фиксированной, чтобы она не растягивалась */
    min-width: 60vw; /* Например, 85% ширины экрана, чтобы намекнуть на следующий элемент */
    max-width: 60vw;
    /* Важно: отключаем сжимание Flex-элемента */
    flex-shrink: 0; 
  }
  
  .feature-image {
    max-width: 100%;
  }
}
</style>