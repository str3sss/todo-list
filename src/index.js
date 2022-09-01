import { Component } from 'react'
import { createRoot } from 'react-dom/client'
import { v4 as uuidv4 } from 'uuid'

import Footer from './components/Footer'
import NewTaskForm from './components/NewTaskForm'
import TaskList from './components/TaskList'
import './index.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      todoData: JSON.parse(window.localStorage.getItem('todoData')) || [this.createTodoItem('Task')],
      filter: 'all',
    }
  }

  onFilterChange = (filter) => {
    this.setState({ filter })
  }

  FilterTodos = (items, filter) => {
    if (filter === 'all') {
      return items
    } else if (filter === 'completed') {
      return items.filter((item) => item.completed)
    } else {
      return items.filter((item) => !item.completed)
    }
  }

  onToggleCompleted = (id) => {
    this.setState(({ todoData }) => {
      const index = todoData.findIndex((item) => item.id === id)
      const newElem = { ...todoData[index] }
      newElem.completed = !newElem.completed

      return { todoData: [...todoData.slice(0, index), newElem, ...todoData.slice(index + 1)] }
    })
  }

  onEdit = (id, description = null) => {
    this.setState(({ todoData }) => {
      const index = todoData.findIndex((item) => item.id === id)
      const newElem = { ...todoData[index] }
      newElem.edit = !newElem.edit
      if (typeof description === 'string') {
        newElem.description = description
      }
      return { todoData: [...todoData.slice(0, index), newElem, ...todoData.slice(index + 1)] }
    })
  }

  createTodoItem(description) {
    return { description, completed: false, edit: false, id: uuidv4(), date: +new Date() }
  }

  addItem = (text) => {
    const newItem = this.createTodoItem(text)

    this.setState(({ todoData }) => {
      return { todoData: todoData.concat([newItem]) }
    })
  }

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      return { todoData: todoData.filter((item) => item.id !== id) }
    })
  }

  clearCompleted = () => {
    this.setState(({ todoData }) => {
      return { todoData: todoData.filter((item) => item.completed === false) }
    })
  }

  render() {
    const countLeftItem = this.state.todoData.length - this.state.todoData.filter((item) => item.completed).length
    const items = this.state.todoData
    const filter = this.state.filter
    const todos = this.FilterTodos(items, filter)

    window.localStorage.setItem('todoData', JSON.stringify(this.state.todoData))
    if (this.state.todoData.length === 0) {
      return (
        <section className="todoapp">
          <NewTaskForm itemAdded={this.addItem} />
          <div>
            <p>Create todo</p>
          </div>
        </section>
      )
    }

    return (
      <section className="todoapp">
        <NewTaskForm itemAdded={this.addItem} />
        <section className="main">
          <TaskList
            todos={todos}
            onDeleted={this.deleteItem}
            onToggleCompleted={this.onToggleCompleted}
            onEdit={this.onEdit}
          />
          <Footer
            filter={filter}
            countLeftItem={countLeftItem}
            onFilterChange={this.onFilterChange}
            clearCompleted={this.clearCompleted}
          />
        </section>
      </section>
    )
  }
}

const root = createRoot(document.getElementById('root'))

root.render(<App />)
