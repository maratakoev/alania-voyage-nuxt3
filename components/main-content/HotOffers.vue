<template>
  <section class="hot-offers">
    <h2 class="section-title">Горящие предложения <span class="badge">🔥</span></h2>
    <div class="offers-grid">
      <div v-for="(offer, index) in offers" :key="index" class="offer-card">
        <div class="offer-badge">-{{ offer.discount }}%</div>
        <img :src="offer.image" :alt="offer.title" loading="lazy">
        <div class="offer-content">
          <h3>{{ offer.title }}</h3>
          <p class="offer-dates">{{ offer.dates }}</p>
          <p class="offer-price">
            <span class="old-price">{{ offer.oldPrice }}₽</span>
            {{ offer.price }}₽
          </p>
          <button @click="bookOffer(offer)" class="book-button">Забронировать</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'; // Добавьте этот импорт

const offers = ref([
  {
    title: "Треккинг в Цей",
    dates: "До 15 июня",
    discount: 25,
    oldPrice: "12 000",
    price: "9 000",
    image: "/images/locations/Alagir.png"
  },
  {
    title: "Гостевой дом у водопада",
    dates: "10-17 июля",
    discount: 15,
    oldPrice: "35 000",
    price: "29 750",
    image: "/images/locations/Dargavs.png"
  }
]);

const bookOffer = (offer) => {
  // Логика бронирования
  console.log("Бронируем:", offer.title);
};
</script>

<style scoped>
.hot-offers {
  max-width: 1064px;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;
  padding: 60px 0px;
  /* background: linear-gradient(to bottom, #fff 0%, #f8f9fa 100%); */
}

.section-title {
  text-align: center;
  font-size: 28px;
  margin-bottom: 30px;
}

.badge {
  color: #ff3b30;
}

.offers-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
  max-width: 1200px;
  margin: 0 auto;
}

.offer-card {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.offer-card:hover {
  transform: translateY(-5px);
}

.offer-badge {
  position: absolute;
  top: 15px;
  right: 15px;
  background: #ff3b30;
  color: white;
  padding: 5px 10px;
  border-radius: 20px;
  font-weight: bold;
  z-index: 2;
}

.offer-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.offer-content {
  padding: 20px;
  background: white;
}

.offer-dates {
  color: #ff3b30;
  font-weight: 500;
  margin: 8px 0;
}

.offer-price {
  font-size: 20px;
  font-weight: bold;
  margin: 10px 0;
}

.old-price {
  text-decoration: line-through;
  color: #8e8e93;
  font-size: 16px;
  margin-right: 8px;
}

.book-button {
  width: 100%;
  padding: 12px;
  background: #1d68f0;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s;
}

.book-button:hover {
  background: #1552c1;
}

@media (max-width: 768px) {
  .offers-grid {
    grid-template-columns: 1fr;
  }
}
</style>