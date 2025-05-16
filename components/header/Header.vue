<template>
  <div class="header" @mouseleave="hideSubMenu">
    <div class="content">
      <nav class="header__navigation">
        <span>
          <router-link to="/">
            <img :src="logo" 
              alt="Logo" 
              class="header__logo"
            >            
          </router-link>
        </span>
        <router-link 
          v-for="(item, index) in menuItems"
          :key="index"
          class="header__item" 
          :to="item.route"
        >{{ item.label }}
        </router-link>
        <burger></burger>
      </nav>
      
    </div>
  </div>
</template>

<script setup>
import Burger from '../buttons/Burger.vue';

// Получаем данные от родителя через props
const props = defineProps({
  logo: String,  // Логотип
  menuItems: Array,  // Пункты меню
});


const emit = defineEmits();
</script>

<style>
.header__submenu-subtitle a,
.header__submenu-item a {
  color: inherit;
  text-decoration: none;
  display: block;
  width: 100%;
  height: 100%;
}


.header {
  background-color: rgba(255, 255, 255, 0.75);
  position: relative;
  width: 100%;
  top: 0;
  z-index: 1000;
  backdrop-filter: blur(25px);
}

.content {
  max-width: 1064px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header__navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
  height: 70px;
  color: #333;
  text-decoration: none;
  padding: 0px 0px;
  margin: 0px 0px;
}

.header__item {
  text-decoration: none;
  color: #0E2433;
  transition: transform 0.3s ease, text-decoration 0.3s ease;
}

.header__item:hover {
  transform: scale(1.1);
}

.header__item.router-link-exact-active {
  color: rgb(216, 174, 94); /* Цвет для активной ссылки */
  transform: scale(1.2);
}

.header__logo {
  width: 50px;
  /* backdrop-filter: blur(25px); */
  border-radius: 8px;
  /* border: 2px solid rgb(214, 165, 83); */
  cursor: pointer;
  transition: transform 0.3s ease;
}

.header__logo:hover {
  transform: scale(1.1);
}


@media (max-width: 900px) { /* Настроить под ваш брейкпоинт */
  .header__item {
    display: none;
  }
  
}
</style>
