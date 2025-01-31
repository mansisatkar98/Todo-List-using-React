import React, { useState } from 'react'

export const AddTodo = (props) =>{
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const sumbit = () =>{
        
    }
  return (
    <div className="container my-3">
        <h3>Add a Todo</h3>
        <form onSubmit={submit}>
            <div class="mb-3">
                <label for="title" class="form-label">Todo Title</label>
                <input type="text" class="form-control" id="id"/>
            </div>
            <div class="mb-3">
                <label for="desc" class="form-label">Todo Description</label>
                <input type="text" class="form-control" id="desc"/>
            </div>
            <button type="Add Todo" class="btn btn-sm btn-success">Submit</button>
        </form>
    </div>
  )
}