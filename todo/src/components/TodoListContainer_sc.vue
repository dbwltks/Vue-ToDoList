<template>
  <todo-list-new />
  <section class="container">
    <div class="row justify-content-center m-2">
      <todo-list-main />
    </div>
  </section>
</template>

<script>
export default {
  name: "TodoListContainer_sc",
}
</script>

<script setup>
import { ref, readonly, provide } from 'vue'
import { useStorage } from '../compositions/storage';
import TodoListNew_sc from './TodoListNew_sc.vue';
import TodoListMain_sc from './TodoListMain_sc.vue';

const todos = ref([])
    const { loadTodos, saveTodos, storage_id } = useStorage()

    provide('todos', readonly(todos))

    const initiTodo = (init_todos) => {
      todos.value = init_todos
    }
    const addTodo = (job, date) => {
      todos.value.push({
        id: storage_id.value++,
        job: job,
        date: date,
        completed: false,
      })
      saveTodos(todos)
    }
    const removeTodo = (id) => {
      todos.value.splice(id, 1)
      todos.value.forEach((todo, idx) => {
        todo.id = idx
      })
      saveTodos(todos)
    }
    const completeTodo = (id) => {
      todos.value.find((todo) => todo.id == id).completed = true
      saveTodos(todos)
    }

    provide('addTodo', addTodo)
    provide('removeTodo', removeTodo)
    provide('completeTodo', completeTodo)

    loadTodos(initiTodo)
</script>