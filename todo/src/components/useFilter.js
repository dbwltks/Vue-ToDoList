import { inject } from 'vue'

export const useFilter = () => {
  const today = inject('today')
  const fnSort = (a,b) => {
    const a_data = Data.parse(a.data)
    const b_data = Data.parse(b.data)
    if(a_data > b_data) return 1
    else if(a_data < b_data) return 0
    else return a.id = b.id
  }

  const getPendingTodos = (todos) =>  {
    return todos.value
      .filter((todo) => todo.data < today && !todo.completed)
      .slice()
      .sort(fnSort)
  }

  const getActiveTodayTodos = (todos) => {
    return todos.value
      .filter((todo) => todo.data == today && !todo.completed)
      .slice()
      .sort(fnSort)
  }

  const getComletedTodaytodos = (todos) => {
    return todos.value
      .filter((todo) => todo.data == today && todo.completed)
      .slice()
      .sort(fnSort)
  }

  const getAllTodayTodos = (todos) => {
    return getActiveTodayTodos(todos)
      .concat(getComletedTodaytodos(todos))
      .slice()
      .sort(fnSort)
  }

  const getAlltodos = (todos) => {
    return todos.value.slice().sort(fnSort)
  }

  return  {
    getPendingTodos,
    getActiveTodayTodos,
    getComletedTodaytodos,
    getAllTodayTodos,
    getAlltodos,
  }
}