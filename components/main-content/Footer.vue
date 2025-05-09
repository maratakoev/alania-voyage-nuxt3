<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__section footer__section--info">
        <div class="footer__logo">
          <img src='/images/logo.png' class="footer__logo-img">
          <span>Яблоко нартов</span>
        </div>
        <p class="footer__text">© 2025 Все права защищены</p>
        <div class="footer__contacts">
          <a href="tel:+79880000000" class="footer__link">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 16.92V19.92C22.001 20.198 21.944 20.473 21.832 20.728C21.721 20.983 21.558 21.212 21.354 21.4C21.15 21.588 20.91 21.731 20.649 21.819C20.388 21.907 20.112 21.938 19.838 21.91C16.743 21.586 13.787 20.433 11.24 18.56C8.846 16.812 6.925 14.492 5.64 11.82C4.274 8.995 3.569 5.852 3.59 2.662C3.591 2.388 3.649 2.117 3.761 1.866C3.873 1.615 4.037 1.389 4.242 1.203C4.447 1.017 4.689 0.876 4.952 0.788C5.215 0.7 5.493 0.668 5.77 0.693H8.77C9.147 0.706 9.506 0.865 9.77 1.137C10.034 1.409 10.182 1.773 10.18 2.15C10.18 2.927 10.28 3.7 10.48 4.45C10.564 4.783 10.553 5.133 10.45 5.46C10.346 5.787 10.153 6.079 9.89 6.3L8.18 7.83C9.461 10.204 11.386 12.129 13.76 13.41L15.29 11.7C15.511 11.437 15.803 11.244 16.13 11.14C16.457 11.036 16.807 11.025 17.14 11.11C17.89 11.309 18.663 11.409 19.44 11.409C19.817 11.407 20.181 11.555 20.453 11.819C20.725 12.083 20.884 12.442 20.897 12.819L22 16.92Z" fill="#8E8E93"/>
            </svg>
            +7 (988) 835-72-72
          </a>
          <a href="mailto:info@ossetours.ru" class="footer__link">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="#8E8E93" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M22 6L12 13L2 6" stroke="#8E8E93" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            info@ossetours.ru
          </a>
        </div>
      </div>

      <nav class="footer__section footer__section--nav">
        <h3 class="footer__title">Навигация</h3>
        <div class="footer__nav-links">
          <a href="/" class="footer__link">Главная</a>
          <a href="/excursions" class="footer__link">Экскурсии</a>
          <a href="/living" class="footer__link">Проживание</a>
          <a href="/tours" class="footer__link">Тур под ключ</a>
          <a href="/about" class="footer__link">О нас</a>
        </div>
      </nav>

      <nav class="footer__section footer__section--legal">
        <h3 class="footer__title">Правовая информация</h3>
        <div class="footer__nav-links">
          <a href="/privacyPolicy" class="footer__link">Политика конфиденциальности</a>
          <a href="/using" class="footer__link">Условия использования</a>
          <a href="/oferta" class="footer__link">Договор оферты</a>
          <a href="/FaqPage" class="footer__link">FAQ</a>
        </div>
      </nav>

      <div class="footer__section footer__section--social">
        <h3 class="footer__title">Социальные сети</h3>
        <div class="footer__social-links">
          <a href="https://vk.com/ossetours" target="_blank" class="footer__social-link">
            <img src="/images/icons/vk.png" class="footer__social-img">
          </a>
          <a href="https://t.me/ossetours" target="_blank" class="footer__social-link">
            <img src="/images/icons/tg.png" class="footer__social-img">
          </a>
          <a href="https://wa.me/79880000000" target="_blank" class="footer__social-link">
            <img src="/images/icons/inst.png" class="footer__social-img">
          </a>
        </div>
        <div class="footer__subscribe">
          <p>Подпишитесь на рассылку</p>
          <div class="footer__input-group">
            <input type="email" placeholder="Ваш email" class="footer__input">
            <button class="footer__button">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 2L11 13" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: #f1f1f1;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  padding: 48px 0 24px;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  color: #1c1c1e;
  box-shadow: 0 -2px 20px rgba(0, 0, 0, 0.02);
}

.footer__container {
  max-width:  1064px;
  margin: 0 auto;
  padding: 0 24px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 40px;
}

.footer__section {
  display: flex;
  flex-direction: column;
}

.footer__logo {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 20px;
  font-weight: 600;
  font-size: 18px;
  color: #007AFF;
}

.footer__logo-img {
  width: 50px;
}

.footer__title {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 16px;
  color: #1c1c1e;
}

.footer__text {
  margin: 8px 0;
  font-size: 14px;
  line-height: 1.5;
  color: #8e8e93;
}

.footer__contacts {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 16px;
}

.footer__contacts a {
  display: flex;
  align-items: center;
  gap: 8px;
}

.footer__nav-links {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer__link {
  color: #8e8e93;
  text-decoration: none;
  font-size: 14px;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 8px;
}

.footer__link:hover {
  color: #007AFF;
  transform: translateX(2px);
}

.footer__social-links {
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
}

.footer__social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #f5f5f5;
  transition: all 0.2s ease;
}

.footer__social-link:hover {
  /* background: #007AFF; */
  transform: translateY(-2px);
  /* box-shadow: 0 4px 8px rgba(0, 122, 255, 0.2); */
}

.footer__social-img {
  width: 30px;
  /* height: 30px; */
  background-color: transparent;
  /* box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3); */
 
}

.footer__subscribe {
  margin-top: auto;
}

.footer__subscribe p {
  font-size: 14px;
  color: #8e8e93;
  margin-bottom: 12px;
}

.footer__input-group {
  display: flex;
  border: 1px solid #d1d1d6;
  border-radius: 8px;
  overflow: hidden;
}

.footer__input {
  flex: 1;
  padding: 10px 12px;
  border: none;
  outline: none;
  font-size: 14px;
}

.footer__button {
  background: #007AFF;
  border: none;
  padding: 0 12px;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.footer__button:hover {
  background: #0066cc;
}

@media (max-width: 768px) {
  .footer__container {
    grid-template-columns: 1fr 1fr;
    gap: 32px;
  }
}

@media (max-width: 480px) {
  .footer__container {
    grid-template-columns: 1fr;
    gap: 24px;
  }
  
  .footer__section {
    align-items: center;
    text-align: center;
  }
  
  .footer__nav-links {
    align-items: center;
  }
  
  .footer__social-links {
    justify-content: center;
  }
}
</style>