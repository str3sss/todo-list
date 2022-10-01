import { useState } from 'react'
import './NewTaskForm.css'
import PropTypes from 'prop-types'

function NewTaskForm({ itemAdded }) {
  const [label, setLabel] = useState('')
  const [min, setMin] = useState('')
  const [sec, setSec] = useState('')

  const onLabelChange = (e) => {
    setLabel(e.target.value)
  }
  const onMinChange = (e) => {
    setMin(e.target.value)
  }
  const onSecChange = (e) => {
    setSec(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    itemAdded(label, +min, +sec)
    setLabel('')
    setMin('')
    setSec('')
  }

  return (
    <header className="header">
      <h1>todos</h1>
      <form onSubmit={onSubmit} className="new-todo-form">
        <input type="text" className="new-todo" placeholder="Task" value={label} onChange={onLabelChange} />
        <input type="text" className="new-todo-form__timer" placeholder="Min" value={min} onChange={onMinChange} />
        <input type="text" className="new-todo-form__timer" placeholder="Sec" value={sec} onChange={onSecChange} />
        <button type="submit" />
      </form>
    </header>
  )
}
NewTaskForm.propTypes = {
  itemAdded: PropTypes.func,
}

NewTaskForm.defaultProps = {
  itemAdded: () => {},
}

export default NewTaskForm
