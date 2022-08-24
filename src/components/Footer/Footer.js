import './Footer.css'
import PropTypes from 'prop-types'

import TaskFilter from '../TasksFilter'

const Footer = ({ countLeftItem, onFilterChange, ClearCompleted }) => {
  return (
    <footer className="footer">
      <span className="todo-count"> {countLeftItem} items left</span>
      <TaskFilter onFilterChange={onFilterChange} />
      <button className="clear-completed" onClick={ClearCompleted}>
        Clear completed
      </button>
    </footer>
  )
}

Footer.defaultProps = {
  countLeftItem: 0,
  onFilterChange: () => {},
  ClearCompleted: () => {},
}

Footer.propTypes = {
  countLeftItem: PropTypes.number,
  onFilterChange: PropTypes.func,
  ClearCompleted: PropTypes.func,
}

export default Footer
