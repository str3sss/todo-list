import React from "react"
import PropTypes from 'prop-types'

export default class TaskFilter extends React.Component {
    static defaultProps = {
        onFilterChange : () => {}
    }

    static propTypes = {
        onFilterChange: PropTypes.func
    }

    state = {
        all: "selected",
        active:'',
        completed:''
    }

    onAll = () => {
        this.setState({
            all: "selected",
            active:'',
            completed:''
        })
        this.props.onFilterChange('all')
    }

    onActive = () => {
        this.setState({
            all: '',
            active:"selected",
            completed:''
        })
        this.props.onFilterChange('active')
    }

    onCompleted = () => {
        this.setState({
            all: '',
            active:'',
            completed:"selected"
        })
        this.props.onFilterChange('completed')
    }

    render() {
        return(
            <ul className="filters">
                <li><button className={this.state.all} onClick={this.onAll}>All</button></li>
                <li><button className={this.state.active} onClick={this.onActive}>Active</button></li>
                <li><button className={this.state.completed} onClick={this.onCompleted}>Completed</button></li>
            </ul>
        )
    }
}