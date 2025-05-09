<template>
  <section class="usp-section">
    <h2 class="section-title">Почему выбирают нас</h2>
    <div class="usp-grid">
      <div v-for="(item, index) in uspItems" :key="index" class="usp-card">
        <div class="usp-icon">
          <img :src="item.icon" :alt="item.title">
        </div>
        <h3>{{ item.title }}</h3>
        <p>{{ item.description }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'; // Добавьте этот импорт

const uspItems = ref([
  {
    title: "Гиды-осетины",
    description: "Знают каждый камень в горах",
    icon: "images/icons/person.svg"
  },
  {
    title: "Безопасность",
    description: "Подготовленные внедорожники",
    icon: "images/icons/safety.svg"
  },
  {
    title: "Гарантия цены",
    description: "Дешевле чем на сайтах-агрегаторах",
    icon: "images/icons/price.svg"
  }
]);
</script>

<style scoped>
.usp-section {
  padding: 80px 20px;
  background: white;
}

.usp-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
}

.usp-card {
  text-align: center;
  padding: 25px;
  border-radius: 12px;
  transition: transform 0.3s ease;
}

.usp-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
}

.usp-icon {
  width: 60px;
  height: 60px;
  margin: 0 auto 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.usp-icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.usp-card h3 {
  font-size: 20px;
  margin-bottom: 10px;
  color: #1c1c1e;
}

.usp-card p {
  color: #8e8e93;
  line-height: 1.5;
}

@media (max-width: 600px) {
  .usp-grid {
    grid-template-columns: 1fr;
  }
}
</style>