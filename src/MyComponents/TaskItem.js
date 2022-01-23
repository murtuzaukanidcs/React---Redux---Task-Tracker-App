import React from 'react'

export const TaskItem = ({task,onDelete}) => {
    return (
        <div>
            <h4>{task.title}</h4>
            <p>{task.desc}</p>
            <button className="btn btn-danger mb-5" onClick={() => onDelete(task)} >DELEET</button>
            <br />
        </div>
    )
}
