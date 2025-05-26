<template>
  <form class="register-form" @submit.prevent="handleSubmit">
    <BaseInput v-model="form.name" label="Имя" name="name" id="name" required />
    <BaseInput v-model="form.email" label="Email" name="email" id="email" type="email" required />
    <BaseInput v-model="form.password" label="Пароль" name="password" id="password" type="password" required />
    <BaseInput
      v-model="form.confirmPassword"
      label="Повторите пароль"
      name="confirmPassword"
      id="confirmPassword"
      type="password"
      required
    />

    <label class="register-form__checkbox">
      <input type="checkbox" v-model="form.agree" required />
      Я согласен с условиями
    </label>
    <BtnOne buttonText="Зарегистрироваться"  type="submit" class="register-form__submit"></BtnOne>
    <div class="login__footer-text">
      Уже есть аккаунт? <router-link to="/login">Войти</router-link>
    </div>
  </form>
</template>

<script setup>
import { reactive } from 'vue';
import BaseInput from '@/components/BaseInput.vue';
import BtnOne from './buttons/BtnOne.vue';
import { useAuth } from '~/composables/useAuth';

const router = useRouter();


const form = reactive({
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  agree: false,
});

const { register } = useAuth();



const handleSubmit = async () => {
  if (form.password !== form.confirmPassword) {
    alert('Пароли не совпадают');
    return;
  }
  if (!form.agree) {
    alert('Нужно согласиться с условиями');
    return;
  }
  // Отправка данных на сервер
  try {
    await register({
      username: form.name,
      email: form.email,
      password: form.password,
      confirmPassword: form.confirmPassword,
    });
    alert('Регистрация успешна');
    router.push('/login');
  } catch (error) {
    alert(error);
  }
};
</script>

<style scoped>
.register-form {
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
