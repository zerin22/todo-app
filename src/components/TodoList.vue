<template>
  <div class="todo-list">
    <div v-for="todo in todos" :key="todo.id">
      <TodoItem :todo="todo" />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useTodoStore } from '../store';
import TodoItem from './TodoItem.vue';

const store = useTodoStore();

const todos = computed(() => store.todos);
</script>

<style scoped>
.todo-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
}
</style>
