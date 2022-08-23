import PropTypes from 'prop-types'
import React from 'react';
import './Task.css'
import { formatDistanceToNow } from 'date-fns'




export default class Task extends React.Component {
    
    static defaultProps = {
        description: 'not description',
        onDeleted: () => {},
        onToggleCompleted: () => {},
        completed: false,
        date: new Date()
    }

    static propTypes = {
        description: PropTypes.string,
        onDeleted: PropTypes.func,
        onToggleCompleted: PropTypes.func,
        completed: PropTypes.bool,
        date: PropTypes.instanceOf(Date)
    }

    render() {
        const {description, onDeleted, onToggleCompleted, completed, date} = this.props;
        
        let status = ''
        if (completed){
            status = 'completed'
        }
        else{
            status = ''
        }

        return (
            <li className={status}>
                <div className='view'>
                    <input className='toggle' type='checkbox' onClick={onToggleCompleted}></input>
                    <label>
                        <span className="description" >{description}</span>
                        <span className="created">{formatDistanceToNow(date,{includeSeconds:true})}</span>
                    </label>
                    <button className='icon icon-edit'></button>
                    <button className='icon icon-destroy' onClick={onDeleted}></button>
                </div>
            </li>
        )
    }
}