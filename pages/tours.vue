<template>
  <div class="gallery">
    <NavMenu class="nav" />
    <Content-title :title="contentTitle" :discription="contentTitleDiscription" class="content-title"/>
    <MainContent 
      id="mountains"
      class="home__container"
      title="Выходные в горах"
      sub-title="Идеально для перезагрузки"
      :marginTop="130"
      :ButtonSecText="ButtonSecText"
      :modalData="modalData[0]"
      :rating="5"
      :reviewCount="30"
      :price="12000"
    >
      <template #image>
        <img src="/images/complecs.webp" alt="Image 1" class="main-content__image">
      </template>
    </MainContent>
    <MainContent 
      id="mountains"
      class="home__container"
      title="Алания-лайт:"
      sub-title="Северная Осетия за 72 часа "
      :marginTop="130"
      :ButtonSecText="ButtonSecText"
      :modalData="modalData[1]"
      :rating="5"
      :reviewCount="30"
      :price="12000"
    >
      <template #image>
        <img src="/images/complecs2.webp" alt="Image 1" class="main-content__image">
      </template>
    </MainContent>
    <MainContent 
      id="mountains"
      class="home__container"
      title="Гастрономический бунт:"
      sub-title="От пирогов до горного мёда"
      :marginTop="130"
      :ButtonSecText="ButtonSecText"
      :modalData="modalData[2]"
      :rating="5"
      :reviewCount="30"
      :price="12000"
    >
      <template #image>
        <img src="/images/hat.webp" alt="Image 1" class="main-content__image">
      </template>
    </MainContent>
    <MainContent 
      id="mountains"
      class="home__container"
      title="Фиагдон"
      sub-title="Панорамный коттедж"
      :marginTop="130"
      :ButtonSecText="ButtonSecText"
      :modalData="modalData[3]"
      :rating="5"
      :reviewCount="30"
      :price="12000"
    >
      <template #image>
        <img src="/images/pair.webp" alt="Image 1" class="main-content__image">
      </template>
    </MainContent>
    <MainContent 
      id="mountains"
      class="home__container"
      title="Фиагдон"
      sub-title="Панорамный коттедж"
      :marginTop="-250"
      :ButtonSecText="ButtonSecText"
      :modalData="modalData[4]"
      :rating="5"
      :reviewCount="30"
      :price="12000"
    >
      <template #image>
        <img src="/images/pairWedding.webp" alt="Image 1" class="main-content__image">
      </template>
    </MainContent>
    <MainContent 
      id="mountains"
      class="home__container"
      title="Фиагдон"
      sub-title="Панорамный коттедж"
      :marginTop="130"
      :ButtonSecText="ButtonSecText"
      :modalData="modalData[5]"
      :rating="5"
      :reviewCount="30"
      :price="12000"
    >
      <template #image>
        <img src="/images/ler.webp" alt="Image 1" class="main-content__image">
      </template>
    </MainContent>
    <MainContent 
      id="mountains"
      class="home__container"
      title="Фиагдон"
      sub-title="Панорамный коттедж"
      :marginTop="130"
      :ButtonSecText="ButtonSecText"
      :modalData="modalData[6]"
      :rating="5"
      :reviewCount="30"
      :price="12000"
    >
      <template #image>
        <img src="/images/lc.webp" alt="Image 1" class="main-content__image">
      </template>
    </MainContent>
    <FAQ>

    </FAQ>
    <Footer>

    </Footer>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import NavMenu from '@/components/header/NavMenu.vue';
import MainContent from '@/components/main-content/MainContent.vue';
import ContentTitle from '@/components/main-content/ContentTitle.vue';
import Footer from '@/components/main-content/Footer.vue';
import FAQ from '@/components/main-content/FAQ.vue';

const contentTitle = 'Все включено';
const contentTitleDiscription = 'Доверьте нам организацию отдыха';


const isModalOpen = ref(false);
const currentItem = ref({});

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


const openModal = (item) => {
  currentItem.value = item;
  isModalOpen.value = true;
  document.body.style.overflow = 'hidden';
};

const closeModal = () => {
  isModalOpen.value = false;
  document.body.style.overflow = '';
};
</script>

<style scoped>


.nav {
  position: sticky;
  top: 0;
  z-index: 100;
  margin-top: -70px;
}



.main-content__image {
  width: 100%;
  height: 580px;
  object-fit: cover;
  filter: brightness(70%) contrast(100%);
}

.main-content {
  margin-bottom: 20px; 
}

.gallery__container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px;
}

.gallery__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 25px;
  margin-bottom: 50px;
}

.gallery__item {
  position: relative;
  cursor: pointer;
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease;
  aspect-ratio: 4/3;
}

.gallery__item:hover {
  transform: scale(1.03);
}

.gallery__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.8);
  transition: filter 0.3s ease;
}

.gallery__item:hover .gallery__image {
  filter: brightness(0.6);
}

.gallery__overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
  color: white;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
}

.gallery__title {
  font-size: 24px;
  margin-bottom: 5px;
}

.gallery__subtitle {
  font-size: 16px;
  opacity: 0.9;
}

/* Модальное окно */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
}

.modal__content {
  background: white;
  max-width: 900px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  border-radius: 12px;
  position: relative;
  display: flex;
  flex-direction: column;
}

.modal__close {
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  font-size: 30px;
  cursor: pointer;
  color: #333;
  z-index: 10;
}

.modal__image {
  width: 100%;
  max-height: 500px;
  object-fit: cover;
}

.modal__text {
  padding: 25px;
}

.modal__text h2 {
  font-size: 28px;
  margin-bottom: 10px;
  color: #1D68F0;
}

.modal__text h3 {
  font-size: 20px;
  margin-bottom: 20px;
  color: #666;
}

.modal__text p {
  font-size: 16px;
  line-height: 1.6;
  color: #333;
}

@media (max-width: 768px) {
  .gallery__grid {
    grid-template-columns: 1fr;
  }
  
  .modal__content {
    flex-direction: column;
  }
  
  .modal__image {
    max-height: 300px;
  }
}
</style>