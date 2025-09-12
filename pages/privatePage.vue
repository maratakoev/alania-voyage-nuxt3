<template>
  <div class="private-page">
    <NavMenu class="nav" />
    
    <ContentTitle 
      :title="pageTitle" 
      :description="pageDescription" 
      class="content-title"
    />
    <main class="main-content">
      <!-- Боковое меню -->
      <aside class="sidebar">
        <div class="user-info">
          <div class="avatar">
            <img :src="user.avatar" alt="Аватар пользователя">
          </div>
          <h3 class="user-name">{{ user.name }}</h3>
          <p class="user-email">{{ user.email }}</p>
        </div>

        <nav class="account-nav">
          <RouterLink 
            v-for="(item, index) in navItems"
            :key="index"
            :to="item.path"
            class="nav-link"
            active-class="active"
          >
            {{ item.title }}
          </RouterLink>
        </nav>
      </aside>

      <!-- Основной контент -->
      <div class="content">
        <!-- Активные бронирования -->
        <section class="bookings-section">
          <h2 class="section-title">Активные бронирования</h2>
          <div class="bookings-grid">
            <BookingCard
              v-for="(booking, index) in activeBookings"
              :key="index"
              :booking="booking"
            />
          </div>
        </section>

        <!-- История заказов -->
<section class="history-section">
  <h2 class="section-title">История заказов</h2>
  <ul class="order-history">
    <li v-for="(order, index) in pastOrders" :key="index" class="order-item">
      <div class="order-title">{{ order.title }}</div>
      <div class="order-date">{{ order.date }}</div>
      <div class="order-price">{{ order.price }}</div>
    </li>
  </ul>
</section>


        <!-- Избранное -->
<!-- Избранное -->
<section class="favorites-section">
  <h2 class="section-title">Избранное</h2>
  <div class="favorites-scroller">
    <div 
      v-for="(item, index) in favorites" 
      :key="index" 
      class="favorite-item"
    >
      <img :src="item.image" alt="" class="favorite-image" />
      <h3 class="favorite-title">{{ item.title }}</h3>
      <p class="favorite-desc">{{ item.description }}</p>
    </div>
  </div>
</section>

      </div>
    </main>
    

    <Footer />
  </div>
</template>

<script setup>
import NavMenu from '@/components/header/NavMenu.vue';
import Footer from '@/components/main-content/Footer.vue';
import ContentTitle from '@/components/main-content/ContentTitle.vue';

const pageTitle = 'Кабинет пользователя';
const pageDescription = 'Это закрытый раздел';

// Данные пользователя
const user = ref({
  name: 'Иван Иванов',
  email: 'ivan@example.com',
  avatar: '/images/avatar-default.jpg'
});

// Навигация
const navItems = ref([
  { title: 'Мои бронирования', path: '/bookings' },
  { title: 'Избранное', path: '/favorites' },
  { title: 'Настройки', path: '/settings' },
  { title: 'Платежи', path: '/payments' },
  { title: 'Поддержка', path: '/support' }
]);

// Активные бронирования
const activeBookings = ref([
  {
    id: 1,
    title: 'Отель Премиум Класса',
    type: 'Проживание',
    date: '15-22 сент. 2024',
    status: 'confirmed',
    price: '45 000 ₽'
  },
  // ... другие бронирования
]);

// История заказов
const pastOrders = ref([
  { title: 'Экскурсия по Владикавказу', date: '10 авг. 2023', price: '2 500 ₽' },
  { title: 'Тур в Цей', date: '5 мая 2023', price: '7 000 ₽' },
  { title: 'Поездка в Даргавс', date: '22 апр. 2023', price: '3 200 ₽' }
]);

// Избранное
const favorites = ref([
  {
    id: 1,
    title: 'Горный тур "Аlanos"',
    image: '/images/favorites/armhi.jpg',
    description: '7-дневное путешествие в Осетии'
  },
  {
    id: 2,
    title: 'Восхождение на Казбек',
    image: '/images/favorites/kazbek.jpg',
    description: 'Экстремальный тур с гидами'
  },
  {
    id: 3,
    title: 'Этно-тур по Осетии',
    image: '/images/favorites/ossetia.jpg',
    description: 'Знакомство с традициями и кухней'
  }
]);
</script>

<style scoped>
.private-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: 'Arial', sans-serif;
  color: #333;
  background: #f8f9fa;
}

.main-content {
  display: flex;
  gap: 2rem;
  padding: 2rem 1rem;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
  flex-grow: 1;
}

.content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 900px;
  margin: 0 auto;
}

/* Стили для истории заказов */
.order-history {
  background: white;
  border-radius: 12px;
  padding: 1rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
}

.order-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #eee;
  transition: background 0.2s;
}

.order-item:last-child {
  border-bottom: none;
}

.order-item:hover {
  background: #f8f9fa;
}

/* Стили для избранного */
.favorites-scroller {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: minmax(280px, 1fr);
  gap: 1.5rem;
  overflow-x: auto;
  padding-bottom: 1rem;
  scroll-snap-type: x mandatory;
}

.favorite-item {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  scroll-snap-align: start;
  transition: transform 0.2s;
}

.favorite-item:hover {
  transform: translateY(-3px);
}

.favorite-image {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 1rem;
}

/* Улучшенные карточки бронирований */
.bookings-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  justify-items: center;
}

/* Адаптивная сетка */
@media (max-width: 1200px) {
  .main-content {
    flex-direction: column;
    padding: 1rem;
  }

  .sidebar {
    width: 100%;
    position: static;
  }

  .content {
    max-width: 100%;
  }
}

@media (max-width: 768px) {
  .order-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
  
  .favorites-scroller {
    grid-auto-columns: minmax(240px, 1fr);
  }
}

/* Дополнительные визуальные улучшения */
.section-title {
  font-size: 1.5rem;
  color: #2c3e50;
  margin-bottom: 1.5rem;
  position: relative;
  padding-left: 1rem;
}

.section-title::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 4px;
  height: 70%;
  background: #2196F3;
  border-radius: 2px;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  color: #4a5568;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.nav-link:hover {
  background: #ebf8ff;
  color: #2196F3;
  transform: translateX(4px);
}

.nav-link.active {
  background: #2196F3;
  color: white;
  font-weight: 500;
}
</style>