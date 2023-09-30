<!-- src/components/Login.vue -->
<template>
  <div>
    <input type="email" v-model="email" placeholder="Email" />
    <input type="password" v-model="password" placeholder="Password" />
    <button @click="login">Login</button>
    <button @click="register">Register</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useAuthStore } from '../store';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const store = useAuthStore();
const router = useRouter();

const login = () => {
  try {
    store.login(email.value, password.value);
    router.push('/dashboard'); // navigate to the dashboard
  } catch (error) {
    // Handle login error
  }
};

const register = () => {
  console.log('Register button clicked'); // log a message when the register button is clicked
  router.push('/register'); // navigate to the register page
  console.log('Navigating to /register'); // log a message when trying to navigate to the register page
};
</script>
