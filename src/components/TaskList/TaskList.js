import PropTypes from 'prop-types'

import Task from '../Task'
import './TaskList.css'

const TodoList = ({ todos, onDeleted, onEdit, onToggleCompleted, changeTimer }) => {
  const elements = todos.map((item) => {
    const { id, ...props } = item

    return (
      <Task
        {...props}
        key={id}
        onDeleted={() => onDeleted(id)}
        onToggleCompleted={() => onToggleCompleted(id)}
        onEdit={(description) => onEdit(id, description)}
        onTimer={(min, sec) => changeTimer(id, min, sec)}
      />
    )
  })

  return <ul className="todo-list">{elements}</ul>
}

TodoList.defaultProps = {
  todos: [],
  onDeleted: () => {},
  onEdit: () => {},
  onToggleCompleted: () => {},
}

TodoList.propTypes = {
  todos: PropTypes.array,
  onDeleted: PropTypes.func,
  onEdit: PropTypes.func,
  onToggleCompleted: PropTypes.func,
}

export default TodoList
