<template>
  <button 
    class="transparent-button" 
    :style="{ border: '2px solid ' + buttonBgColor, color: buttonBgColor }"
    @click="handleClick">
      {{ buttonText }}
<!-- Кнопка с переходом в Telegram:
vue
<TransparentButton
  buttonText="Наш Telegram"
  buttonBgColor="#0088cc"
  telegramUrl="https://t.me/username"
/> -->

<!-- Кнопка с кастомным обработчиком:
vue
<TransparentButton
  buttonText="Открыть меню"
  buttonBgColor="green"
  :onClick="openMenu"
/> -->

  </button>
</template>

<script setup>
const props = defineProps({
  buttonText: String,
  buttonBgColor: {
    type: String,
    default:  'black'
  },
  telegramUrl: {
    type: String,
    default: ''
  },
  onClick: {
    type: Function,
    default: null
  }
});

const handleClick = (event) => {
  // 1. Если передан кастомный обработчик - вызываем его
  if (props.onClick) {
    props.onClick(event);
    return;
  }
  
  // 2. Если есть Telegram-ссылка - открываем её
  if (props.telegramUrl) {
    window.open(props.telegramUrl, '_blank'); // Исправлено '_blink' → '_blank'
    return;
  }
  
  // 3. Если ничего не передано - просто работает как кнопка
  console.log('Кнопка нажата');
};


</script>

<style scoped>
.transparent-button {
  padding: 15px 30px;
  font-size: 1rem;
  font-weight: 500;
  color: rgb(0, 0, 0);
  border: 2px solid rgb(0, 0, 0);
  background-color: transparent;
  border-radius: 30px;
  cursor: pointer;
  text-align: center;
  text-transform: uppercase;
  transition: background-color 0.3s, border-color 0.3s;
  backdrop-filter: blur(25px);
  cursor: pointer;
  transition: transform 0.3s ease;
  letter-spacing: 1.1px;
  -webkit-tap-highlight-color: transparent; /* Для мобильных устройств */


}

.transparent-button:hover {
  /* background-color: black; */
  transform: scale(1.1);
  color: white;

}

@media (max-width: 600px) {
  .transparent-button {
  font-size: 0.8rem;
  padding: 15px 20px;
  letter-spacing: 1.1px;
  }   
} 
</style>
