<template>
  <div class="living">
    <NavMenu class="nav" />
    <Content-title :title="contentTitle" :discription="contentTitleDiscription" class="content-title"/>
    <MainContent 
      id="mountains"
      class="home__container"
      title="Горная Осетия"
      sub-title="Панорамные коттеджи"
      :marginTop="130"
      :ButtonSecText="ButtonSecText"
      :modalData="modalData[0]"
      :rating="5"
      :reviewCount="30"
      :price="12000"
      :lazyLoad="true"
      @info-modal-change="infoModalState"
      @booking-modal-change="bookingModalState"
    >
    <template #image>
          <picture>
            <!-- WebP форматы -->
            <source 
              srcset="
                /images/fiagdon-house-480.webp 480w,
                /images/fiagdon-house-768.webp 768w,
                /images/fiagdon-house-960.webp 960w
              "
              sizes="(max-width: 480px) 480px, 
                      (max-width: 768px) 768px, 
                      960px"
              type="image/webp"
            >
          
            <!-- JPEG fallback -->
            <source 
              srcset="
                /images/fiagdon-house-480.jpg 480w,
                /images/fiagdon-house-768.jpg 768w,
                /images/fiagdon-house-960.jpg 960w
              "
              sizes="(max-width: 480px) 480px, 
                      (max-width: 768px) 768px, 
                      960px"
              type="image/jpeg"
            >
          
            <!-- Fallback <img> -->
            <img 
              src="/images/fiagdon-house-960.jpg" 
              alt="Коттедж в Осетии для аренды"
              loading="lazy" 
              decoding="async" 
              class="main-content__image-small">
          </picture>
        </template>
    </MainContent>
    <MainContent 
      id="vladikavkaz"
      class="home__container"
      title="Владикавказ"
      sub-title="Уютные квартиры, гостиницы, отели"
      :marginTop="130"
      :ButtonSecText="ButtonSecText"
      :modalData="modalData[1]"
      :rating="5"
      :reviewCount="30"
      :price="3000"
      :lazyLoad="true"
      @info-modal-change="infoModalState"
      @booking-modal-change="bookingModalState"
    >
    <template #image>
          <picture>
            <!-- WebP форматы -->
            <source 
              srcset="
                /images/hotel-480.webp 480w,
                /images/hotel-768.webp 768w,
                /images/hotel-960.webp 960w,
                /images/hotel-1400.webp 1400w 
              "
              sizes="(max-width: 480px) 480px, 
                      (max-width: 768px) 768px, 
                      960px"
              type="image/webp"
            >
          
            <!-- JPEG fallback -->
            <source 
              srcset="
                /images/hotel-480.jpg 480w,
                /images/hotel-768.jpg 768w,
                /images/hotel-960.jpg 960w,
                /images/hotel-1400.jpg 1400w 
              "
              sizes="(max-width: 480px) 480px, 
                      (max-width: 768px) 768px, 
                      960px"
              type="image/jpeg"
            >
          
            <!-- Fallback <img> -->
            <img 
              src="/images/hotel-960.jpg" 
              alt="Коттедж в Осетии для аренды"
              loading="lazy" 
              decoding="async" 
              class="main-content__image-small">
          </picture>
        </template>
    </MainContent>
    <Footer></Footer>
  </div>
</template>

<script setup>
import NavMenu from '@/components/header/NavMenu.vue';
import ContentTitle from '@/components/main-content/ContentTitle.vue';
import MainContent from '@/components/main-content/MainContent.vue';
import Footer from '@/components/main-content/Footer.vue';
import { ref } from 'vue';

const contentTitle = 'Проживание';
const contentTitleDiscription = 'Сказочные панорамы';
const ButtonSecText = 'Забронировать'

function infoModalState(isOpen){
  document.body.style.overflow = isOpen ? 'hidden' : ''
}

function bookingModalState(isOpen) {
  document.body.style.overflow = isOpen ? 'hidden' : ''
}

const modalData = ref([
{
  "title": "Единение с приодой",
  serviceType: 'accommodation', 
  "content": `
    <p><strong>Подберём идеальное жильё в горах Осетии — от уединённых отелей до комфортных коттеджей с панорамными видами.</strong></p>

    <p>Варианты размещения по вашему запросу:
    <br><strong>Уединение:</strong> Домики в дали от цивилизации, только вы и горные хребты
    <br><strong>Фиагдон:</strong> Современные коттеджи, а кафе и рестраны в 5 мин езды на авто
    <br><strong>Семьи:</strong> Комплексы с огороженной территорией и игровыми площадками</p>

    <p>Все локации лично проверены нами и имеют рейтинг 4.9+ по отзывам гостей. </p>

    <p><strong>Ваш горный дом уже ждёт — осталось выбрать характер приключения.</strong></p>
`,
  "button1Text": "Забронировать",
  "button2Text": 'Закрыть',

},
{
  "title": "Владикавказ",
  serviceType: 'accommodation', 
  "content": `  
    <p><strong>«Окно в культуру» — проверенные варианты жилья в центре Владикавказа, где история становится частью вашего путешествия.</strong></p>  

    <p>Расположены в пешей доступности от проспекта Мира. 5 минут до театров, 10 минут до набережной Терека. Ваш день начинается с ароматного кофе на набережной и заканчивается прогулкой по старому Владикавказу XIX века.</p>  

    <p>Выбирайте свой формат:  
    <br>🏛 Апартаменты в здании-памятнике с витражами и лепниной  
    <br>🛋 Стильные лофты с панорамой на Осетинскую церковь  
    <br>🎭 Гостевые дома с билетами на премьеры местных театров</p>  

    <p>Гарантируем:  
    <br>✅ Все объекты проверены лично (чистота, безопасность, аутентичность)  
    <br>✅ 95% вариантов — в радиусе 1 км от Музея истории Осетии  
    <br>✅ Ключи от «закрытых» двориков со столетними яблонями</p>  

    <p><strong>Это не просто ночлег — это пропуск в ритм города, где каждое окно смотрит в прошлое, а дверь ведёт к новым открытиям.</strong></p>  
`  ,
  "button1Text": "Забронировать",
  "button2Text": 'Закрыть',

}


])

const openTelegram = () => {
  window.open("https://t.me/maratakoev", "_blank", "noopener,noreferrer");
};

</script>


<style scoped>


.living {
  padding-top: 70px;
}
.nav {
  position: fixed;
  margin-top: -70px;
}
.main-content {
  margin-bottom: 20px; 
}

.main-content__image {
  width: 100%;
  height: 580px;
  object-fit: cover;
  filter: brightness(70%) contrast(100%);
}

.main-content__image-small {
  width: 100%;
  height: 580px;
  object-fit: cover;
  filter: brightness(70%) contrast(100%);
}



/* .content-title {
  padding-top: 70px;
} */


@media (max-width: 1000px) {
  /* .content-title {
  width: 80%;
} */


}

</style>
