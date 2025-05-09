<template>
  <section class="hot-offers">
    <h2 class="section-title">Горящие предложения <span class="badge">🔥</span></h2>
    <div class="offers-grid">
      <div v-for="(offer, index) in dailyOffers" :key="index" class="offer-card">
        <div class="offer-badge">-{{ offer.discount }}%</div>
        <img :src="offer.image" :alt="offer.title" loading="lazy">
        <div class="offer-content">
          <h3>{{ offer.title }}</h3>
          <p class="offer-dates">До {{ formattedDate }}</p>
          <p class="offer-price">
            <span class="old-price">{{ formatPrice(offer.oldPrice) }}₽</span>
            {{ formatPrice(offer.price) }}₽
          </p>
          <button 
    @click="openTelegram" 
    class="book-button"
  >
    Забронировать
  </button>        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';

const allOffers = ref([
  {
    title: "Треккинг в Цей",
    image: "/images/locations/Alagir.png",
    oldPrice: 15000,
    price: 12000,
    discount: 12
  },
  {
    title: "Гостевой дом у водопада",
    image: "/images/locations/Dargavs.png",
    oldPrice: 15000,
    price: 11000,
    discount: 15
  },
  {
    title: "Экскурсия по крепостям",
    image: "/images/locations/Fiagdon.png",
    oldPrice: 18000,
    price: 14400,
    discount: 20
  },
  {
    title: "Горнолыжный курорт",
    image: "/images/locations/Darial.png",
    oldPrice: 18000,
    price: 15400,
    discount: 20
  }
]);

// Форматирование цены
const formatPrice = (price) => {
  return new Intl.NumberFormat('ru-RU').format(price);
};

const openTelegram = () => {
  window.open("https://t.me/maratakoev", "_blank", "noopener,noreferrer");
};

// Генерация даты +2 дня
const formattedDate = computed(() => {
  const date = new Date();
  date.setDate(date.getDate() + 2);
  return date.toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long'
  });
});

// Детерминированный shuffle с seed
const seededShuffle = (array, seed) => {
  const random = () => {
    const x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
  };
  return [...array].sort(() => 0.5 - random());
};

// Получение daily offers
const dailyOffers = computed(() => {
  const today = new Date();
  const seed = Math.floor(today / 8.64e7); // Seed обновляется каждые 24 часа
  const shuffled = seededShuffle(allOffers.value, seed);
  return shuffled.slice(0, 2);
});

// Автоматическое обновление в полночь
const setupDailyUpdate = () => {
  const now = new Date();
  const night = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + 1,
    0, 0, 0
  );
  
  setTimeout(() => {
    window.location.reload();
  }, night - now);
};

onMounted(() => {
  setupDailyUpdate();
});

const bookOffer = (offer) => {
  console.log("Бронируем:", offer.title);
};
</script>

<style scoped>
.hot-offers {
  max-width: 1064px;
  margin: 0 auto;
  padding: 60px 20px;
}

.section-title {
  text-align: center;
  font-size: 28px;
  margin-bottom: 30px;
  color: #2c3e50;
}

.badge {
  color: #ff3b30;
}

.offers-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
}

.offer-card {
  position: relative;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.offer-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15);
}

.offer-badge {
  position: absolute;
  top: 15px;
  right: 15px;
  background: #ff4757;
  color: white;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  z-index: 2;
}

.offer-card img {
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-bottom: 3px solid #ff4757;
}

.offer-content {
  padding: 20px;
}

.offer-content h3 {
  margin: 0 0 10px;
  font-size: 20px;
  color: #2c3e50;
}

.offer-dates {
  color: #ff4757;
  font-weight: 500;
  margin: 0 0 15px;
}

.offer-price {
  font-size: 20px;
  font-weight: 700;
  color: #2c3e50;
  margin: 15px 0;
}

.old-price {
  display: block;
  font-size: 14px;
  color: #95a5a6;
  text-decoration: line-through;
}

.book-button {
  width: 100%;
  padding: 12px;
  background: #ff4757;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease;
}

.book-button:hover {
  background: #ff3b30;
}

@media (max-width: 768px) {
  .offers-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .section-title {
    font-size: 24px;
  }
  
  .offer-card img {
    height: 180px;
  }
}
</style>