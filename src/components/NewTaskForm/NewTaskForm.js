import { Component } from 'react'
import './NewTaskForm.css'
import PropTypes from 'prop-types'

export default class NewTaskForm extends Component {
  static defaultProps = {
    itemAdded: () => {},
  }

  static propTypes = {
    itemAdded: PropTypes.func,
  }

  state = {
    label: '',
  }

  onLabelChange = (e) => {
    this.setState({ label: e.target.value })
  }

  onSubmit = (e) => {
    this.props.itemAdded(this.state.label)
    this.setState({ label: '' })
    e.preventDefault()
  }

  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            className="new-todo"
            placeholder="What needs to be done?"
            value={this.state.label}
            autoFocus
            onChange={this.onLabelChange}
          />
        </form>
      </header>
    )
  }
}
