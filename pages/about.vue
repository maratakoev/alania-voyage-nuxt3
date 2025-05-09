<template>
  <div class="about-page">
    <NavMenu class="nav" />
    <ContentTitle 
      :title="contentTitle" 
      :discription="contentTitleDiscription" 
      class="content-title"
    />
    <TitleImage :imageSrc="imageSrc" />

    <!-- Новый блок: Менеджер и контакты -->
    <section class="manager-section" id="social">
      <h2 class="section-title">Ваш персональный гид-координатор</h2>
      <div class="manager-grid">
        <div class="manager-card">
          <div class="manager-photo">
            <img :src="manager.photo" :alt="manager.name">
          </div>
          <div class="manager-info">
            <h3>{{ manager.name }}</h3>
            <p class="position">{{ manager.position }}</p>
            <div class="manager-contacts">
              <a v-for="(contact, index) in manager.contacts" 
                :key="index" 
                :href="contact.link" 
                class="contact-link">
                <span class="icon">{{ contact.icon }}</span> {{ contact.text }}
              </a>
            </div>
            <div class="social-links" >
              <p>Следите за нашими путешествиями:</p>
              <a v-for="(social, index) in manager.socials" 
                :key="index" 
                :href="social.link" 
                target="_blank">
                <img :src="social.icon" :alt="social.name">
              </a>
            </div>
          </div>
          <div class="manager-bio">
            <p>{{ manager.bio }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Philosophy Section -->
    <section class="philosophy-section">
      <h2 class="section-title">Наша философия</h2>
      <div class="philosophy-grid">
        <div v-for="(item, index) in philosophy" :key="index" class="philosophy-card">
          <div class="icon-wrapper">
            <span class="icon">{{ item.emoji }}</span>
          </div>
          <h3>{{ item.title }}</h3>
          <p>{{ item.text }}</p>
        </div>
      </div>
    </section>

    <!-- Principles Section -->
    <section class="principles-section">
      <h2 class="section-title">Наши принципы</h2>
      <div class="tabs-container">
        <button 
          v-for="(tab, index) in tabs" 
          :key="index"
          @click="activeTab = index"
          :class="['tab-button', { active: activeTab === index }]"
        >
          {{ tab.label }}
        </button>
      </div>
      
      <transition name="fade" mode="out-in">
        <div class="tab-content" :key="activeTab">
          <h3>{{ tabs[activeTab].title }}</h3>
          <p>{{ tabs[activeTab].content }}</p>
        </div>
      </transition>
    </section>
    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import NavMenu from '@/components/header/NavMenu.vue';
import Footer from '@/components/main-content/Footer.vue';
import TitleImage from '@/components/main-content/TitleImage.vue';
import ContentTitle from '@/components/main-content/ContentTitle.vue';

const imageSrc = '/images/us.jpg';
const contentTitle = 'Наша история';
const contentTitleDiscription = 'началась в 2010г';
const activeTab = ref(0);

// Данные менеджера
const manager = ref({
  name: "Марат Акоев",
  position: "Координатор приключений",
  photo: "/images/me.webp",
  bio: "Помогу организовать ваше идеальное путешествие по Кавказу. Лично знаю всех гидов и каждый маршрут. Отвечаю в течение 15 минут!",
  contacts: [
    { icon: "📞", text: "+7 (988) 835-72-27", link: "tel:+79888357227" },
    { icon: "✉️", text: "m.akoev@yandex.ru", link: "mailto:m.akoev@yandex.ru" },
    { icon: "💬", text: "Написать в WhatsApp", link: "https://wa.me/79888357227" }
  ],
  socials: [
    { name: "Instagram", icon: "images/icons/inst.png", link: "https://www.instagram.com/marat_akoev" },
    { name: "Telegram", icon: "images/icons/tg.png", link: "https://t.me/maratakoev" },
    { name: "VK", icon: "images/icons/vk.png", link: "https://vk.com/marat_akoev" }
  ]
});

// Данные для секций
const philosophy = ref([
  { 
    emoji: '🏔️', 
    title: 'Горы - наш дом', 
    text: 'Создаем доступные возможности для знакомства с Кавказом' 
  },
  { 
    emoji: '🛡️', 
    title: 'Безопасность прежде всего', 
    text: 'Сертифицированные гиды и проверенные маршруты' 
  },
  { 
    emoji: '🧭', 
    title: 'Индивидуальные маршруты', 
    text: 'Помогаем открыть свою уникальную Осетию' 
  }
]);

const tabs = ref([
  {
    label: 'Подход',
    title: 'Глубокое погружение в культуру',
    content: 'Мы создаем маршруты, которые позволяют не просто увидеть, а прочувствовать жизнь горной Осетии через взаимодействие с местными жителями, традиционную кухню и многовековые традиции.'
  },
  {
    label: 'Этика',
    title: 'Устойчивый туризм',
    content: 'Соблюдаем баланс между развитием туризма и сохранением природного наследия. 10% от прибыли направляем на экологические инициативы.'
  },
  {
    label: 'Цель',
    title: 'Вдохновлять через природу',
    content: 'Помогаем переосмыслить отношение к природе через личный опыт горных походов и осознанное путешествие.'
  }
]);
</script>

<style scoped>
.about-page {
  font-family: 'Arial', sans-serif;
  color: #333;
  max-width: 1400px;
  margin: 0 auto;
}

.nav {
  position: sticky;
  top: 0;
  z-index: 100;
  margin-top: -70px;
}

.section-title {
  text-align: center;
  font-size: 2rem;
  color: #1D68F0;
  margin: 3rem 0;
  padding: 0 1rem;
}

/* Philosophy Section */
.philosophy-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  padding: 0 1rem;
  margin: 0 auto 4rem;
  max-width: 1200px;
}

.philosophy-card {
  padding: 2rem;
  border-radius: 16px;
  background: rgba(29, 104, 240, 0.05);
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
}

.philosophy-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(29, 104, 240, 0.1);
}

.icon-wrapper {
  width: 80px;
  height: 80px;
  background: #1D68F0;
  border-radius: 50%;
  margin: 0 auto 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon {
  font-size: 40px;
  line-height: 1;
}

.manager-section {
  padding: 2rem 1rem;
  max-width: 1200px;
  margin: 0 auto 4rem;
}

.manager-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

.manager-card {
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 30px;
  background: rgba(29, 104, 240, 0.05);
  border-radius: 16px;
  padding: 30px;
  align-items: center;
}

.manager-photo img {
  width: 100%;
  border-radius: 50%;
  aspect-ratio: 1/1;
  object-fit: cover;
  border: 3px solid #1D68F0;
}

.manager-info h3 {
  font-size: 1.5rem;
  color: #1D68F0;
  margin-bottom: 0.5rem;
}

.position {
  font-weight: 500;
  color: #666;
  margin-bottom: 1.5rem;
}

.manager-contacts {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-bottom: 1.5rem;
}

.contact-link {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #333;
  text-decoration: none;
  transition: color 0.3s;
}

.contact-link:hover {
  color: #1D68F0;
}

.social-links {
  display: flex;
  align-items: center;
  gap: 15px;
}

.social-links p {
  margin: 0;
  font-size: 0.9rem;
}

.social-links img {
  width: 28px;
  transition: transform 0.3s;
}

.social-links img:hover {
  transform: scale(1.1);
}

.manager-bio {
  grid-column: span 2;
  padding-top: 20px;
  border-top: 1px solid #eee;
  font-style: italic;
}



/* Principles Section */
.principles-section {
  padding: 2rem 1rem 4rem;
  background: #f8f9ff;
  margin: 3rem 0;
}

.tabs-container {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.tab-button {
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 30px;
  background: #e3e9ff;
  cursor: pointer;
  transition: all 0.3s;
  font-weight: 500;
}

.tab-button.active {
  background: #1D68F0;
  color: white;
  transform: scale(1.05);
}

.tab-content {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
}

.tab-content h3 {
  color: #1D68F0;
  margin-bottom: 1.5rem;
  font-size: 1.4rem;
}

/* Анимации */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}
.fade-enter-from {
  opacity: 0;
  transform: translateY(10px);
}
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Slider */
.slider {
  margin: 4rem 0;
}

@media (max-width: 768px) {

  .manager-card {
    grid-template-columns: 1fr;
    text-align: center;
    display: flex
;
    flex-direction: column;
  }
  
  .manager-contacts {
    align-items: center;
  }
  
  .social-links {
    justify-content: center;
  }
  
  .manager-photo {
    margin: 0 auto;
    max-width: 150px;
  }
  .philosophy-grid {
    grid-template-columns: 1fr;
    max-width: 500px;
  }
  
  .tab-button {
    width: 100%;
    max-width: 300px;
  }
  
  .section-title {
    font-size: 1.6rem;
  }
  .nav {
  margin-top: -70px;
}
}
</style>