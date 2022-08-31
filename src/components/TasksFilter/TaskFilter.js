import React from 'react'
import PropTypes from 'prop-types'

const FILTERS = {
  ALL: 'all',
  COMPLETED: 'completed',
  ACTIVE: 'active',
}

export default class TaskFilter extends React.Component {
  static defaultProps = {
    onFilterChange: () => {},
    filter: 'all',
  }

  static propTypes = {
    onFilterChange: PropTypes.func,
    filter: PropTypes.string,
  }

  render() {
    const filter = this.props.filter
    return (
      <ul className="filters">
        <li>
          <button
            className={filter === FILTERS.ALL ? 'selected' : ''}
            onClick={() => this.props.onFilterChange(FILTERS.ALL)}
          >
            All
          </button>
        </li>
        <li>
          <button
            className={filter === FILTERS.ACTIVE ? 'selected' : ''}
            onClick={() => this.props.onFilterChange(FILTERS.ACTIVE)}
          >
            Active
          </button>
        </li>
        <li>
          <button
            className={filter === FILTERS.COMPLETED ? 'selected' : ''}
            onClick={() => this.props.onFilterChange(FILTERS.COMPLETED)}
          >
            Completed
          </button>
        </li>
      </ul>
    )
  }
}
