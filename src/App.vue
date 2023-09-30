<template>
  <div class="app">
    <TodoInput />
    <TodoList />
  </div>
</template>


<script setup>
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';
</script>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}
</style>