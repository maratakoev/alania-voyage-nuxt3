<template>
  <div class="mobile-menu">
    <div class="mobile-menu__header">
      <span class="mobile-menu__logo">
        <router-link to="/">
          <transition name="fade">

            <img :src="logo" 
              alt="Logo" 
              class="mobile-menu__img"
              v-if="!isOpen">
            
            
          </transition>
        
        </router-link>
      </span>
      <Burger class="burger" @toggle="handleBurgerToggle" />
    </div>

    <div class="mobile-menu__list" :style="menuStyle">
      <router-link 
        v-for="(item, index) in menuItems"
        :key="index"
        class="mobile-menu__item" 
        :to="item.route"
        @click="handleItemClick"

      >
        {{ item.label }}
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import Burger from '../buttons/Burger.vue';

const isOpen = ref(false);

const props = defineProps({
  logo: String,  // Логотип
  menuItems: Array,  // Пункты меню
});

const handleBurgerToggle = () => {
  isOpen.value = !isOpen.value;  // Меняем состояние на противоположное
};

const menuStyle = computed(() => ({
  height: isOpen.value ? '100vh' : '0',  // Анимация высоты
  opacity: isOpen.value ? '1' : '0',  // Анимация прозрачности
  transition: 'height 0.5s ease, opacity 0.5s ease',  // Плавная анимация
}));

</script>

<style scoped>
  .mobile-menu {
    background-color: #073487;
    width: 100%;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .mobile-menu__header {
    display: flex;
    padding: 15px;
    justify-content: space-between;
    height: 40px;
  }

  .mobile-menu__logo {
    position: relative;
    display: flex;
  }

  .mobile-menu__img {
    z-index: 150;
    height: 40px;
    width: 40px;
  }

  /* Плавная анимация для исчезновения */
  .fade-enter-active, 
  .fade-leave-active {
    transition: opacity 0.5s ease;  /* Плавное изменение прозрачности */
  }

  .fade-enter-from, 
  .fade-leave-to {
    opacity: 0;  /* Скрываем логотип */
  }

  .fade-enter-to {
    opacity: 1;  /* Показываем логотип при его появлении */
  }


  /* Плавная анимация по высоте */
  .mobile-menu__list {
    width: 50%;
    display: flex;
    flex-direction: column;
    list-style: none;
    padding-left: 15%;
    overflow: hidden;
    height: 0;  /* Начальная высота */
    opacity: 0;  /* Начальная прозрачность */
    transition: height 0.5s ease, opacity 0.5s ease;  /* Плавная анимация */
    
  }

  

  .mobile-menu__item {
    color: white;
    text-decoration: none;
    letter-spacing: 2px;
    font-size: 35px;
    font-weight: 600;
    margin-bottom: 15px;
    cursor: pointer;
    opacity: 0;  /* Начальная прозрачность */
    transform: translateY(-10px);  /* Начальное смещение по вертикали */
    transition: opacity 0.3s ease, transform 0.3s ease;
  }

  .mobile-menu__item:nth-child(n+1) {
    transition-delay: 0.1s;
    margin-top: 20px;
  }

  .mobile-menu__item:nth-child(n+2) {
    transition-delay: 0.2s;
  }

  .mobile-menu__item:nth-child(n+3) {
    transition-delay: 0.3s;
  }

  /* Когда меню открыто, пункты становятся видимыми */
  .mobile-menu__list[style*="height: 100vh;"] .mobile-menu__item {
    opacity: 1;
    transform: translateY(0);
  }

  .mobile-menu__link {
    text-decoration: none;
    color: white;
    font-size: 18px;
    transition: color 0.3s ease;
  }

  .mobile-menu__link:hover {
    color: #1D68F0;
  }


  @media (min-width: 901px) {
  .mobile-menu {
    display: none;
  }

}

  @media (max-width: 900px) {
  .mobile-menu__item {
    
    font-size: 28px;
  }
}
</style>
