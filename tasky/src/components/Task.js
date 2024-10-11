import React from 'react';
const Task = (props) => {
    <Task title="Laundry" deadline="Tomorrow">
    Fold laundry and put away
</Task>
    return (
        <div className="card" style={{backgroundColor: props.done ? 'lightgrey' : '#5bb4c4'}}>
            <p className="title">{props.title}</p>
            <p>Due: {props.deadline}</p>
            <p className='world'>{props.description}</p>
            <button onClick={props.markDone} className='doneButton'>Done</button>
            <button className='deleteButton' onClick={props.deleteTask}>Delete</button>
        </div>
    )
    
}

export default Task;