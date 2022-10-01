import PropTypes from 'prop-types'

import Filters from '../Filters'

const TaskFilter = ({ onFilterChange, filter }) => {
  return (
    <ul className="filters">
      <li>
        <button className={filter === Filters.all ? 'selected' : ''} onClick={() => onFilterChange(Filters.all)}>
          All
        </button>
      </li>
      <li>
        <button className={filter === Filters.active ? 'selected' : ''} onClick={() => onFilterChange(Filters.active)}>
          Active
        </button>
      </li>
      <li>
        <button
          className={filter === Filters.completed ? 'selected' : ''}
          onClick={() => onFilterChange(Filters.completed)}
        >
          Completed
        </button>
      </li>
    </ul>
  )
}

TaskFilter.defaultProps = {
  onFilterChange: () => {},
  filter: 'all',
}

TaskFilter.propTypes = {
  onFilterChange: PropTypes.func,
  filter: PropTypes.string,
}

export default TaskFilter
