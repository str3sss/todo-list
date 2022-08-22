import './Footer.css'
import TaskFilter from '../TasksFilter'

const Footer= ({countLeftItem}) => {
    return (
        <footer className='footer'>
        <span className='todo-count'> {countLeftItem} items left</span>
        <TaskFilter />
        <button className='clear-completed'>Clear completed</button>
        </footer>
    )
}




export default Footer;