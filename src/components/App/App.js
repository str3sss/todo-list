import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import NewTaskForm from '../NewTaskForm/NewTaskForm'
import Footer from '../Footer/Footer'
import TaskList from '../TaskList/TaskList'
import Filters from '../Filters'

function App() {
  const createTodoItem = (description, minutes, seconds) => {
    return { description, completed: false, edit: false, id: uuidv4(), minutes, seconds, date: Number(new Date()) }
  }

  const [todos, setTodos] = useState(JSON.parse(window.localStorage.getItem('todoData')) || [])
  const [filter, setFilter] = useState(Filters.all)

  const onFilterChange = (filter) => {
    setFilter(() => filter)
  }

  const filterTodos = (items, filter) => {
    if (filter === Filters.all) {
      return items
    } else if (filter === Filters.completed) {
      return items.filter((item) => item.completed)
    } else {
      return items.filter((item) => !item.completed)
    }
  }

  const onToggleCompleted = (id) => {
    setTodos(() => {
      const index = todos.findIndex((item) => item.id === id)
      const newElem = { ...todos[index] }
      newElem.completed = !newElem.completed
      return [...todos.slice(0, index), newElem, ...todos.slice(index + 1)]
    })
  }

  const onEdit = (id, description = null) => {
    setTodos(() => {
      const index = todos.findIndex((item) => item.id === id)
      const newElem = { ...todos[index] }
      newElem.edit = !newElem.edit
      if (typeof description === 'string') {
        newElem.description = description
      }
      return [...todos.slice(0, index), newElem, ...todos.slice(index + 1)]
    })
  }

  const changeTimer = (id, min = 0, sec = 0) => {
    const index = todos.findIndex((item) => item.id === id)
    const newElem = { ...todos[index] }
    setTodos(() => {
      if (typeof min === 'number') {
        newElem.minutes = min
      }
      if (typeof sec === 'number') {
        newElem.seconds = sec
      }
      return [...todos.slice(0, index), newElem, ...todos.slice(index + 1)]
    })
  }

  const addItem = (description, min, sec) => {
    const newItem = createTodoItem(description, min, sec)
    setTodos(() => todos.concat([newItem]))
  }

  const deleteItem = (id) => {
    setTodos(() => todos.filter((item) => item.id !== id))
  }

  const clearCompleted = () => {
    setTodos(() => todos.filter((item) => item.completed === false))
  }

  const countLeftItem = todos.length - todos.filter((item) => item.completed).length
  const todosFiltered = filterTodos(todos, filter)
  window.localStorage.setItem('todoData', JSON.stringify(todos))
  if (todos.length === 0) {
    return (
      <section className="todoapp">
        <NewTaskForm itemAdded={addItem} />
        <div>
          <h3 style={{ textAlign: 'center', padding: '2rem' }}>Create todo</h3>
        </div>
      </section>
    )
  }

  return (
    <section className="todoapp">
      <NewTaskForm itemAdded={addItem} />
      <section className="main">
        <TaskList
          todos={todosFiltered}
          onDeleted={deleteItem}
          onToggleCompleted={onToggleCompleted}
          onEdit={onEdit}
          changeTimer={changeTimer}
        />
        <Footer
          filter={filter}
          countLeftItem={countLeftItem}
          onFilterChange={onFilterChange}
          clearCompleted={clearCompleted}
        />
      </section>
    </section>
  )
}

export default App
