<template>
  <div class="todo-item" :class="{ completed: todo.completed }">
    <div class="todo-content">
      <input 
        type="checkbox" 
        :checked="todo.completed" 
        @change="toggleStatus" 
        class="todo-checkbox"
      />
      <span class="todo-text">{{ todo.text }}</span>
    </div>
    <button @click="removeTodo" class="delete-btn">
      <span>×</span>
    </button>
  </div>
</template>

<script setup lang="ts">
import type { Todo } from '~/types/todo';
import { useTodoStore } from '~/stores/todoStore';

const props = defineProps<{
  todo: Todo
}>();

const todoStore = useTodoStore();

const toggleStatus = () => {
  todoStore.toggleTodoStatus(props.todo.id);
};

const removeTodo = () => {
  todoStore.removeTodo(props.todo.id);
};
</script>

<style scoped>
.todo-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
}

.todo-item:hover {
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
}

.todo-item.completed .todo-text {
  text-decoration: line-through;
  color: #888;
}

.todo-content {
  display: flex;
  align-items: center;
  flex: 1;
}

.todo-checkbox {
  margin-right: 12px;
  height: 18px;
  width: 18px;
  cursor: pointer;
}

.todo-text {
  font-size: 16px;
  word-break: break-word;
  transition: color 0.2s ease;
}

.delete-btn {
  background: none;
  border: none;
  color: #ff5252;
  font-size: 22px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  transition: background-color 0.2s ease;
  margin-left: 10px;
}

.delete-btn:hover {
  background-color: #f8f8f8;
}
</style> 