import Task from '../Task'
import './TaskList.css'


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
  
  export default TodoList;