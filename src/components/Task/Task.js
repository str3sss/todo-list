import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'
import './Task.css'
import { formatDistanceToNow } from 'date-fns'
import classNames from 'classnames'

function Task({ onDeleted, onEdit, onToggleCompleted, completed, edit, date, minutes, seconds, description, onTimer }) {
  const [label, setLabel] = useState(description)
  const [play, setPlay] = useState(false)
  const [min, setMin] = useState(minutes)
  const [sec, setSec] = useState(seconds)

  useEffect(() => {
    let timer = null
    if (play) {
      timer = setInterval(() => {
        if (sec > 0) {
          setSec(() => sec - 1)
        } else if (min > 0) {
          setMin(() => min - 1)
          setSec(() => 59)
        } else {
          setPlay(() => false)
          clearInterval(timer)
        }
      }, 1000)
    }
    return () => clearInterval(timer)
  }, [play, min, sec])

  let status = classNames({ editing: edit }, { completed })
  const editForm = <input type="text" className="edit" value={label} onChange={onLabelEdit} />

  function onLabelEdit(e) {
    setLabel(() => e.target.value)
  }

  function onSubmitHandler(e) {
    onEdit(label)
    e.preventDefault()
  }

  function timerHandler(action) {
    setPlay(action)
    onTimer(min, sec)
  }

  return (
    <li className={status}>
      <div className="view">
        <input className="toggle" type="checkbox" onClick={(e) => onToggleCompleted(e)}></input>
        <label>
          <span className="title">{label}</span>
          <span className="description">
            <button className="icon icon-play" onClick={() => timerHandler(true)}></button>
            <button className="icon icon-pause" onClick={() => timerHandler(false)}></button>
            <span>
              &nbsp; {min}:{sec}
            </span>
          </span>
          <span className="description">{formatDistanceToNow(date, { includeSeconds: true })}</span>
        </label>
        <button className="icon icon-edit" onClick={onEdit}></button>
        <button className="icon icon-destroy" onClick={onDeleted}></button>
      </div>
      <form onSubmit={(e) => onSubmitHandler(e)}>{editForm}</form>
    </li>
  )
}

Task.defaultProps = {
  description: 'not description',
  onDeleted: () => {},
  onEdit: () => {},
  onToggleCompleted: () => {},
  completed: false,
  date: 0,
}

Task.propTypes = {
  description: PropTypes.string,
  onDeleted: PropTypes.func,
  onEdit: PropTypes.func,
  onToggleCompleted: PropTypes.func,
  completed: PropTypes.bool,
  date: PropTypes.number,
}

export default Task
