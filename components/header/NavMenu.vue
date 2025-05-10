<template>
  <div class="nav-menu">
    <!-- Мобильное меню, которое будет отображаться только на маленьких экранах -->
    <MobileMenu :logo="logo" :menuItems="menuItems" @update:blurActive="handleBlurChange" class="mobile-menu" />

    <!-- Обычное меню, которое будет отображаться только на больших экранах -->
    <Header :logo="logo" :menuItems="menuItems" @update:blurActive="handleBlurChange" class="web-menu" />

    <!-- Размытие фона при активном состоянии -->
    <!-- <div 
      v-if="isBlurActive" 
      class="blur-overlay"
      :class="{ 'fade-in': isBlurActive, 'fade-out': !isBlurActive }"
    ></div> -->


  </div>
</template>


<script setup>
import { ref } from 'vue';
import MobileMenu from './MobileMenu.vue';
import Header from './Header.vue';

const name = ref('');
// const logo_dark = '/images/LogoA.png';  
const logo = '/images/logo.png';  // Логотип
const menuItems = [
  {
    label: 'Экскурсии',
    route: '/excursions',
  },
  { 
    label: 'Проживание', route: '/living', 
    
  },
  { label: 'Полный тур', 
    route: '/tours', 
    
  },
  { label: 'Контакты', 
    route: '/about', 
    
  },

];

  // Создаем переменную для состояния blur
  // const isBlurActive = ref(false);

// Функция для обновления состояния blur из дочернего компонента
// const handleBlurChange = (newValue) => {
//   isBlurActive.value = newValue;
// };


// Define methods here if needed

</script>

<style scoped>
  .nav-menu {
    z-index: 100;
    width: 100%;
    /* height: 300px; */
    /* background-color: red; */
    background-color: transparent;
    position: relative;
  }


/* .blur-overlay {
  z-index: 10; 
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(0px); 
  opacity: 0;
  transition: backdrop-filter 2s ease 1s, opacity 2s ease 1s;

} */





@media (min-width: 901px) {
  .mobile-menu {
    display: none;
  }

}

@media (max-width: 900px) {
  .web-menu {
    display: none;
  }
}

</style>