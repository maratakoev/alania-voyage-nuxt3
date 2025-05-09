<template>
  <button class="button" :style="{ backgroundColor: buttonBgColor, color: buttonFontColor}">
    {{ buttonText }}
  </button>
</template>

<script setup>
defineProps({
  buttonText: String,
  buttonBgColor: {
    type: String,
    default:  'black'
  },
  buttonFontColor: {
    type: String,
    default:  'white'
  }
});
</script>

<style scoped>
.button {
  padding: 15px 30px;
  font-size: 1rem;
  font-weight: 500;
  color: white;
  border-radius: 30px;
  border: none;
  cursor: pointer;
  text-align: center;
  text-transform: uppercase;
  transition: background-color 0.3s;
  cursor: pointer;
  transition: transform 0.3s ease;
  letter-spacing: 1.1px;
  -webkit-tap-highlight-color: transparent; /* Для мобильных устройств */


}

.button:hover {
  opacity: 0.9;
  transform: scale(1.1);

}

@media (max-width: 600px) {
  .button {
  font-size: 0.8rem;
  padding: 15px 20px;
  letter-spacing: 1.1px;
  }   
}
</style>
