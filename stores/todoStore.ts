import { defineStore } from 'pinia';
import type { Todo } from '~/types/todo';
import { v4 as uuidv4 } from 'uuid';

export const useTodoStore = defineStore('todo', {
  state: () => {
    const savedTodos = process.client ? localStorage.getItem('todos') : null;
    
    return {
      todos: savedTodos ? JSON.parse(savedTodos).map((todo: Omit<Todo, 'createdAt'> & { createdAt: string }) => ({
        ...todo,
        createdAt: new Date(todo.createdAt)
      })) : [] as Todo[]
    };
  },
  
  getters: {
    getTodos: (state) => state.todos,
    completedTodos: (state) => state.todos.filter((todo: Todo) => todo.completed),
    incompleteTodos: (state) => state.todos.filter((todo: Todo) => !todo.completed),
    totalTodos: (state) => state.todos.length
  },
  
  actions: {
    saveTodos() {
      if (process.client) {
        localStorage.setItem('todos', JSON.stringify(this.todos));
      }
    },
    
    addTodo(text: string) {
      if (!text.trim()) return;
      
      const newTodo: Todo = {
        id: uuidv4(),
        text: text.trim(),
        completed: false,
        createdAt: new Date()
      };
      
      this.todos.push(newTodo);
      this.saveTodos();
    },
    
    removeTodo(id: string) {
      const index = this.todos.findIndex((todo: Todo) => todo.id === id);
      if (index !== -1) {
        this.todos.splice(index, 1);
        this.saveTodos();
      }
    },
    
    toggleTodoStatus(id: string) {
      const todo = this.todos.find((todo: Todo) => todo.id === id);
      if (todo) {
        todo.completed = !todo.completed;
        this.saveTodos();
      }
    },
    
    clearCompletedTodos() {
      this.todos = this.todos.filter((todo: Todo) => !todo.completed);
      this.saveTodos();
    }
  }
}); 