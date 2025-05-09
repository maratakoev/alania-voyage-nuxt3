<template>
  <div class="title-image" :style="containerStyle">
    <img :src="imageSrc" class="title-image__img" :style="imageStyle">
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";

defineProps({
  imageSrc: {
    type: String,
    required: true
  }
});

const scrollY = ref(0);
const isMobile = ref(false);

// Более мягкие параметры для мобильных
const startOffset = isMobile.value ? 20 : 40;
const maxScroll = isMobile.value ? 100 : 150;

const handleScroll = () => {
  scrollY.value = Math.max(0, Math.min(window.scrollY - startOffset, maxScroll));
};

const checkMobile = () => {
  isMobile.value = window.innerWidth < 768;
};

onMounted(() => {
  checkMobile();
  window.addEventListener("scroll", handleScroll);
  window.addEventListener("resize", checkMobile);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
  window.removeEventListener("resize", checkMobile);
});

const progress = computed(() => {
  const currentMaxScroll = isMobile.value ? 100 : 150;
  return Math.max(0, Math.min(scrollY.value / currentMaxScroll, 1));
});

// Менее агрессивное уменьшение на мобильных
const containerStyle = computed(() => ({
  width: `${100 - (isMobile.value ? 8 : 15) * progress.value}%`
}));

// Меньше изменение скругления на мобильных
const imageStyle = computed(() => ({
  borderRadius: `${isMobile.value ? 24 : 44 * progress.value}px`,
  height: isMobile.value ? '500px' : '800px'
}));
</script>

<style scoped>
.title-image {
  margin-left: auto;
  margin-right: auto;
  transition: width 0.1s linear;
  max-width: 1200px;
}

.title-image__img {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  object-fit: cover;
  transition: all 0.1s linear;
}

@media (max-width: 768px) {
  .title-image__img {
    transition-duration: 0.2s; /* Более плавно на мобильных */
  }
}
</style>