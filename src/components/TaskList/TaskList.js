import Task from '../Task'
import './TaskList.css'
import PropTypes from 'prop-types'


const TodoList = ({todos, onDeleted, onToggleCompleted}) => {

    const elements = todos.map((item) => {
        const {id,...props} = item

        return(
            <Task {...props} key={id} 
            onDeleted={() => onDeleted(id)}
            onToggleCompleted={()=> onToggleCompleted(id)}
            />
        )

    })

    return (
      <ul className='todo-list'>
        {elements}
      </ul>
    );
  };

  TodoList.defaultProps = {
    todos: [],
    onDeleted: () => {},
    onToggleCompleted: ()=>{}
  }

  TodoList.propTypes = {
    todos: PropTypes.array,
    onDeleted: PropTypes.func,
    onToggleCompleted: PropTypes.func
  }
  
  export default TodoList;