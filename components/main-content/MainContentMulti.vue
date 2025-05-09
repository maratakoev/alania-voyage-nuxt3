<template>
  <div class="main-content">
    <!-- Слот для фонового изображения/видео -->
    <slot name="image"></slot>
    
    <div class="main-content__content" :style="{ marginTop: marginTop + 'px' }">
      <h2 class="main-content__title">{{ title }}</h2>
      <h3 class="main-content__subtitle">{{ subTitle }}</h3>
      
      <!-- Фильтры-табы -->
      <div class="tabs">
        <button 
          v-for="tab in tabs" 
          :key="tab.id"
          :class="{ 'active': activeTab === tab.id }"
          @click="activeTab = tab.id"
        >
          {{ tab.label }}
        </button>
      </div>
      
      <!-- Контент в зависимости от выбранного таба -->
      <div class="tab-content">
        <!-- Экскурсии -->
        <div v-if="activeTab === 'excursions'" class="excursions-grid">
          <div 
            v-for="item in excursions" 
            :key="item.id"
            class="card"
            @click="selectItem(item)"
          >
            <img :src="item.image" :alt="item.title">
            <h4>{{ item.title }}</h4>
            <div class="meta">
              <span class="rating">★ {{ item.rating }}/5</span>
              <span class="price">{{ item.price }} ₽</span>
            </div>
          </div>
        </div>
        
        <!-- Проживание -->
        <div v-if="activeTab === 'housing'" class="housing-grid">
          <div 
            v-for="item in housing" 
            :key="item.id"
            class="card"
            @click="selectItem(item)"
          >
            <img :src="item.image" :alt="item.title">
            <h4>{{ item.title }}</h4>
            <div class="meta">
              <span class="type">{{ item.type }}</span>
              <span class="price">{{ item.price }} ₽/ночь</span>
            </div>
          </div>
        </div>
        
        <!-- Готовые туры -->
        <div v-if="activeTab === 'tours'" class="tours-grid">
          <div 
            v-for="item in tours" 
            :key="item.id"
            class="card"
            @click="selectItem(item)"
          >
            <div v-if="item.discount" class="discount-badge">
              -{{ item.discount }}%
            </div>
            <img :src="item.image" :alt="item.title">
            <h4>{{ item.title }}</h4>
            <div class="meta">
              <span class="days">{{ item.days }} дней</span>
              <span class="price">
                <span v-if="item.discount" class="old-price">{{ item.oldPrice }} ₽</span>
                {{ item.price }} ₽
              </span>
            </div>
          </div>
        </div>
      </div>
      
      <div class="buttons">
        <btn-one 
          buttonText="Узнать больше"
          :buttonBgColor="buttonColor"
          :buttonFontColor="buttonFontColor"
          @click="openModal"
        />
        <btn-second
          buttonText="Забронировать"
          :buttonBgColor="buttonColor" 
        />
      </div>
    </div>

    <Modal
      :isOpen="isModalOpen"
      :modalData="modalData"
      @close="closeModal"
      @button1-click="onButton1Click"
      @button2-click="onButton2Click"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Состояние
const isModalOpen = ref(false);
const activeTab = ref('excursions');

// Данные
const tabs = [
  { id: 'excursions', label: 'Экскурсии' },
  { id: 'housing', label: 'Проживание' },
  { id: 'tours', label: 'Готовые туры' }
];

const excursions = [
  {
    id: 1,
    title: 'Треккинг в Домбай',
    image: "/images/6.png" ,
    rating: 4.9,
    price: 3500
  },
  {
    id: 2,
    title: 'Конная прогулка',
    image: '/excursion2.jpg',
    rating: 4.7,
    price: 2800
  }
];

const housing = [
  {
    id: 1,
    title: 'Гостевой дом "У озера"',
    image: "/images/6.png" ,
    type: 'Гостевой дом',
    price: 4200
  },
  {
    id: 2,
    title: 'Шале "Горный воздух"',
    image: "/images/6.png" ,
    type: 'Шале',
    price: 6800
  }
];

const tours = [
  {
    id: 1,
    title: 'Тур "Все краски Кавказа"',
    image: "/images/6.png" ,
    days: 5,
    price: 24500,
    oldPrice: 28900,
    discount: 15
  },
  {
    id: 2,
    title: 'Романтический уикенд',
    image: "/images/6.png" ,
    days: 2,
    price: 12900,
    oldPrice: 14900,
    discount: 13
  }
];

// Методы
const selectItem = (item) => {
  console.log('Выбрано:', item.title);
};

const openModal = () => {
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};

const onButton1Click = () => {
  console.log('Перехожу на секцию');
  closeModal();
};

const onButton2Click = () => {
  console.log('Закрываю модалку');
  closeModal();
};

// Пропсы
defineProps({
  title: String,
  subTitle: String,
  marginTop: { type: Number, default: 70 },
  buttonColor: String,
  buttonFontColor: String,
  modalData: {
    type: Object,
    default: () => ({
      title: '',
      content: '',
      button1Text: 'Перейти в раздел',
      button2Text: 'Закрыть',
      button1BgColor: '#4CAF50',
      button2BgColor: '#f44336',
      button1FontColor: '#fff',
      button2FontColor: '#fff',
    })
  }
});
</script>

<style scoped>
.main-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.main-content__content {
  max-width: 1200px;
  width: 100%;
  padding: 0 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.main-content__title {
  text-align: center;
  margin-bottom: 10px;
  color: white;
  font-size: 50px;
  text-shadow: 1px 1px 3px rgba(0,0,0,0.5);
}

.main-content__subtitle {
  text-align: center;
  margin-bottom: 25px;
  color: white;
  font-size: 35px;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
}

/* Стили для табов */
.tabs {
  display: flex;
  gap: 15px;
  margin-bottom: 30px;
}

.tabs button {
  padding: 12px 24px;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  border-radius: 30px;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  font-size: 16px;
}

.tabs button.active {
  background: white;
  color: #333;
}

/* Стили для карточек */
.tab-content {
  width: 100%;
  margin-bottom: 40px;
}

.excursions-grid,
.housing-grid,
.tours-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 25px;
  padding: 0 15px;
}

.card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  transition: transform 0.3s;
  cursor: pointer;
}

.card:hover {
  transform: translateY(-5px);
}

.card img {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.card h4 {
  padding: 15px;
  margin: 0;
  font-size: 18px;
  color: #333;
}

.card .meta {
  display: flex;
  justify-content: space-between;
  padding: 0 15px 15px;
  font-size: 14px;
}

.rating {
  color: #ff9800;
  font-weight: bold;
}

.price {
  font-weight: bold;
  color: #333;
}

.old-price {
  text-decoration: line-through;
  color: #999;
  margin-right: 8px;
}

.discount-badge {
  position: absolute;
  top: 10px;
  right: 10px;
  background: #f44336;
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-weight: bold;
  font-size: 14px;
}

.buttons {
  display: flex;
  gap: 20px;
  margin-top: 20px;
}

/* Адаптация для мобильных */
@media (max-width: 768px) {
  .main-content__title {
    font-size: 32px;
  }
  
  .main-content__subtitle {
    font-size: 24px;
  }
  
  .tabs {
    flex-direction: column;
    gap: 8px;
    width: 100%;
  }
  
  .tabs button {
    width: 100%;
  }
  
  .excursions-grid,
  .housing-grid,
  .tours-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .buttons {
    flex-direction: column;
    width: 100%;
  }
  
  .buttons > * {
    width: 100%;
  }
}
</style>