import './Footer.css'
import TaskFilter from '../TasksFilter'
import PropTypes from 'prop-types'

const Footer= ({countLeftItem, onFilterChange, ClearCompleted}) => {
    return (
        <footer className='footer'>
        <span className='todo-count'> {countLeftItem} items left</span>
        <TaskFilter onFilterChange={onFilterChange}/>
        <button className='clear-completed' onClick={ClearCompleted}>Clear completed</button>
        </footer>
    )
}

Footer.defaultProps = {
    countLeftItem: 'unknown',
    onFilterChange: () => {},
    ClearCompleted: () => {}
}

Footer.propTypes = {
    countLeftItem: PropTypes.string,
    onFilterChange: PropTypes.func,
    ClearCompleted: PropTypes.func
}

export default Footer;