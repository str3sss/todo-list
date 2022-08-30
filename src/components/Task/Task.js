import PropTypes from 'prop-types'
import React from 'react'
import './Task.css'
import { formatDistanceToNow } from 'date-fns'

export default class Task extends React.Component {
  static defaultProps = {
    description: 'not description',
    onDeleted: () => {},
    onEdit: () => {},
    onToggleCompleted: () => {},
    completed: false,
    date: 0,
  }

  static propTypes = {
    description: PropTypes.string,
    onDeleted: PropTypes.func,
    onEdit: PropTypes.func,
    onToggleCompleted: PropTypes.func,
    completed: PropTypes.bool,
    date: PropTypes.number,
  }

  render() {
    const { description, onDeleted, onEdit, onToggleCompleted, completed, edit, date } = this.props
    let status = ''
    let editForm = null

    if (completed) {
      status = 'completed'
    } else {
      status = ''
    }
    if (edit) {
      status = 'editing'
      editForm = <input type="text" className="edit" />
    } else {
      status = ''
    }

    return (
      <li className={status}>
        <div className="view">
          <input className="toggle" type="checkbox" onClick={onToggleCompleted}></input>
          <label>
            <span className="description">{description}</span>
            <span className="created">{formatDistanceToNow(date, { includeSeconds: true })}</span>
          </label>
          <button className="icon icon-edit" onClick={onEdit}></button>
          <button className="icon icon-destroy" onClick={onDeleted}></button>
        </div>
        {editForm}
      </li>
    )
  }
}
