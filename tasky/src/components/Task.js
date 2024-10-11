import React from 'react';
const Task = (props) => {
    <Task title="Laundry" deadline="Tomorrow">
    Fold laundry and put away
</Task>
    return (
        <div className="card">
            <p className="title">{props.title}</p>
            <p>Due: {props.deadline}</p>
            <p className='world'>{props.description}</p>
        </div>
    )
}

export default Task;