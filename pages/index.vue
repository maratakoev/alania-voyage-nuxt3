<template>
  <main class="home">
    <NavMenu class="nav" />
    <section aria-label="Организуем отдых в Осетии" fetchpriority="high">
      <MainContent 
      :buttonLink="'https://t.me/maratakoev'"
      class="hero-section"
      title="Комфортные туры по Осетии."
      sub-title="Организуем трансфер, проживание, логистику, экскурсии, а вы просто наслаждайтесь отдыхом."
      :buttonColor="gold"
      :buttonFontColor="black"
      :marginTop="{desktop: '-200px', mobile: '31px'}"
      :modalData="modalData[0]"
      videoSrc="/videos/hero-background.mp4"
      videoPoster="/images/whiteWoman.webp"
      
      :lazyLoad="false"
      :buttonText="'Узнать подробности'"
      :ButtonSecText="'Начать чат'"
      @info-modal-change="infoModalState"
      @booking-modal-change="bookingModalState"
      :titleFontSize="{ desktop: '64px', mobile: '40px' }"
      :subtitleFontSize="{ desktop: '30px', mobile: '20px' }"
    >
    </MainContent>
    </section>

        <div ref="trustObserver"></div>  <!-- Пустой блок для наблюдения -->
    <section aria-label="Нам доверяют отдых в Осетии" v-if="isTrustVisible">
      
        <h2 class="subtitle"> Почему вам будет комфортно с нами?</h2>
        <!-- <h3 class="content hero-subtitle">Нам важно, чтобы вы чувствовали наше гостеприимство.</h3> -->
      

      <Trust></Trust>  
    </section>
<!-- 
    <section aria-label="Отдых в горах">
      <MainContent 
      :buttonFontColor="black"
      :buttonColor="white"
      :marginTop="-110"
      videoSrc="/videos/tours.mp4"
      videoPoster="/images/alagir-ardon.webp"
      title="Тур под ключ"
      sub-title="В горы на выходные" 
      :modalData="modalData[1]"
      :lazyLoad="true"
      :ButtonSecText="ButtonSecText"
      @info-modal-change="infoModalState"
      @booking-modal-change="bookingModalState"
    >
    
    </MainContent>
    </section> -->

    <section aria-label="Экскурсии и проживание в Осетии">
      
        <h2 class="subtitle">Выберите тур, который подходит именно вам.</h2>
        <!-- <h3 class="content hero-subtitle">Туры под ключ</h3> -->
      

      <div class="home__table"> 
        <MainContent 
          :fontWeight="500"
          :marginTop="{desktop: '130px', mobile: '28px'}"
          :buttonColor="'#1D68F0'"
          title="Выходные в Осетии"
          sub-title="Идеальный способ перезагрузиться без необходимости брать отпуск."
          :modalData="modalData[2]"
          :ButtonSecText="ButtonSecText"
          :lazyLoad="true"
          @info-modal-change="infoModalState"
          @booking-modal-change="bookingModalState"
          :price="18000"
          duration="10 часов"
          distance="275 км"
          :rating="5"
          :reviewCount="8"
          :titleFontSize="{ desktop: '39px', mobile: '36px' }"
          :subtitleFontSize="{ desktop: '20px', mobile: '18px' }"
          :buttonFontSize="{ desktop: '16px', mobile: '10px' }"

        >
        <template #image>
          <picture>
            <!-- WebP форматы -->
            <source 
              srcset="
                /images/atmo-600.webp 480w,
                /images/atmo-900.webp 768w,
                /images/atmo-1100.webp 960w
              "
              sizes="(max-width: 480px) 480px, 
                      (max-width: 768px) 768px, 
                      960px"
              type="image/webp"
            >
          
            <!-- JPEG fallback -->
            <source 
              srcset="
                /images/atmo-600.webp 480w,
                /images/atmo-900.webp 768w,
                /images/atmo-1100.webp 960w
              "
              sizes="(max-width: 480px) 480px, 
                      (max-width: 768px) 768px, 
                      960px"
              type="image/jpeg"
            >
          
            <!-- Fallback <img> -->
            <img 
              src="/images/atmo-900.webp" 
              alt="Экскурсии по Осетии на Внедорожнике"
              loading="lazy" 
              decoding="async" 
              class="main-content__image-small">
          </picture>
        </template>


        </MainContent> 
        <MainContent 
          :fontWeight="500"
          :marginTop="{desktop: '150px', mobile: '62px'}"
          :buttonColor="'#1D68F0'"
          title="Осетия за 3 дня"
          sub-title="Сбалансированный маршрут — от древних башен до невероятных панорам."
          :modalData="modalData[2]"
          :ButtonSecText="ButtonSecText"
          :lazyLoad="true"
          @info-modal-change="infoModalState"
          @booking-modal-change="bookingModalState"
          duration="10 часов"
          distance="275 км"
          :rating="5"
          :reviewCount="8"
          :price="18000"
          :titleFontSize="{ desktop: '39px', mobile: '36px' }"
          :subtitleFontSize="{ desktop: '20px', mobile: '18px' }"
          :buttonFontSize="{ desktop: '16px', mobile: '10px' }"


        >
        <template #image>
          <picture>
            <!-- WebP форматы -->
            <source 
              srcset="
                /images/forrest.png 480w,
                /images/forrest.png 768w,
                /images/forrest.png 960w
              "
              sizes="(max-width: 480px) 480px, 
                      (max-width: 768px) 768px, 
                      960px"
              type="image/webp"
            >
          
            <!-- JPEG fallback -->
            <source 
              srcset="
                /images/forrest.png 480w,
                /images/forrest.png 768w,
                /images/forrest.png 960w
              "
              sizes="(max-width: 480px) 480px, 
                      (max-width: 768px) 768px, 
                      960px"
              type="image/jpeg"
            >
          
            <!-- Fallback <img> -->
            <img 
              src="/images/forrest.png" 
              alt="Экскурсии по Осетии на Внедорожнике"
              loading="lazy" 
              decoding="async" 
              class="main-content__image-small">
          </picture>
        </template>


        </MainContent> 
        <MainContent 
          :fontWeight="500"
          title="Осетия-Полное погружение"
          sub-title="Максимум впечатлений от Осетии"
          :buttonColor="'#1D68F0'"
          :modalData="modalData[3]"
          :marginTop="{desktop: '150px', mobile: '34px'}"
          :ButtonSecText="ButtonSecText"
          :lazyLoad="true"
          @info-modal-change="infoModalState"
          @booking-modal-change="bookingModalState"
          duration="10 часов"
          distance="275 км"
          :rating="5"
          :reviewCount="8"
          :price="18000"
          :titleFontSize="{ desktop: '39px', mobile: '36px' }"
          :subtitleFontSize="{ desktop: '20px', mobile: '18px' }"
          :buttonFontSize="{ desktop: '16px', mobile: '10px' }"
        >
        <template #image>
          <picture>
            <!-- WebP форматы -->
            <source 
              srcset="
                /images/tsallag.webp 480w,
                /images/tsallag.webp 768w,
                /images/tsallag.webp 960w
              "
              sizes="(max-width: 480px) 480px, 
                      (max-width: 768px) 768px, 
                      960px"
              type="image/webp"
            >
          
            <!-- JPEG fallback -->
            <source 
              srcset="
                /images/tsallag.webp 480w,
                /images/tsallag.webp 768w,
                /images/tsallag.webp 960w
              "
              sizes="(max-width: 480px) 480px, 
                      (max-width: 768px) 768px, 
                      960px"
              type="image/jpeg"
            >
          
            <!-- Fallback <img> -->
            <img 
              src="/images/tsallag.webp" 
              alt="Коттедж в Осетии для аренды"
              loading="lazy" 
              decoding="async" 
              class="main-content__image-small">
          </picture>
        </template>

        </MainContent>
      </div>
    </section>
    <h2 class="subtitle">Экскурсии или проживание отдельно.</h2>

    <!-- <h3 class="content hero-subtitle">Если не нужен полный тур, то есть отдельно экскурсии или проживание</h3> -->
    <section aria-label="Экскурсии и проживание в Осетии">
      <!-- <h2 class="subtitle"> Экскурсии и проживание</h2> -->
      <div class="home__table"> 
        <MainContent 
          :fontWeight="500"
          :marginTop="-115"
          :buttonColor="'#1D68F0'"
          title="Экскурсия"
          sub-title="На комфортном внедорожнике"
          :modalData="modalData[2]"
          :ButtonSecText="ButtonSecText"
          :lazyLoad="true"
          @info-modal-change="infoModalState"
          @booking-modal-change="bookingModalState"
          duration="10 часов"
          distance="275 км"
          :rating="5"
          :reviewCount="8"
          :price="18000"
          :titleFontSize="{ desktop: '39px', mobile: '36px' }"
          :subtitleFontSize="{ desktop: '20px', mobile: '18px' }"
          :buttonFontSize="{ desktop: '16px', mobile: '10px' }"
        >
        <template #image>
          <picture>
            <!-- WebP форматы -->
            <source 
              srcset="
                /images/eks-500.webp 480w,
                /images/eks.webp 768w,
                /images/eks.webp 960w
              "
              sizes="(max-width: 480px) 480px, 
                      (max-width: 768px) 768px, 
                      960px"
              type="image/webp"
            >
          
            <!-- JPEG fallback -->
            <source 
              srcset="
                /images/eks-500.webp 480w,
                /images/eks.webp 768w,
                /images/eks.webp 960w
              "
              sizes="(max-width: 480px) 480px, 
                      (max-width: 768px) 768px, 
                      960px"
              type="image/jpeg"
            >
          
            <!-- Fallback <img> -->
            <img 
              src="/images/eks.webp" 
              alt="Экскурсии по Осетии на Внедорожнике"
              loading="lazy" 
              decoding="async" 
              class="main-content__image-small">
          </picture>
        </template>


        </MainContent> 
        <MainContent 
          :fontWeight="500"
          title="Проживание"
          sub-title="Со сказочными видами"
          :buttonColor="'#1D68F0'"
          :modalData="modalData[3]"
          :marginTop="-115"
          :ButtonSecText="ButtonSecText"
          :lazyLoad="true"
          @info-modal-change="infoModalState"
          @booking-modal-change="bookingModalState"
          :rating="5"
          :reviewCount="8"
          :price="18000"
          :titleFontSize="{ desktop: '39px', mobile: '36px' }"
          :subtitleFontSize="{ desktop: '20px', mobile: '18px' }"
          :buttonFontSize="{ desktop: '16px', mobile: '10px' }"
        >
        <template #image>
          <picture>
            <!-- WebP форматы -->
            <source 
              srcset="
                /images/fi.webp 480w,
                /images/fi.webp 768w,
                /images/fi.webp 960w
              "
              sizes="(max-width: 480px) 480px, 
                      (max-width: 768px) 768px, 
                      960px"
              type="image/webp"
            >
          
            <!-- JPEG fallback -->
            <source 
              srcset="
                /images/fi.webp 480w,
                /images/fi.webp 768w,
                /images/fi.webp 960w
              "
              sizes="(max-width: 480px) 480px, 
                      (max-width: 768px) 768px, 
                      960px"
              type="image/jpeg"
            >
          
            <!-- Fallback <img> -->
            <img 
              src="/images/fi.webp" 
              alt="Коттедж в Осетии для аренды"
              loading="lazy" 
              decoding="async" 
              class="main-content__image-small">
          </picture>
        </template>

        </MainContent>
      </div>
    </section>



    <div ref="reviewObserver"></div>  <!-- Пустой блок для наблюдения -->
    <h2 class="subtitle">Что о нас говорят наши гости?</h2>

    <!-- <h3 class="content hero-subtitle">Нам доверяют путешественники из разных городов.</h3> -->
    <section aria-label="Отзывы об отдыхе в Осетии" 
    v-if="isReviewVisible">
      <ReviewForm/>
    </section>

    <div ref="hotoffersObserver"></div>  <!-- Пустой блок для наблюдения -->
    <!-- <section aria-label="Горящие экскурсии" 
    v-if="isHotOffersVisible">
      <HotOffers></HotOffers>
    </section> -->

    <div ref="interactivemapObserver"></div>  <!-- Пустой блок для наблюдения -->
    <h2 class="subtitle"> Основные ущелья на карте.</h2>
    <!-- <h3 class="content hero-subtitle">Для общего представления о расположений локаций <br> и их удаленности друг от друга</h3> -->
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

const trustObserver = ref (null)
const isTrustVisible = ref (false)



function infoModalState(isOpen){
  document.body.style.overflow = isOpen ? 'hidden' : ''
}

function bookingModalState(isOpen) {
  document.body.style.overflow = isOpen ? 'hidden' : ''
}

const buttonFontSize = '14px'

const ButtonSecText = 'Забронировать'

const black = '#000000'
const white = '#fff'
const gold = 'rgb(216, 174, 94)'

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
    Полёт на параплане, конная прогулка, сплав по реке или вечер у костра — это будут моменты, к которым хочется возвращаться.</p>

    <p><strong>Как забронировать:</strong><br>
    На сайте онлайн, по телефону или в мессенджере — так, как вам удобно.</p>

    <p><em>Все фото на сайте — сделаны в наших турах. Ниже — отзывы гостей.</em></p>
  `,
    button1Text: 'Задать вопрос',
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

    <p><em>Это один из туров, а на соответсующей странице можно посмотреть остальные предложения по готовым турам.</em></p>

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

  createObserver(trustObserver, isTrustVisible)
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

.content {
  max-width: 1064px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
}
.nav {
  position: fixed;
  margin-top: -70px;
}

.subtitle {
  font-size: 2.5rem;
  font-weight: 500;
  text-align: center;
  color: #1a1a1a;
  margin-bottom: 2.5rem;
  position: relative;
  padding-bottom: 0.8rem;
  margin-top: 4rem;
}

.hero-subtitle {
    font-size: 1.8rem;
    margin-top: -10px;
      /* text-align: center; */

  font-weight: 500;
  color: #2c3e50;
  margin: 0.5rem auto 1rem auto;  line-height: 1.3;
  position: relative;
  padding-bottom: 0.5rem;
}
.subtitle::after {
  content: '';
  position: absolute;
  bottom: 0;
  
  /* 1. Сдвигаем левый край линии в центр родителя */
  left: 50%; 
  
  /* 2. Сдвигаем линию обратно на половину ее ширины (80px / 2 = 40px) */
  transform: translateX(-50%); 
  
  width: 140px;
  height: 3px;
  background: linear-gradient(90deg, #d8ae5e, #b8943c);
  border-radius: 2px;
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
/* Адаптивность */
@media (max-width: 768px) {
  .subtitle {
    font-size: 2rem;
    margin-bottom: 2rem;
    padding-bottom: 0.8rem;
  }
}

@media (max-width: 480px) {
  .subtitle {
    font-size: 1.75rem;
    margin-bottom: 1.5rem;
    padding-bottom: 0.6rem;
  }
  
  .subtitle::after {
    width: 60px;
    height: 2px;
  }
  .home__table {
    flex-direction: row;
    overflow-x: scroll;
    flex-wrap: nowrap;
    justify-content: flex-start;
    padding: 0 20px;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
  }
  .home__table::-webkit-scrollbar {
        display: none; 
    }
  .home__table > * {
        /* Ключевое свойство: запрещаем карточкам сжиматься */
        flex-shrink: 0; 
        
        /* Задаем фиксированную ширину, чтобы они не занимали 100% контейнера */
        width: 80vw; /* Например, 80% ширины экрана */
        max-width: 400px; /* Ограничиваем максимальный размер */
    }
}
</style>
