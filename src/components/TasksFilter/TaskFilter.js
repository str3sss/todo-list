import React from "react"


class TaskFilter extends React.Component {
    render() {
        return(
            <ul className="filters">
                <li><button className="selected">All</button></li>
                <li><button>Active</button></li>
                <li><button>Completed</button></li>
            </ul>
        )
    }

}


export default TaskFilter