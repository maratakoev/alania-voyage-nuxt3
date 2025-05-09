<template>
  <div class="living">
    <NavMenu class="nav" />
    <Content-title :title="contentTitle" :discription="contentTitleDiscription" class="content-title"/>
    <!-- <Title-image :imageSrc="imageSrc"></Title-image> -->
    <!-- <ContentSubTitle :title="contentSubTitle"></ContentSubTitle> -->
    <MainContent 
      id="mountains"
      class="home__container"
      title="Фиагдон"
      sub-title="Панорамный коттедж"
      :marginTop="130"
      :ButtonSecText="ButtonSecText"
      :modalData="modalData[0]"
      :rating="5"
      :reviewCount="30"
      :price="12000"



    >
      <template #image>
        <img src="@/public/images/hero-poster.webp" alt="Image 1" class="main-content__image">
      </template>
    </MainContent>
    <MainContent 
      id="vladikavkaz"
      class="home__container"
      title="Владикавказ"
      sub-title="Уютная квартира с видом на горы"
      :marginTop="130"
      :ButtonSecText="ButtonSecText"
      :modalData="modalData[1]"
      :rating="5"
      :reviewCount="30"
      :price="3000"

    >
      <template #image>
        <img src="@/public/images/hero-poster.webp" alt="Image 1" class="main-content__image">
      </template>
    </MainContent>
    <Footer></Footer>
    <!-- <Discription :articleText="article"></Discription> -->
  </div>
</template>

<script setup>
import NavMenu from '@/components/header/NavMenu.vue';
import ContentTitle from '@/components/main-content/ContentTitle.vue';
import TitleImage from '@/components/main-content/TitleImage.vue';
import ContentSubTitle from '@/components/main-content/ContentSubTitle.vue';
import Discription from '@/components/main-content/Discription.vue';
import MainContent from '@/components/main-content/MainContent.vue';
import Footer from '@/components/main-content/Footer.vue';
import { ref } from 'vue';

const contentTitle = 'Проживание';
const contentTitleDiscription = 'Сказочные панорамы';
const contentSubTitle = 'Узнать подробнее';
const ButtonSecText = 'Написать в чат'


const imageSrc = new URL('@/assets/titleImages/11.png', import.meta.url).href;

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


.living {
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
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
