<template>
  <div class="content-title content">
    <div class="content-title__title">
      {{ title }}
    </div>
    <div class="content-title__subtitle">
      {{ discription }}
    </div>
  </div>
</template>

<script setup>

defineProps({
  title: {
    type: String,
    required: true
  },
  discription: {
    type: String,
    required: true
  }
});

const contentSubTitle = 'Увидеть своими глазами.';


// Define methods here if needed

</script>

<style scoped>
/* .content {
  max-width: 1064px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
} */
.content-title {
  max-width: 1064px;
  height: 90px;
  padding: 0 15px;
  margin-top: 30px;
  margin-bottom: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  vertical-align: baseline;
  width: 100%; /* Добавляем */
  box-sizing: border-box;

  
  

}
.content-title__title {
  font-size: 80px;
  color: black;
  font-weight: 800;
  word-spacing: 2px;

}

.content-title__subtitle {
  font-size: 30px;
  color: black;
  font-weight: 600;
  word-spacing: 2px;
  max-width: 300px;
  align-items: baseline;
  text-align: right;

}

@media (max-width: 768px) {
  .content-title__subtitle {
    display: none;
  }
  .content-title__title {
    font-size: 55px;
    
  }
  .content-title {
    width: 90%;
    
  }
}

@media (max-width: 430px) {
  /* .content-title__title {
    font-size: 55px;
    
  }
  .content-title__subtitle {

  margin-top: 0px;
  margin-bottom: 0px;


} */

}

@media (max-width: 390px) {
  /* .content-title__title {
    font-size: 48px;
  } */

}

</style>