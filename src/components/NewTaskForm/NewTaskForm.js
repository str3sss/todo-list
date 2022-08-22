import { Component } from 'react';
import './NewTaskForm.css'


class NewTaskForm extends Component {
    render(){
        return(
            <div>
                <button onClick={()=> this.props.ItemAdded('hello world')}>Add Task</button>
            </div>
        )
    }
}

export default NewTaskForm;