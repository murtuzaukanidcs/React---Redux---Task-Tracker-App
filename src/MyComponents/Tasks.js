import React from 'react'
import { TaskItem } from './TaskItem'

export const Tasks = (props) => {
    return (
        <div className='container'>
            <br />
            <h3 className='text-center my-3'>React - Redux - Task Tracker App</h3>
            {props.tasks.length === 0 ? "No Task to display" :
                    props.tasks.map((task) => {
                        return <TaskItem task={task} key={task.sno} onDelete={props.onDelete} />
                    })
            }
        </div>
    )
}
