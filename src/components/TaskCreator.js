import React ,{useState}from 'react'

export const TaskCreator = (props) => {
	const [newTaskName, setNewTaskName] = useState('')
 
	const updateNewTaskName = e => setNewTaskName(e.target.value)

	const createNewTask = () =>{
		props.newTask(newTaskName);
		setNewTaskName('')	
	}
	return (
		<div className="my-3">
			<input
			type="text"
			className="form-control"
			value={newTaskName}
			onChange={updateNewTaskName}/>
			<button className ="btn btn-success mt-1" onClick={createNewTask}>
				Add
			</button>
			
		</div>
	)
}
