<template>
  <div class="todo-item">
    <input type="checkbox" :checked="todo.done" @change="toggleStatus" />
    <span>{{ todo.name }}</span>
    <button @click="remove">Delete</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useTodoStore } from '../store';

const props = defineProps({
  todo: Object
});

const store = useTodoStore();

const remove = () => {
  store.removeTask(props.todo);
};

const toggleStatus = () => {
  store.toggleTaskStatus(props.todo);
};
</script>


<style scoped>
.todo-item {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
}
</style>
