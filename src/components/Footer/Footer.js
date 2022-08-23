import './Footer.css'
import TaskFilter from '../TasksFilter'

const Footer= ({countLeftItem, onFilterChange}) => {
    return (
        <footer className='footer'>
        <span className='todo-count'> {countLeftItem} items left</span>
        <TaskFilter onFilterChange={onFilterChange}/>
        <button className='clear-completed'>Clear completed</button>
        </footer>
    )
}

export default Footer;