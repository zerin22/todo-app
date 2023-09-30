<!-- src/components/Dashboard.vue -->
<template>
  <div>
    <h2>Welcome, {{ currentUser.email }}</h2>
    <button @click="logout">Logout</button>
    <TodoInput />
    <TodoList />
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useAuthStore } from '../store';
import TodoInput from './TodoInput.vue';
import TodoList from './TodoList.vue';

const store = useAuthStore();

const currentUser = computed(() => store.currentUser);

const logout = () => {
  store.logout();
  // Logout successful, navigate to the login page
  // You can use a router or a conditional rendering to switch to the login page
};
</script>
