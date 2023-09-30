<!-- src/components/Register.vue -->
<template>
  <div>
    <input type="email" v-model="email" placeholder="Email" />
    <input type="password" v-model="password" placeholder="Password" />
    <input type="password" v-model="confirmPassword" placeholder="Confirm Password" />
    <button @click="register">Register</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useAuthStore } from '../store';

const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const store = useAuthStore();

const register = () => {
  try {
    store.register(email.value, password.value, confirmPassword.value);
    // Registration successful, navigate to the login page
    // You can use a router or a conditional rendering to switch to the login page
  } catch (error) {
    // Handle registration error
  }
};
</script>
