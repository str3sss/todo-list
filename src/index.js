import { Component } from 'react'
import { createRoot } from 'react-dom/client'
import Footer from './components/Footer'
import NewTaskForm from './components/NewTaskForm'
import Task from './components/Task'
import TaskList from './components/TaskList'
import TaskFilter from './components/TasksFilter'
import './index.css'

const header = (
  <header className='header'>
    <h1>todos</h1>
    <input className="new-todo" placeholder="What needs to be done?" autoFocus onChange={() => console.log(1)}></input>
  </header>
)


class App extends Component {
  currentId = 1

  state = {
    todoData: [
      this.createTodoItem('first job'),
      this.createTodoItem('second task'),
      this.createTodoItem('Third todo')
    ]
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
    return { description, completed: false, id: this.currentId++ }
  }

  AddItem = (text) => {
    const newItem = this.createTodoItem(text)

    this.setState(({ todoData }) => {
      return { todoData: todoData.concat([newItem]) }
    })

    console.log('added', newItem)
  }

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      return { todoData: todoData.filter(item => item.id !== id) }
    })
  }

  render() {

    const countLeftItem = this.state.todoData.length - this.state.todoData.filter(item => item.completed).length

    return (
      <section className='todoapp'>
        {header}
        <section className='main'>
          <TaskList todos={this.state.todoData} onDeleted={this.deleteItem} onToggleCompleted={this.onToggleCompleted} />
          <Footer countLeftItem={countLeftItem}/>
          <NewTaskForm ItemAdded={this.AddItem} />
        </section>
      </section>
    )
  }

}


const root = createRoot(document.getElementById('root'));

root.render(<App />)
