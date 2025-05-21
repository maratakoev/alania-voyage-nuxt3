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

    <button type="submit" class="register-form__submit">Зарегистрироваться</button>
  </form>
</template>

<script setup>
import { reactive } from 'vue';
import BaseInput from '@/components/BaseInput.vue';

const form = reactive({
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  agree: false,
});

const handleSubmit = () => {
  if (form.password !== form.confirmPassword) {
    alert('Пароли не совпадают');
    return;
  }
  if (!form.agree) {
    alert('Нужно согласиться с условиями');
    return;
  }
  // Отправка данных на сервер
  console.log('Регистрация:', form);
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
  padding: 0.5rem 1rem;
  cursor: pointer;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: 600;
}
.register-form__submit:hover {
  background-color: #369b6e;
}
</style>
