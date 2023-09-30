<template>
  <div class="todo-input">
    <input type="text" v-model="newTask" />
    <button @click="addTask">Add Task</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useTodoStore } from '../store';

const newTask = ref('');
const store = useTodoStore();

const addTask = () => {
  if (newTask.value) {
    store.addTask({ name: newTask.value, done: false });
    newTask.value = '';
  }
};
</script>



<style scoped>
.todo-input {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
</style>
