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
const ButtonSecText = 'Написать в чат'



const modalData = ref([
{
  "title": "Точка тишины",
  "content": `
    <p><strong>«Точка тишины» — частный коттедж на первой видовой линии, где каждый рассвет — как произведение искусства.</strong></p>

    <p>Расположен на возвышенности в Фиагдоне. Первая видовая линия. Высота, на которой кончаются дороги и начинается созерцание. 
    Панорамные окна от пола до потолка открывают захватывающий вид на кавказские вершины высотой до 3500 метров. Здесь небо и горы — главные герои вашего утра.</p>

    <p>Пространство идеально для двоих: уютная спальня с двуспальной кроватью и студия из которой открывается вид, от которого невозможно оторваться.</p>

    <p><strong>Это не просто коттедж — это ваше личное место силы на краю мира.</strong></p>
  `,
  "button1Text": "Забронировать"
},
{
  "title": "Точка тишины",
  "content": `
    <p><strong>«Точка тишины» — частный коттедж на первой видовой линии, где каждый рассвет — как произведение искусства.</strong></p>

    <p>Расположен на возвышенности в Фиагдоне. Первая видовая линия. Высота, на которой кончаются дороги и начинается созерцание. 
    Панорамные окна от пола до потолка открывают захватывающий вид на кавказские вершины высотой до 3500 метров. Здесь небо и горы — главные герои вашего утра.</p>

    <p>Пространство идеально для двоих: уютная спальня с двуспальной кроватью и студия из которой открывается вид, от которого невозможно оторваться.</p>

    <p><strong>Это не просто коттедж — это ваше личное место силы на краю мира.</strong></p>
  `,
  "button1Text": "Забронировать"
}


])
</script>


<style scoped>


/* .living {
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
} */

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

.nav {
position: absolute;
margin-top: -70px;
}

/* .content-title {
  padding-top: 70px;
} */


@media (max-width: 1000px) {
  .content-title {
  width: 80%;
}


}

</style>
