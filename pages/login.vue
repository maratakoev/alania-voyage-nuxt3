<template>
  <div class="login">
    <NavMenu class="nav" />
    <Content-title :title="contentTitle" :discription="contentTitleDiscription" class="content-title"/>
    <log-in-form class="reg-form"></log-in-form>


    <Footer>

    </Footer>
  </div>
</template>

<script setup>
import NavMenu from '@/components/header/NavMenu.vue';
import ContentTitle from '@/components/main-content/ContentTitle.vue';
import Footer from '@/components/main-content/Footer.vue';
import LogInForm from '~/components/LogInForm.vue';

const contentTitle = 'Авторизация';
const contentTitleDiscription='Введите свои данные'




</script>

<style scoped>

.login {
  padding-top: 70px;

}

.nav {
  position: sticky;
  top: 0;
  z-index: 100;
  margin-top: -70px;
}

.reg-form {
  margin-left: auto;
  margin-right: auto;
  max-width: 500px;
  margin-bottom: 2rem;

}



</style>