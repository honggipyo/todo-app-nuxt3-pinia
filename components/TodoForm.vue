<template>
  <form @submit.prevent="addTodo" class="todo-form">
    <input
      v-model="todoText"
      type="text"
      placeholder="Add a new todo..."
      class="todo-input"
    />
    <button type="submit" class="add-btn" :disabled="!todoText.trim()">
      Add
    </button>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useTodoStore } from '~/stores/todoStore';

const todoText = ref('');
const todoStore = useTodoStore();

const addTodo = () => {
  if (todoText.value.trim()) {
    todoStore.addTodo(todoText.value);
    todoText.value = '';
  }
};
</script>

<style scoped>
.todo-form {
  display: flex;
  margin-bottom: 20px;
}

.todo-input {
  flex: 1;
  padding: 12px 16px;
  border: 1px solid #ddd;
  border-radius: 6px 0 0 6px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.2s ease;
}

.todo-input:focus {
  border-color: #4fc08d;
}

.add-btn {
  background-color: #4fc08d;
  color: white;
  border: none;
  border-radius: 0 6px 6px 0;
  padding: 0 20px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.add-btn:hover:not(:disabled) {
  background-color: #3ca979;
}

.add-btn:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style> 