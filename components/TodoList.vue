<template>
  <div class="todo-list">
    <div v-if="todoStore.totalTodos === 0" class="empty-state">
      <p>No todos yet. Add one below!</p>
    </div>
    <TransitionGroup name="list" tag="div">
      <TodoItem
        v-for="todo in todoStore.getTodos"
        :key="todo.id"
        :todo="todo"
      />
    </TransitionGroup>
    <div v-if="todoStore.completedTodos.length > 0" class="clear-completed">
      <button @click="clearCompleted" class="clear-btn">
        Clear completed ({{ todoStore.completedTodos.length }})
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTodoStore } from '~/stores/todoStore';
import TodoItem from './TodoItem.vue';

const todoStore = useTodoStore();

const clearCompleted = () => {
  todoStore.clearCompletedTodos();
};
</script>

<style scoped>
.todo-list {
  margin: 20px 0;
}

.empty-state {
  text-align: center;
  padding: 20px;
  color: #888;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.clear-completed {
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
}

.clear-btn {
  background-color: transparent;
  border: none;
  color: #888;
  cursor: pointer;
  font-size: 14px;
  padding: 4px 8px;
  border-radius: 4px;
  transition: all 0.2s ease;
}

.clear-btn:hover {
  color: #ff5252;
  background-color: #f8f8f8;
}

/* List transitions */
.list-enter-active,
.list-leave-active {
  transition: all 0.3s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style> 