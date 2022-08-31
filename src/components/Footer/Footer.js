import './Footer.css'
import PropTypes from 'prop-types'

import TaskFilter from '../TasksFilter'

const Footer = ({ countLeftItem, onFilterChange, clearCompleted, filter }) => {
  return (
    <footer className="footer">
      <span className="todo-count"> {countLeftItem} items left</span>
      <TaskFilter onFilterChange={onFilterChange} filter={filter} />
      <button className="clear-completed" onClick={clearCompleted}>
        Clear completed
      </button>
    </footer>
  )
}

Footer.defaultProps = {
  countLeftItem: 0,
  onFilterChange: () => {},
  clearCompleted: () => {},
}

Footer.propTypes = {
  countLeftItem: PropTypes.number,
  onFilterChange: PropTypes.func,
  clearCompleted: PropTypes.func,
}

export default Footer
