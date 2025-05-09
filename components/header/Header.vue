<template>
  <div class="header" @mouseleave="hideSubMenu">
    <div class="content">
      <nav class="header__navigation">
        <span>
          <router-link to="/">
            <img :src="logo" 
              alt="Logo" 
              class="header__logo"
              @mouseenter="hideSubMenu"  
            >            
          </router-link>
        </span>
        <router-link 
        @click="hideSubMenu"
          v-for="(item, index) in menuItems"
          :key="index"
          class="header__item" 
          :to="item.route"
          @mouseenter="showSubMenu(index)"
        >{{ item.label }}
        </router-link>
        <burger></burger>
      </nav>
      <div class="header__submenu" :style="submenuStyle" @mouseenter="cancelHide" @mouseleave="hideSubMenu">
        <div class="header__submenu-column">
          <span class="header__submenu-title">Наши экскурсии</span>
          <ul class="header__submenu-list">
            <li 
              v-for="(item, index) in submenuItems" 
              :key="index" 
              class="header__submenu-subtitle" 
              :style="getItemStyle(index)"
            >
            <router-link :to="item.route" @click="hideSubMenu">{{ item.label }}</router-link>
          </li>
          </ul>
        </div>
        <div class="header__submenu-column">
          <span class="header__submenu-title">Дополнительно</span>
          <ul class="header__submenu-list">
            <li 
              v-for="(item, index) in additionalItems" 
              :key="index" 
              class="header__submenu-item" 
              :style="getItemStyle(index)"
            >
              <router-link :to="item.route" @click="hideSubMenu">{{ item.label }}</router-link>
            </li>
          </ul>
        </div>
        <div class="header__submenu-column">
          <span class="header__submenu-title">Подробности</span>
          <ul class="header__submenu-list">
            <li 
              v-for="(item, index) in discriptionItems" 
              :key="index" 
              class="header__submenu-item" 
              :style="getItemStyle(index)"
            >
            <router-link :to="item.route" @click="hideSubMenu">{{ item.label }}</router-link>
          </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import Burger from '../buttons/Burger.vue';

// Получаем данные от родителя через props
const props = defineProps({
  logo: String,  // Логотип
  menuItems: Array,  // Пункты меню
});

const isSubMenuActive = ref(false);
const submenuItems = ref([]);
const additionalItems = ref([]);
const discriptionItems = ref([]);
const activeIndex = ref(-1); // Добавляем отслеживание активного индекса
let hideTimeout = null;
const hoverEnabled = ref(true);

const cancelHide = () => {
  clearTimeout(hideTimeout);
};


// const showSubMenu = (index) => {
//   if (!hoverEnabled.value) return; // блок по флагу
//   clearTimeout(hideTimeout);
//   if (activeIndex.value === index) return;

//   activeIndex.value = index;
//   const item = props.menuItems[index];
//   submenuItems.value = item.submenu || [];
//   additionalItems.value = item.additional || [];
//   discriptionItems.value = item.discription || [];
//   isSubMenuActive.value = submenuItems.value.length > 0;

//   emit('update:blurActive', isSubMenuActive.value);
// };



const hideSubMenu = () => {
  hoverEnabled.value = true;
  hideTimeout = setTimeout(() => {
    activeIndex.value = -1;
    submenuItems.value = [];
    additionalItems.value = [];
    discriptionItems.value = [];
    isSubMenuActive.value = false;
    emit('update:blurActive', false);
  }, 200); // задержка на скрытие
};

const handleClick = () => {
  hoverEnabled.value = false;
  hideSubMenu();
};

const emit = defineEmits();

const submenuStyle = computed(() => ({
  height: isSubMenuActive.value ? `${submenuItems.value.length * 50}px` : '0',
  opacity: isSubMenuActive.value ? '1' : '0',
  paddingTop: isSubMenuActive.value ? '25px' : '0',
  paddingBottom: isSubMenuActive.value ? '35px' : '0',
  overflow: 'hidden',
  transition: 'height 0.3s ease, opacity 0.3s ease',
}));

const getItemStyle = (index) => ({
  opacity: isSubMenuActive.value ? '1' : '0',
  transform: isSubMenuActive.value ? 'translateY(0)' : 'translateY(-10px)',
  transition: `transform 0.3s ease ${index * 0.1}s, opacity 0.3s ease ${index * 0.1}s`,
});
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

.header__submenu {
  display: flex;
  opacity: 0; /* Начальная непрозрачность */
  height: 0;  /* Начальная высота */
  overflow: hidden;  /* Скрытие содержимого при закрытии */
  transition: height 0.3s ease, opacity 0.3s ease; /* Плавный переход */
  padding: 0 50px;

}

.header__submenu-column {
  margin-right: 65px;
}

.header__submenu-title {
  height: 15px;
  font-size: 15px;
  margin-bottom: 20px;
}

.header__submenu-subtitle {
  transition: transform 0.3s ease, opacity 0.3s ease;
  height: 20px;
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 25px;
  cursor: pointer;
}

.header__submenu-subtitle:hover {
  transform: scale(1.1);
}

.header__submenu-list {
  padding-top: 25px;
  padding-left: 0;
  margin: 0;
  list-style: none;
}

.header__submenu-item {
  padding: 0;
  margin: 10px;
  transition: transform 0.3s ease, opacity 0.3s ease;
  height: 15px;
  font-size: 15px;
  cursor: pointer;
}

.header__submenu-item:hover {
  transform: scale(1.1);
}

@media (max-width: 900px) { /* Настроить под ваш брейкпоинт */
  .header__item {
    display: none;
  }
  
}
</style>
