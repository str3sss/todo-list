import PropTypes from 'prop-types'
import React from 'react'
import './Task.css'
import { formatDistanceToNow } from 'date-fns'
import classNames from 'classnames'

export default class Task extends React.Component {
  state = {
    label: this.props.description,
  }

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

  onLabelEdit = (e) => {
    this.setState((prevState) => {
      if (prevState.label !== e.target.value) {
        return { label: e.target.value }
      }
    })
  }

  onSubmitHandler = (e) => {
    this.props.onEdit(this.state.label)
    e.preventDefault()
  }

  render() {
    const { onDeleted, onEdit, onToggleCompleted, completed, edit, date } = this.props
    let status = classNames({ editing: edit }, { completed })
    const editForm = <input type="text" className="edit" value={this.state.label} onChange={this.onLabelEdit} />

    return (
      <li className={status}>
        <div className="view">
          <input className="toggle" type="checkbox" onClick={onToggleCompleted}></input>
          <label>
            <span className="description">{this.state.label}</span>
            <span className="created">{formatDistanceToNow(date, { includeSeconds: true })}</span>
          </label>
          <button className="icon icon-edit" onClick={onEdit}></button>
          <button className="icon icon-destroy" onClick={onDeleted}></button>
        </div>
        <form onSubmit={this.onSubmitHandler}>{editForm}</form>
      </li>
    )
  }
}
