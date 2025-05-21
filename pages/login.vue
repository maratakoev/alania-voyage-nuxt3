<template>
  <div class="login">
    <NavMenu class="nav" />
    <Content-title :title="contentTitle" class="content-title"/>

    <RegistrationForm class="reg-form"></RegistrationForm>
    <Footer>

    </Footer>
  </div>
</template>

<script setup>
import NavMenu from '@/components/header/NavMenu.vue';
import ContentTitle from '@/components/main-content/ContentTitle.vue';
import Footer from '@/components/main-content/Footer.vue';
import RegistrationForm from '~/components/RegistrationForm.vue';
const contentTitle = 'Личный кабинет';




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
  margin-bottom: 5rem;

}

</style>