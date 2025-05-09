<template>
  <div class="todo-container">
    <div class="todo-app">
      <h1 class="app-title">Todo App</h1>
      <TodoForm />
      <TodoList />
      <div class="todo-stats" v-if="todoStore.totalTodos > 0">
        <p>{{ todoStore.incompleteTodos.length }} remaining out of {{ todoStore.totalTodos }} tasks</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTodoStore } from '~/stores/todoStore';
import TodoForm from './TodoForm.vue';
import TodoList from './TodoList.vue';

const todoStore = useTodoStore();
</script>

<style scoped>
.todo-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh;
  padding: 40px 16px;
  background-color: #f5f6fa;
}

.todo-app {
  width: 100%;
  max-width: 600px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  padding: 30px;
}

.app-title {
  text-align: center;
  color: #4fc08d;
  font-size: 28px;
  margin-bottom: 30px;
  font-weight: 600;
}

.todo-stats {
  margin-top: 20px;
  text-align: center;
  color: #888;
  font-size: 14px;
}
</style> 