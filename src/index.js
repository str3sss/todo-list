import { Component } from 'react'
import { createRoot } from 'react-dom/client'
import Footer from './components/Footer'
import NewTaskForm from './components/NewTaskForm'
import TaskList from './components/TaskList'
import './index.css'


class App extends Component {
  currentId = 1

  state = {
    todoData: [
      this.createTodoItem('first job'),
      this.createTodoItem('second task'),
      this.createTodoItem('Third todo')
    ],
    filter:'all'
  }

  onFilterChange = (filter) => {
    this.setState({filter})
  }

  FilterTodos = (items,filter) => {
    if (filter === 'all'){
      return items
    } else if (filter === 'completed') {
      return items.filter(item => item.completed)
    } else {
      return items.filter(item => !item.completed)
    }
  }

  onToggleCompleted = (id) => {
    this.setState(({ todoData }) => {
      const index = todoData.findIndex(item => item.id === id)
      const newElem = { ...todoData[index] }
      newElem.completed = !newElem.completed;

      return { todoData: [...todoData.slice(0, index), newElem, ...todoData.slice(index + 1)] }
    })
  }

  createTodoItem(description) {
    return { description, completed: false, id: this.currentId++, date: new Date()}
  }

  AddItem = (text) => {
    const newItem = this.createTodoItem(text)

    this.setState(({ todoData }) => {
      return { todoData: todoData.concat([newItem]) }
    })
  }

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      return { todoData: todoData.filter(item => item.id !== id) }
    })
  }

  ClearCompleted = () => {
    this.setState(({todoData}) => {
      return { todoData: todoData.filter(item => item.completed === false) }
    })
  }

  render() {

    const countLeftItem = this.state.todoData.length - this.state.todoData.filter(item => item.completed).length
    const items = this.state.todoData
    const filter = this.state.filter
    const todos = this.FilterTodos(items,filter)

    return (
      
      <section className='todoapp'>
        <NewTaskForm ItemAdded={this.AddItem} />
        <section className='main'>
          <TaskList todos={todos} onDeleted={this.deleteItem} onToggleCompleted={this.onToggleCompleted} />
          <Footer countLeftItem={countLeftItem} onFilterChange={this.onFilterChange} ClearCompleted={this.ClearCompleted}/>
        </section>
      </section>
    )
  }

}


const root = createRoot(document.getElementById('root'));

root.render(<App />)
