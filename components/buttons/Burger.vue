<template>
  <div class="burger" @click="toggle">
    <div class="burger__line top" :class="{ active: isOpen, rotated: isRotated }"></div>
    <div class="burger__line bottom" :class="{ active: isOpen, rotated: isRotated }"></div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const isOpen = ref(false);
const isRotated = ref(false);

const emit = defineEmits();


const toggle = () => {
  
  if (!isOpen.value) {
    isOpen.value = true;
    setTimeout(() => {
      isRotated.value = true;
    }, 200);
  } else {
    isRotated.value = false;
    setTimeout(() => {
      isOpen.value = false;
    }, 200);
  }
  emit('toggle', isOpen.value);

};
</script>

<style scoped>
.burger {
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;

  -webkit-tap-highlight-color: transparent;
}

.burger__line {
  width: 30px;
  height: 3px;
  background-color: rgb(16, 14, 73);
  position: absolute;
  transition: transform 0.2s ease, opacity 0.1s ease;
}

.top {
  transform: translateY(-8px);
}

.bottom {
  transform: translateY(8px);
}

.active {
  transform: translateY(0);
}

.rotated.top {
  transform: rotate(45deg);
}

.rotated.bottom {
  transform: rotate(-45deg);
}


@media (min-width: 900px) { /* Настроить под ваш брейкпоинт */
  .burger {
    display: none;
  }
}
</style>
