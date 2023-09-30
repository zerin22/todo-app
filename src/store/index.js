import {createPinia, defineStore} from 'pinia';

export const useStore = createPinia();

export const useTodoStore = defineStore({
    id: 'todos',
    state: () => ({
        todos: []
    }),
    actions: {
        addTask(task) {
            this.todos.push(task);
        },
        removeTask(task) {
            const index = this.todos.indexOf(task);
            if (index > -1) {
                this.todos.splice(index, 1);
            }
        },
        toggleTaskStatus(task) {
            task.done = !task.done;
        }
    }
});