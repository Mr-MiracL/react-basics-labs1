import React from "react";

const AddTaskForm = (props) => {

  return (
    <div>
       <form onSubmit={props.submit}>
      <label>
        Task title:
        <input type="text" name="title" required onChange={(event) => props.change(event)} />
      </label>
      <br />
      <label>
        Due date:
        <input type="date" name="deadline" required onChange={(event) => props.change(event)} />
      </label>
      <br />
      <label>
        Details:
        <input type="text" name="description" onChange={(event) => props.change(event)} />
      </label>
      <br />
      <label >
      priority:
        <input list="priority" placeholder="select" name="priority" required onChange={(event) => props.change(event)} />
       <datalist id="priority">
        <option>low</option>
        <option>medium</option>
        <option>high</option>
       </datalist>
        </label>
        <input type="submit" value="Submit" />
        </form>
    </div>
  )
};

export default AddTaskForm;
