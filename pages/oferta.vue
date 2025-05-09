<template>
  <div class="offer-page">
    <NavMenu class="nav" />
    
    <ContentTitle 
      :title="pageTitle" 
      :description="pageDescription" 
      class="content-title"
    />

    <div class="offer-content">
      <section class="offer-section">
        <h2>1. Общие положения</h2>
        <p>Настоящий Договор оферты (далее — Оферта) является официальным предложением компании «Яблоко Нартов» заключить договор на условиях, изложенных ниже. Используя наш Сайт, вы принимаете условия данной Оферты.</p>

        <h2>2. Предмет договора</h2>
        <p>Компания предоставляет услуги по организации поездок, экскурсий и других мероприятий, подробно описанных на Сайте. Все услуги предоставляются на условиях, указанных в настоящей Оферте.</p>

        <h2>3. Права и обязанности сторон</h2>
        <p><strong>Обязанности компании:</strong></p>
        <ul>
          <li>Предоставлять услуги, описанные на Сайте, в оговоренные сроки.</li>
          <li>Осуществлять возврат средств в случае отмены услуги по вине компании.</li>
        </ul>
        <p><strong>Обязанности клиента:</strong></p>
        <ul>
          <li>Своевременно оплачивать услуги.</li>
          <li>Предоставлять достоверные данные для выполнения бронирования и оплаты.</li>
        </ul>

        <h2>4. Стоимость услуг и порядок расчетов</h2>
        <p>Стоимость услуг указана на Сайте. Оплата производится через доступные на Сайте способы оплаты. После получения подтверждения об оплате, услуга считается предоставленной.</p>

        <h2>5. Ответственность сторон</h2>
        <p>Компания не несет ответственности за несчастные случаи, травмы или ущерб, возникшие в результате неправильного поведения клиента во время использования услуги.</p>

        <h2>6. Разрешение споров</h2>
        <p>Все споры, возникающие из или в связи с данным Договором, подлежат разрешению в судебном порядке в соответствии с законодательством РФ.</p>

        <h2>7. Изменения и дополнения</h2>
        <p>Компания имеет право в любой момент вносить изменения в условия данной Оферты. Изменения вступают в силу с момента их опубликования на Сайте.</p>

        <h2>8. Прочие условия</h2>
        <ul>
          <li>Данный договор регулируется законодательством Российской Федерации.</li>
          <li>Компания вправе передавать права и обязанности по договору третьим лицам.</li>
        </ul>

        <h2>9. Контакты</h2>
        <p>По вопросам, связанным с заключением и исполнением договора, вы можете обратиться по email: <strong>support@yablokonartov.ru</strong></p>
      </section>

    </div>

    <Footer />
  </div>
</template>

<script setup>
import NavMenu from '@/components/header/NavMenu.vue';
import Footer from '@/components/main-content/Footer.vue';
import ContentTitle from '@/components/main-content/ContentTitle.vue';

const pageTitle = 'Договор оферты';
const pageDescription = 'Условия предоставления услуг';
</script>

<style scoped>
.offer-page {
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

.offer-content {
  flex: 1;
  padding: 0 20px;
}

.offer-section {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem 0 4rem;
  line-height: 1.7;
}

.offer-section h2 {
  font-size: 1.5rem;
  color: #1D68F0;
  margin: 2.5rem 0 1rem;
  font-weight: 600;
}

.offer-section p {
  margin-bottom: 1rem;
}

@media (max-width: 768px) {
  .offer-section {
    padding: 1.5rem 0 3rem;
  }
  
  .offer-section h2 {
    font-size: 1.3rem;
    margin: 2rem 0 0.8rem;
  }
}
</style>
