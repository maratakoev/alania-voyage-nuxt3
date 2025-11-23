<template>
  <main class="home">
    <NavMenu class="nav" />
    <section aria-label="Организуем отдых в Осетии">
      <MainContent 
      class="hero-section"
      title="Отдых в Осетии!"
      sub-title="Приключение начинается..."
      :buttonColor="'#1D68F0'"
      :marginTop="20"
      :modalData="modalData[0]"
      videoSrc="/videos/hero-background.mp4"
      videoPoster="/images/complecs.webp"
      :lazyLoad="false"
      :ButtonSecText="ButtonSecText"
      @info-modal-change="infoModalState"
      @booking-modal-change="bookingModalState"

    >
    </MainContent>
    </section>

    <section aria-label="Отдых в горах">
      <MainContent 
      :buttonFontColor="black"
      :buttonColor="white"
      :marginTop="-110"
      videoSrc="/videos/tours.mp4"
      videoPoster="/images/alagir-ardon.webp"
      title="Выходные в горах"
      sub-title="Прочувствуй энергию гор" 
      :modalData="modalData[1]"
      :lazyLoad="true"
      :ButtonSecText="ButtonSecText"
      @info-modal-change="infoModalState"
      @booking-modal-change="bookingModalState"
    >
    
    </MainContent>
    </section>

    <section aria-label="Экскурсии и проживание в Осетии">
      <div class="home__table"> 
        <MainContent 
          :marginTop="235"
          :buttonColor="'#1D68F0'"
          title="Экскурсия"
          sub-title="С комфортом на внедорожнике"
          :modalData="modalData[2]"
          :ButtonSecText="ButtonSecText"
          :lazyLoad="true"
          @info-modal-change="infoModalState"
          @booking-modal-change="bookingModalState"

        >
        <template #image>
          <picture>
            <!-- WebP форматы -->
            <source 
              srcset="
                /images/zgid-480.webp 480w,
                /images/zgid-768.webp 768w,
                /images/zgid-960.webp 960w
              "
              sizes="(max-width: 480px) 480px, 
                      (max-width: 768px) 768px, 
                      960px"
              type="image/webp"
            >
          
            <!-- JPEG fallback -->
            <source 
              srcset="
                /images/zgid-480.jpg 480w,
                /images/zgid-768.jpg 768w,
                /images/zgid-960.jpg 960w
              "
              sizes="(max-width: 480px) 480px, 
                      (max-width: 768px) 768px, 
                      960px"
              type="image/jpeg"
            >
          
            <!-- Fallback <img> -->
            <img 
              src="/images/zgid-960.jpg" 
              alt="Экскурсии по Осетии на Внедорожнике"
              loading="lazy" 
              decoding="async" 
              class="main-content__image-small">
          </picture>
        </template>


        </MainContent> 
        <MainContent 
          title="Проживание"
          sub-title="Лучшие виды из окна"
          :buttonColor="'#1D68F0'"
          :modalData="modalData[3]"
          :marginTop="-235"
          :ButtonSecText="ButtonSecText"
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
      </div>
    </section>

    <div ref="trustObserver"></div>  <!-- Пустой блок для наблюдения -->
    <section aria-label="Нам доверяют отдых в Осетии" v-if="isTrustVisible">
      <Trust></Trust>  
    </section>

    <div ref="reviewObserver"></div>  <!-- Пустой блок для наблюдения -->
    <section aria-label="Отзывы об отдыхе в Осетии" 
    v-if="isReviewVisible">
      <ReviewForm/>
    </section>

    <div ref="hotoffersObserver"></div>  <!-- Пустой блок для наблюдения -->
    <section aria-label="Горящие экскурсии" 
    v-if="isHotOffersVisible">
      <HotOffers></HotOffers>
    </section>

    <div ref="interactivemapObserver"></div>  <!-- Пустой блок для наблюдения -->
    <section aria-label="Карта горных ущелий Осетии" 
    v-if="isInteractiveMapVisible">
      <InteractiveMap ></InteractiveMap>
    </section>

    <div ref="faqObserver"></div>  <!-- Пустой блок для наблюдения -->
    <section aria-label="Частые вопросы по экскурсиям" v-if="isFAQVisible">
      <FAQ/>
    </section>

    <div ref="footerObserver"></div>  <!-- Пустой блок для наблюдения -->
    <Footer  v-if="isFooterVisible"> </Footer>
  </main>
</template>

<script setup>
import { ref, defineAsyncComponent } from 'vue';
import MainContent from '@/components/main-content/MainContent.vue';
import NavMenu from '@/components/header/NavMenu.vue';
// import ReviewForm from '@/components/main-content/Review-form.vue';
// import HotOffers from '@/components/main-content/HotOffers.vue';
// import InteractiveMap from '@/components/main-content/InteractiveMap.vue';
// import Trust from '@/components/main-content/Trust.vue';
// import FAQ from '@/components/main-content/FAQ.vue';
// import Footer from '@/components/main-content/Footer.vue';

const Trust = defineAsyncComponent(() => import('@/components/main-content/Trust.vue'))
const ReviewForm = defineAsyncComponent(() => import('@/components/main-content/Review-form.vue'))
const InteractiveMap = defineAsyncComponent(() => import('@/components/main-content/InteractiveMap.vue'))
const HotOffers = defineAsyncComponent(() => import('@/components/main-content/HotOffers.vue'))
const FAQ = defineAsyncComponent(() => import('@/components/main-content/FAQ.vue'))
const Footer = defineAsyncComponent(() => import('@/components/main-content/Footer.vue'))




const reviewObserver = ref (null)
const isReviewVisible = ref (false)


const hotoffersObserver = ref (null)
const isHotOffersVisible = ref (false)

const interactivemapObserver = ref (null)
const isInteractiveMapVisible = ref (false)

const faqObserver = ref (null)
const isFAQVisible = ref (false)

const footerObserver = ref (null)
const isFooterVisible = ref (false)


function infoModalState(isOpen){
  document.body.style.overflow = isOpen ? 'hidden' : ''
}

function bookingModalState(isOpen) {
  document.body.style.overflow = isOpen ? 'hidden' : ''
}



const ButtonSecText = 'Забронировать'

const black = '#000000'
const white = '#fff'

const modalData = ref([
  {
    title: 'Перезагрузка в Осетии.',
    serviceType: 'general',
    content: `
    <p><strong>Добро пожаловать в наши авторские туры по Северной Осетии.</strong><br>
    Мы показываем республику так, как знаем её сами: уютные места, сильные локации, живые впечатления.</p>

    <p style="margin-top: 1em;"><strong>Что ждёт вас на сайте:</strong><br>
    — авторские туры «под ключ» с проживанием, трансфером, экскурсиями и питанием;<br>
    — услуги по отдельности, если нужены только экскурсии например;<br>
    — так же возможно составить программу отдыха по вашим пожеланиям. </p>

    <p><strong>Дополнительные развлечения:</strong><br>
    Полёт на параплане, конная прогулка, сплав по реке или вечер у костра — моменты, к которым хочется возвращаться.</p>

    <p><strong>Как забронировать:</strong><br>
    На сайте онлайн, по телефону или в мессенджере — так, как вам удобно.</p>

    <p><em>Все фото на сайте — сделаны в наших турах. Ниже — отзывы гостей.</em></p>
  `,
    button1Text: 'Забронировать',
    button2Text: 'Закрыть',
  },

  {
    title: 'Полный тур - все включено',
    serviceType: 'combo', 
    content: `
    <p><strong>Осетинские выходные.</strong><br>
    🗓 2 дня / 3 ночи | 🚗 Трансфер включен | 🏔 2 авторские экскурсии</p>
    

    <p style="margin-top: 1em;"><strong>Программа тура</strong><br>
    • День 1: Встреча аэропорту → обед в горах → экскурсия «Тайны Города мёртвых» → заселение в отель;<br>
    • День 2: Завтрак → экскурсия в Алагирское ущелье → обед в горах → продолжение экскурсии → свободное время во Владикавказе;<br>
    • День 3: Завтрак → экскурсия в Дигррское ущелье → обед в горах → продолжение экскурсии → трансфер в ажропорт.</p>

    <p><strong>Что входит:</strong><br>
      ✓ Проживание в отеле с панорамой гор;<br>
      ✓ 2 завтрака + 2 обеда (осетинская кухня);<br>
      ✓ Трансферы из аэропорта и обратно;<br>
      ✓ Входные билеты на локации.</p>
    
  `,
    button1Text: 'Забронировать',
    button2Text: 'Закрыть',
 
  },
  {
    title: 'Экскурсии на внедорожнике',
    serviceType: 'excursion', 
    content: `
    <p><strong>ЭКСКУРСИЯ - БЕСТСЕЛЛЕР.</strong><br>
    4-часовое путешествие к must-see локациям</p>
    

    <p style="margin-top: 1em;"><strong>В программе:</strong><br>
    • Кармадонское ущелье — место где погиб Сергей Бодров;<br>
    • Смотровая площадка у Ледника Колка;<br>
    • Вершина зеленого перевала — 1700м над уровнем моря;<br>
    • Легендарный Город мёртвых — загадки средневековых склепов;<br>
    • Арт-объект Колсесо Балсага;<br>
    • Гизельдонское водохранилище;
    • Кахтисарский перевал.</p>

    <p><strong>Можно добавить:</strong><br>
      ✓ Мидаграбинское озеро и водопады;<br>
      ✓ Прогулку на лошадях;<br>
      ✓ Полет на параплане.</p>
    
  `,
    button1Text: 'Забронировать',
    button2Text: 'Закрыть',
    // button1BgColor: '#1D68F0',
    // button2BgColor: '#f44336',
    // button1FontColor: '#fff',
    // button2FontColor: '#fff',
  },
  {
    title: 'Проживание в видовом коттедже',
    serviceType: 'accommodation', 
    content: `
      <p><strong>Атмосферный коттедж для двоих с панорамным окнами.</strong></p>

      <p style="margin-top: 1em;"><strong>Особенности локации:</strong><br>
      • Видовая терраса;<br>
      • Панорамные окна с видом на горные хребты;<br>
      • Уютный интерьер с теплым полом;</p>

      <p style="margin-top: 1em;"><strong>Маршруты рядом:</strong><br>
      • Тропа на гору Кариу-Хох;<br>
      • Руины древнего города Цимити;<br>
      • Средневековые склепы комплекса Цимити;<br>
      • Спуск к горной реке и поселку Верхний Фиагдон.</p>

      <p><strong>Дополнительно:</strong><br>
        ✓ Фотосессии на видовой линии;<br>
        ✓ Экскурсии на внедорожнике;<br>
        ✓ Прогулки на лошадях;<br>
        ✓ Возможность самостоятельных походов.</p>
    `
    ,
    button1Text: 'Забронировать',
    button2Text: 'Закрыть',

  },
]);

onMounted(() => {
  const createObserver = (elementRef, visibilityFlag) => {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        const entry = entries[0]
        if (entry.isIntersecting) {
          visibilityFlag.value = true
          obs.disconnect()
        }
      },
      {
        rootMargin: '100px',
      }
    )

    if (elementRef.value) {
      observer.observe(elementRef.value)
    }
  }

  createObserver(reviewObserver, isReviewVisible)
  createObserver(hotoffersObserver, isHotOffersVisible)
  createObserver(interactivemapObserver, isInteractiveMapVisible)
  createObserver(faqObserver, isFAQVisible)
  createObserver(footerObserver, isFooterVisible)
})

</script>

<style scoped>
.home {
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

.home__table {
  display: flex;
  justify-content: center;
  gap: 20px;
}

@media (max-width: 1000px) {
  .home__table {
    flex-direction: column;
  }
}
</style>
