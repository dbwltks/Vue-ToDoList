const todos = ref([])
provide('todos', readonly(todos))

const addTodo = (job, date) => {}
const removeTodo = (id) => {}
const completeTodo = (id) => {}

provide('addTodo', addTodo)
provide('removeTodo', removeTodo)
provide('completeTodo', completeTodo)

const initiTodo = (init_todos) => {
  todos.value = init_todos
}

storage.load(initTodos)
TodoListConatiner.js

function load(cb) {
  data = (localStorage에서 불러온 데이터)
  cb(data)
}
storage.js