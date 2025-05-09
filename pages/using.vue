<template>
  <div class="privacy-page">
    <NavMenu class="nav" />
    
    <ContentTitle 
      :title="pageTitle" 
      :description="pageDescription" 
      class="content-title"
    />

    <div class="privacy-content">
      <section class="privacy-section">
        <h2>1. Общие положения</h2>
        <p>Настоящие Условия определяют правила использования сайта «Яблоко нартов» (далее — Сайт). Используя Сайт, вы соглашаетесь соблюдать данные Условия. Если вы не согласны с ними, пожалуйста, не используйте Сайт.</p>

        <h2>2. Описание услуг</h2>
        <p>Сайт предоставляет информацию об экскурсиях, турах и других мероприятиях, организуемых на территории Республики Северная Осетия – Алания. Мы стараемся поддерживать актуальность и точность информации, однако не исключаем возможность ошибок или изменений без предварительного уведомления.</p>

        <h2>3. Правила поведения на сайте</h2>
        <p>Пользователю запрещается:</p>
        <ul>
          <li>использовать Сайт в незаконных целях;</li>
          <li>размещать вредоносный код, нарушающий работу Сайта;</li>
          <li>копировать и распространять материалы Сайта в коммерческих целях без разрешения.</li>
        </ul>

        <h2>4. Интеллектуальная собственность</h2>
        <p>Все тексты, изображения, логотипы, названия туров и другие материалы, размещённые на Сайте, являются собственностью «Яблоко нартов» либо используются на законных основаниях. Их несанкционированное использование запрещено.</p>

        <h2>5. Ограничение ответственности</h2>
        <p>Мы не гарантируем бесперебойную работу Сайта. «Яблоко нартов» не несёт ответственности за возможный ущерб, возникший в результате использования Сайта или невозможности его использования.</p>

        <h2>6. Изменение условий</h2>
        <p>Мы оставляем за собой право в любое время изменять настоящие Условия. Обновлённая версия будет опубликована на этой странице.</p>

        <h2>7. Контакты</h2>
        <p>По всем вопросам, связанным с использованием Сайта, пожалуйста, пишите на <strong>info@yablokonartov.ru</strong></p>
      </section>
    </div>

    <Footer />
  </div>
</template>

<script setup>
import NavMenu from '@/components/header/NavMenu.vue';
import Footer from '@/components/main-content/Footer.vue';
import ContentTitle from '@/components/main-content/ContentTitle.vue';

const pageTitle = 'Условия использования';
const pageDescription = 'Правила и принципы работы с сайтом';
</script>

<style scoped>
.privacy-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: 'Arial', sans-serif;
  color: #333;
  max-width: 1400px;
  margin: 0 auto;
}

.nav {
  position: sticky;
  top: 0;
  z-index: 100;
}

.privacy-content {
  flex: 1;
  padding: 0 20px;
}

.privacy-section {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem 0 4rem;
  line-height: 1.7;
}

.privacy-section h2 {
  font-size: 1.5rem;
  color: #1D68F0;
  margin: 2.5rem 0 1rem;
  font-weight: 600;
}

.privacy-section p {
  margin-bottom: 1rem;
}

.privacy-section ul {
  margin: 0 0 1rem 1.2rem;
  padding-left: 1rem;
  list-style-type: disc;
}

@media (max-width: 768px) {
  .privacy-section {
    padding: 1.5rem 0 3rem;
  }
  
  .privacy-section h2 {
    font-size: 1.3rem;
    margin: 2rem 0 0.8rem;
  }
}
</style>
