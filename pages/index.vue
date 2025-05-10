<template>
  <main class="home">
    <NavMenu class="nav" />
    <section aria-label="Организуем отдых в Осетии">
      <MainContent 
      class="hero-section"
      title="Осетия ждет!"
      sub-title="Твоё приключение начинается..."
      :buttonColor="'#1D68F0'"
      :marginTop="-70"
      :modalData="modalData[0]"
      videoSrc="/videos/hero-background.mp4"
      videoPoster="/images/locations/Fiagdon.webp"
      :lazyLoad="false"
      :ButtonSecText="ButtonSecText"
    >
    </MainContent>
    </section>

    <section aria-label="Отдых в горах">
      <MainContent 
      :buttonFontColor="black"
      :buttonColor="white"
      :marginTop="-110"
      videoSrc="/videos/tours.mp4"
      videoPoster="/images/insta.webp"
      title="Выходные в горах"
      sub-title="Прочувствуй энергию гор" 
      :modalData="modalData[1]"
      :lazyLoad="true"
      :ButtonSecText="ButtonSecText"
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
    <section aria-label="Нам доверяют отдых в Осетии">
      <Trust></Trust>  
    </section>
    <section aria-label="Отзывы об отдыхе в Осетии">
      <ReviewForm/>
    </section>
    <section aria-label="Горящие экскурсии">
      <HotOffers></HotOffers>
    </section>

    <section aria-label="Карта горных ущелий Осетии">
      <InteractiveMap ></InteractiveMap>
    </section>
    <section aria-label="Частые вопросы по экскурсиям">
      <FAQ/>
    </section>
    
    <Footer> </Footer>
  </main>
</template>

<script setup>
import { ref } from 'vue';
import MainContent from '@/components/main-content/MainContent.vue';
import NavMenu from '@/components/header/NavMenu.vue';
import ReviewForm from '@/components/main-content/Review-form.vue';
import HotOffers from '@/components/main-content/HotOffers.vue';
import InteractiveMap from '@/components/main-content/InteractiveMap.vue';
import Trust from '@/components/main-content/Trust.vue';
import FAQ from '@/components/main-content/FAQ.vue';
import Footer from '@/components/main-content/Footer.vue';

const ButtonSecText = 'Написать в чат'

const black = '#000000'
const white = '#fff'

const modalData = ref([
  {
    title: 'Узнать больше о экскурсиях',
    content: `  
  <p><strong>Отдых в Северной Осетии без хлопот</strong> — от авторских туров до отдельных услуг. <em>Комплексные программы экономят до 20%!</em></p>  

  <p style="margin-top: 1em;"><strong>Ваш формат:</strong><br>  
  ✓ <u>Тур «всё включено»</u>:<br>  
  — Встреча в аэропорту + трансфер на комфортабельных авто<br>  
  — Проживание с панорамными видами + питание<br>  
  — 3 авторские экскурсии с гидом</p>  

  <p>✓ <u>Соберите свой пакет</u>:<br>  
  • Только экскурсии (выберите в разделе «Маршруты»)<br>  
  • Только проживание (отели/глэмпинги — каталог «Жильё»)<br>  
  • Комбо: трансфер + 2 экскурсии + завтраки</p>  

  <p style="margin-top: 1em;"><strong>Почему выгодно брать тур:</strong><br>  
  — Гарантированная доступность гидов и жилья в сезон<br>  
  — Фиксированная цена без доплат на месте<br>  
  — Бесплатный фотоотчет от сопровождающего</p>  

  <p>Посетите must-see локации: <em>Город мёртвых, Цейское ущелье, Дзивгисская крепость</em>. Добавьте экстрим, гастротуры или фотосессию — мы реализуем любые идеи!</p>  
`  ,
    button1Text: 'Перейти в раздел',
  },
  {
    title: 'Экскурсия по горным вершинам',
    content: `
  <p style="text-align: center; margin-bottom: 1.5em;"><strong>ГОТОВЫЙ ТУР</strong><br><span style="font-size: 1.2em;">«Осетия за 48 часов»</span></p>

  <div style="border: 1px solid #e0e0e0; border-radius: 8px; padding: 1em; margin-bottom: 1.5em;">
    <p><strong>🗓 2 дня / 3 ночи | 🚗 Трансфер включен | 🏔 2 авторские экскурсии</strong></p>
    
    <p style="margin-top: 0.8em;">▸ <u>Программа</u>:<br>
    • День 1: Встреча во Владикавказе → трансфер в отель → экскурсия «Тайны Города мёртвых»<br>
    • День 2: Ранний завтрак → джип-тур в Цейское ущелье → обед в горном кафе → свободное время<br>
    • День 3: Трансфер в аэропорт с остановкой у Дзивгисской крепости</p>

    <p style="margin-top: 0.8em;">▸ <u>Что входит</u>:<br>
    ✓ Проживание в отеле с панорамой гор<br>
    ✓ 2 завтрака + 2 обеда (осетинская кухня)<br>
    ✓ Все трансферы на Mitsubishi L200<br>
    ✓ Входные билеты на локации<br>
    ✓ Чек-лист для сборов в подарок</p>
  </div>

  <p><strong>Почему выгоднее, чем самому:</strong><br>
  — Экономия до 8 000 ₽ (считаем <a href="#" style="color: #2a5ea7; text-decoration: underline;">тут</a>)<br>
  — Гарантия брони отеля в сезон<br>
  — Без скрытых платежей: цена фиксируется при оплате</p>

  <p style="margin-top: 1em; text-align: center;"><em>Дополнения:</em><br>
  ➕ Ужин с дегустацией сыров — 1 500 ₽/чел<br>
  ➕ Фотосессия в традиционной одежде — 3 000 ₽/час</p>
`,
    button1Text: 'Забронировать',
    button2Text: 'Закрыть',
    button1BgColor: '#4CAF50',
    button2BgColor: '#f44336',
    button1FontColor: '#fff',
    button2FontColor: '#fff',
  },
  {
    title: 'Экскурсии на внедорожнике',
    content: `
  <p style="text-align: center; margin-bottom: 1.2em;">
    <strong style="font-size: 1.1em;">ЭКСКУРСИЯ «СЕРДЦЕ ГОРНОЙ ОСЕТИИ»</strong><br>
    <em>8-часовое путешествие к must-see локациям</em>
  </p>

  <div style="background: #f8f9fa; padding: 1em; border-radius: 8px;">
    <p>▸ <strong>В программе:</strong><br>
    • Легендарный <u>Город мёртвых</u> — загадки средневековых склепов<br>
    • <u>Дзивгисская крепость</u> — «орлиное гнездо» на отвесной скале<br>
    • Смотровая площадка у <u>Цейского ущелья</u> — фотостоп с панорамой ледников<br>
    • Обед в кафе с осетинскими пирогами (включён в стоимость)</p>
  </div>

  <p style="margin-top: 1.2em;"><strong>Что получите:</strong><br>
  ✓ Трансфер на внедорожнике Toyota Land Cruiser (1-4 чел)<br>
  ✓ Лицензированный гид-историк с тревел-журналистикой<br>
  ✓ Посещение 2-х музеев — входные билеты наши<br>
  ✓ 15+ фото с маршрута на память</p>

  <p style="margin-top: 1em;"><strong>Почему мы?</strong><br>
  — Маршрут вне стандартных «галочек» — покажем Осетию глазами местных<br>
  — Гибкий график: старт в 7:00, 9:00 или 12:00<br>
  — Возврат 100% оплаты при отмене за 24 часа</p>

  <p style="text-align: center; margin-top: 1.5em; color: #2a5ea7;">
    <em>Хотите добавить дегустацию крафтового пива<br>или фотосессию в традиционном костюме? → Укажите при бронировании!</em>
  </p>
`,
    button1Text: 'Бронировать номер',
    button2Text: 'Закрыть',
    button1BgColor: '#1D68F0',
    button2BgColor: '#f44336',
    button1FontColor: '#fff',
    button2FontColor: '#fff',
  },
  {
    title: 'Эксплорация водопадов',
    content: `
  <p style="text-align: center; margin-bottom: 1.5em;">
    <span style="font-size: 1.3em;">«CLIFFSIDE LOFT»</span><br>
    <em>дом на краю света для тех, кто ищет диалог с горами</em>
  </p>

  <div style="background: #f8fafc; padding: 1.2em; border-radius: 10px;">
    <p>▸ <strong>Ваш кокон над облаками:</strong><br>
    • 45 м² open space с панорамными окнами «в пол»<br>
    • Дизайн-проект от московского архитектора: бетон, кедр, кованая сталь<br>
    • Терраса с костровой чашей и видом на 180° на Кавказский хребет<br>
    • Спальня-лофт с кроватью king size и потолочным окном для звёздных ночей</p>
  </div>

  <p style="margin-top: 1.5em;"><strong>Почему это уникально:</strong></p>
  <ul style="list-style: none; padding-left: 0;">
    <li>🚶♂️ <u>Ваша отправная точка:</u><br>
    — 20 мин пешком → заброшенное средневековое село с боевыми башнями<br>
    — 40 мин → Город мёртвых (склепы XI-XIV вв.)<br>
    — Маршруты для трекинга: от лёгких (3 км) до экспертных (18 км)</li>
    
    <li style="margin-top: 1em;">🎒 <u>Для вашего комфорта:</u><br>
    — Рюкзаки, треккинговые палки и GPS-трекер в аренду<br>
    — Карта с секретными тропами от хозяев<br>
    — Капсульная кофемашина и набор осетинских сыров к завтраку</li>
  </ul>

  <p style="margin-top: 1.5em; border-left: 3px solid #2a5ea7; padding-left: 1em;">
    <em>Важно:</em> дом подходит только для пар или сольных путешественников —<br> 
    здесь нет места городской суете. По вечерам вы услышите только<br> 
    переклички серн и шелест ветра в ущелье.
  </p>

  <p style="text-align: center; margin-top: 1.8em;">
    <strong>Хотите романтики?</strong> Организуем:<br>
    • Ужин с шеф-поваром на террасе (+12 000 ₽)<br>
    • Ночную съёмку Млечного Пути с фотографом (+8 000 ₽)
  </p>
`,
    button1Text: 'Забронировать тур',
    button2Text: 'Закрыть',
    button1BgColor: '#FF9800',
    button2BgColor: '#f44336',
    button1FontColor: '#fff',
    button2FontColor: '#fff',
  },
]);


</script>

<style scoped>

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
