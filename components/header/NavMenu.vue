<template>
  <div class="nav-menu">
    <!-- Мобильное меню, которое будет отображаться только на маленьких экранах -->
    <MobileMenu :logo="logo" :menuItems="menuItems" @update:blurActive="handleBlurChange" class="mobile-menu" />

    <!-- Обычное меню, которое будет отображаться только на больших экранах -->
    <Header :logo="logo" :menuItems="menuItems" @update:blurActive="handleBlurChange" class="web-menu" />

  </div>
</template>


<script setup>
import { ref } from 'vue';
import MobileMenu from './MobileMenu.vue';
import Header from './Header.vue';

const name = ref('');
const logo = '/images/logo.png';  // Логотип
const menuItems = [
{
    label: 'Главная',
    route: '/',
  },
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
  { label: '+7 988 835 7227', 
    route: '', 
    
  },
  // { label: 'Личный кабинет', 
  //   route: '/registration', 
    
  // },


];

</script>

<style scoped>
  .nav-menu {
    z-index: 100;
    width: 100%;
    background-color: transparent;
    position: relative;
  }

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