<template>
  <form class="login-form" @submit.prevent="handleSubmit">
    <BaseInput v-model="form.email" label="Email" name="email" id="email" type="email" required />
    <BaseInput v-model="form.password" label="Пароль" name="password" id="password" type="password" required />

    <label class="register-form__checkbox">
      <input type="checkbox" v-model="form.agree" required />
      Запомнить меня
    </label>
    <BtnOne buttonText="Войти"  type="submit" class="register-form__submit"></BtnOne>
    <div class="login__footer-text">
      Хотите создать аккаунт? <router-link to="/registration">Зарегистрироваться</router-link>
    </div>
  </form>
</template>

<script setup>
import { reactive } from 'vue';
import BaseInput from '@/components/BaseInput.vue';
import BtnOne from './buttons/BtnOne.vue';

const form = reactive({
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  agree: false,
});


// const handleSubmit = () => {
//   if (form.password !== form.confirmPassword) {
//     alert('Пароли не совпадают');
//     return;
//   }
//   if (!form.agree) {
//     alert('Нужно согласиться с условиями');
//     return;
//   }
  // Отправка данных на сервер
//   console.log('Регистрация:', form);
// };
</script>

<style scoped>
.login-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.register-form__checkbox {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.register-form__submit {
  max-width: 280px;
  margin-left: auto;
  margin-right: auto;

}
.register-form__submit:hover {
  background-color: #369b6e;
}

.login__footer-text {
  text-align: center;
  margin-bottom: 5rem;
  font-size: 1rem;
  color: #555;
}
</style>
