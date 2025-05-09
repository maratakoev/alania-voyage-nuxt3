<template>
  <div class="nav-menu">
    <!-- Мобильное меню, которое будет отображаться только на маленьких экранах -->
    <MobileMenu :logo="logo" :menuItems="menuItems" @update:blurActive="handleBlurChange" class="mobile-menu" />

    <!-- Обычное меню, которое будет отображаться только на больших экранах -->
    <Header :logo="logo" :menuItems="menuItems" @update:blurActive="handleBlurChange" class="web-menu" />

    <!-- Размытие фона при активном состоянии -->
    <div 
      v-show="isBlurActive" 
      class="blur-overlay"
      :class="{ 'fade-in': isBlurActive, 'fade-out': !isBlurActive }"
    ></div>


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
    submenu: [
      { label: 'Кольцо Осетии', route: '/routs#ring-osetii' },
      { label: 'Кариу Хох', route: '/routs#kariy-xox' },
      { label: 'Верхний Мизур и Мамисон', route: '/routs#mizur-mamison' },
      { label: 'Кармадон и Даргавс', route: '/routs#karmadon-dargavs' },
      { label: 'Горная Дигория', route: '/routs#digoria' },
      { label: 'Уаллаг Ком', route: '/routs#yallag-kom' },
    ],
    additional: [
      { label: 'Обед', route: '/services#trump' },
      { label: 'Встретить рассвет', route: '/services#sunrise' },
      { label: 'Прогулка на лошадях', route: '/services#horses' },
      { label: 'Йога', route: '/services#yoga' },
      { label: 'Кейтринг', route: '/services#catering' },
      { label: 'Параплан', route: '/services#paragliding' },
      { label: 'Сплав по реке', route: '/services#rafting' },
      { label: 'Фотограф', route: '/services#photographer' },
      { label: 'Видеограф', route: '/services#videographer' },
      { label: 'Аэросъемка', route: '/services#aerial' },
    ],    
    discription: [
      { label: 'Как проходит экскурсия', route: '/info#how-it-works' },
      { label: 'Групповые туры', route: '/info#group-tours' },
      { label: 'Праздники в горах', route: '/info#holidays' },
    ],  
  },
  { 
    label: 'Проживание', route: '/living', 
    submenu: [
      { label: 'В горах', route: '/living#mountains' },
      { label: 'Во Владикавказе', route: '/living#vladikavkaz' }
    ],  
  },
  { label: 'Полный тур', 
    route: '/tours', 
    submenu: [
      { label: 'Фотографии', route: '/galery#photos' }
    ], 
  },
  { label: 'Контакты', 
    route: '/about', 
    submenu: [
        { label: 'Соц сети', route: '/about#social' },
    ], 
  },

];

  // Создаем переменную для состояния blur
  const isBlurActive = ref(false);

// Функция для обновления состояния blur из дочернего компонента
const handleBlurChange = (newValue) => {
  isBlurActive.value = newValue;
};


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


.blur-overlay {
  z-index: 10; /* Размытие будет под подменю */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.4); /* Полупрозрачный фон */
  backdrop-filter: blur(0px); /* Размытие фона */
  opacity: 0; /* Скрыт при изначальном состоянии */
  transition: backdrop-filter 2s ease 1s, opacity 2s ease 1s; /* увеличили время анимации и добавили задержку */

}

.blur-overlay.fade-in {
  backdrop-filter: blur(10px); /* Добавляем размытие при активном состоянии */
  opacity: 1; /* Плавно появляется */
  transition: backdrop-filter 3s ease, opacity 3s ease; /* Плавная анимация исчезновения */

}

.blur-overlay.fade-out {
  backdrop-filter: blur(10px); /* Добавляем размытие при активном состоянии */
  opacity: 0; /* Плавно появляется */
  transition: backdrop-filter 3s ease, opacity 3s ease; /* Плавная анимация исчезновения */

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