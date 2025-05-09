<template>
  <div class="faq-container">
    <h2 class="faq-title">Частые вопросы</h2>
    
    <div class="faq-section" v-for="(section, sectionIndex) in sections" :key="sectionIndex">
      <h3 class="section-title">{{ section.title }}</h3>
      <div class="faq-item" v-for="(item, itemIndex) in section.questions" :key="itemIndex"
           @click="toggleAnswer(sectionIndex, itemIndex)"
           :class="{ 'active': activeIndices[sectionIndex] === itemIndex }">
        <div class="question">
          <span>{{ item.question }}</span>
          <span class="icon">
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
              <path d="M1 1L6 6L11 1" stroke="#0071E3" stroke-width="2" stroke-linecap="round" 
                    :transform="activeIndices[sectionIndex] === itemIndex ? 'rotate(180 6 4)' : ''"/>
            </svg>
          </span>
        </div>
        <transition name="slide">
          <div class="answer" v-show="activeIndices[sectionIndex] === itemIndex">
            <p>{{ item.answer }}</p>
            <div class="additional-actions" v-if="item.actions">
              <button v-for="(action, actionIndex) in item.actions" :key="actionIndex"
                      @click.stop="handleAction(action)">
                {{ action.text }}
              </button>
            </div>
          </div>
        </transition>
      </div>
    </div>

    <div class="contact-prompt">
      <p>Не нашли ответ?</p>
      <button class="contact-button" @click="openContactForm">
        Напишите нам
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="#0071E3" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const activeIndices = ref([]);

const toggleAnswer = (sectionIndex, itemIndex) => {
  if (activeIndices.value[sectionIndex] === itemIndex) {
    activeIndices.value[sectionIndex] = null;
  } else {
    activeIndices.value[sectionIndex] = itemIndex;
  }
};

const sections = ref([
  {
    title: "📌 Бронирование и оплата",
    questions: [
      {
        question: "Как забронировать тур?",
        answer: "Выберите тур на сайте, нажмите «Забронировать», укажите даты и количество человек. Мы свяжемся с вами в течение 15 минут для подтверждения.",
        actions: [
          { text: "Посмотреть туры", action: "showTours" }
        ]
      },
      {
        question: "Можно ли изменить дату после бронирования?",
        answer: "Да, бесплатно за 72 часа до начала тура. Позже — возможен перенос за доп. плату (зависит от загруженности)."
      },
      {
        question: "Есть ли скидки для групп?",
        answer: "Да! От 5 человек — -10%, от 10 человек — -20%."
      }
    ]
  },
  {
    title: "🚗 Транспорт и экскурсии",
    questions: [
      {
        question: "На каких машинах проходят туры?",
        answer: "Внедорожники 4×4 (Toyota Land Cruiser, Nissan Patrol) с опытными водителями."
      },
      {
        question: "Можно ли с детьми?",
        answer: "Да, для детей от 6 лет. Для малышей — индивидуальные туры с адаптированным маршрутом.",
        actions: [
          { text: "Семейные туры", action: "showFamilyTours" }
        ]
      }
    ]
  }
]);

const handleAction = (action) => {
  console.log(`Action: ${action.action}`);
  // Реализация действий
};

const openContactForm = () => {
  console.log("Opening contact form...");
};
</script>

<style scoped>
.faq-container {
  max-width: 1064px;
  margin: 0 auto;
  padding: 2rem;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
}

.faq-title {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 2rem;
  text-align: center;
  color: #1d1d1f;
}

.section-title {
  font-size: 1.3rem;
  font-weight: 500;
  margin: 1.5rem 0 1rem;
  color: #1d1d1f;
}

.faq-item {
  border-radius: 12px;
  background: #f5f5f7;
  margin-bottom: 0.8rem;
  overflow: hidden;
  transition: all 0.3s ease;
}

.faq-item.active {
  background: #ffffff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.question {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem;
  font-weight: 500;
  cursor: pointer;
  user-select: none;
  color: #1d1d1f;
}

.icon {
  transition: transform 0.3s ease;
}

.faq-item.active .icon {
  transform: rotate(180deg);
}

.answer {
  padding: 0 1.2rem 0;
  color: #3a3a3c;
}

.answer p {
  margin: 0 0 1rem;
  line-height: 1.5;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
  max-height: 300px;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  max-height: 0;
  transform: translateY(-10px);
}

.additional-actions {
  display: flex;
  gap: 0.8rem;
  margin-bottom: 1.2rem;
}

.additional-actions button {
  background: rgba(0, 113, 227, 0.1);
  border: none;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  color: #0071e3;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.additional-actions button:hover {
  background: rgba(0, 113, 227, 0.2);
}

.contact-prompt {
  text-align: center;
  margin-top: 3rem;
  color: #3a3a3c;
}

.contact-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: none;
  border: none;
  color: #0071e3;
  font-weight: 500;
  cursor: pointer;
  padding: 0.5rem 0;
  margin-top: 0.5rem;
  transition: all 0.2s ease;
}

.contact-button:hover {
  color: #0062c3;
}

.contact-button svg {
  transition: transform 0.2s ease;
}

.contact-button:hover svg {
  transform: translateX(2px);
}
</style>