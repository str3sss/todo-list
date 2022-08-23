
import React from 'react';
import './Task.css'




export default class Task extends React.Component {
    
    static defaultProps = {
        description: 'not description',
        onDeleted: () => {},
        onToggleCompleted: () => {},
        completed: false
    }

    render() {
        const {description, onDeleted, onToggleCompleted, completed} = this.props;
        
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
                        <span className="created">created 5 minutes ago</span>
                    </label>
                    <button className='icon icon-edit'></button>
                    <button className='icon icon-destroy' onClick={onDeleted}></button>
                </div>
            </li>
        )
    }
}