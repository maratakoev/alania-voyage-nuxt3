<template>
  <div class="con">

    <h2 class="con__title">Эксрурсии</h2>

    <div>
    <img src="../../public/images/image-second.jpg" alt="Image 1" class="con__image">
  </div>
  
</div>
</template>

<script setup>
import { ref } from 'vue';

const name = ref('');

// Define methods here if needed
</script>

<style scoped>
.con {
  /* height: 800px; */
  /* background-color: blueviolet; */
  display: flex;
  flex-direction: column; /* Раскладываем изображения вертикально */
  align-items: center; /* Центрируем изображения по горизонтали */
}

.con__image {
  width: 100%; /* Ширина 100% для растягивания на всю ширину контейнера */
  height: 692px; /* Сохраняем пропорции изображений */
  margin-bottom: 20px; /* Отступ между изображениями */
  object-fit: cover; /* Сохраняет пропорции и не обрезает изображение */
  filter: brightness(80%) contrast(100%); /* Уменьшаем яркость */
  position: relative;

}

.con__title {
  position: absolute;
  margin-bottom: -400px;
  z-index: 2
  ;
}
</style>
