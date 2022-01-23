import React,{useState} from 'react'

export const AddTask = (props) => {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const submit = (e) => {
        e.preventDefault();
        if(!title || !desc){
            alert("Title or Description cannot be blank");
            return
        }
        props.addTask(title,desc);
    }
    return (
        <div className='container'>
            <br />
            <h3 className='text-center my-3'>Add a task</h3>

            <form onSubmit={submit}>
                <div className="form-group">
                    <label htmlFor="title">Task</label>
                    <input type="text" value={title} onChange={(e) => {setTitle(e.target.value)}} className="form-control" id="title" name='title' aria-describedby="emailHelp" placeholder="Enter title" />
                </div>
                <div className="form-group">
                    <label htmlFor="desc">Description</label>
                    <input type="text" value={desc} className="form-control" id="desc" name='desc' onChange={(e) => {setDesc(e.target.value)}} placeholder="Description" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
