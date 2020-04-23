//Importamos React y los Hooks useState y UseEffect
import React, { useState, useEffect } from 'react'

//Importamos componentes desde la Carpeta components
import { TaskRow } from './components/TaskRow'
import { TaskBanner } from './components/TaskBanner'
import { TaskCreator } from './components/TaskCreator'
import { VisibiltyControl } from './components/VisibiltyControl'

//Importamos Effectos desde la libreria React-Reveal
import { Fade } from 'react-reveal'




//Funcion principal App que contiene el estado principal y los componentes 
function App() {

/* Hooks  para definir el estado inicial del usuario mediante useName 
 usamos el Hook setUserName para actualizar el estado 	 */
	const [userName, setUserName] = useState('Arcav');
	
/* Hooks para definir el estado inicial de tasksItems mediante un arreglo de objetos 
usamos el Hook setTaskItems para actualizar el estado */	
	const [taskItems, setTaskItems] = useState([
		{ name: 'Task One', done: false },
		{ name: 'Task Two', done: false },
		{ name: 'Task Three', done: false },
		{ name: 'Task Four', done: false }  
	]);

//Hooks para definir el estado showCompleted  usamos el Hook setShowComplete para actualizarlo 	
	const [showCompleted, setShowCompleted] = useState(true)


//Hook useEffect para el ciclo de vida del componente 
	useEffect(() => {
//Variable data para guardar el estado en el local storage 
		let data = localStorage.getItem("tasks");
		
//Condicional para el localstorage 		
		if (data != null) {

//Actualizamos el estado mediante el setTaskItems y mediante un JSON			
			setTaskItems(JSON.parse(data));

		} else {
			setUserName('Arcav example')
			setTaskItems([
			    { name: 'Task One Example', done: false },
				{ name: 'Task Two Example', done: false },
				{ name: 'Task Three', done: false },
				{ name: 'Task Four', done: false }  
			])

			setShowCompleted(true)
		}
	}, [])

	useEffect(() => {
		localStorage.setItem('tasks', JSON.stringify(taskItems));
		}, [taskItems])


	const createNewTask = taskName => {
		if (!taskItems.find(t => t.name === taskName)) {
			setTaskItems([...taskItems, { name: taskName, done: false }])
		}
	};


	const toggleTask = task =>
		setTaskItems(
			taskItems.map(t => (t.name === task.name ? { ...t, done: !t.done } : t))
			);

	const taskTableRows = doneValue =>
		taskItems
			.filter(task => task.done === doneValue)
			.map(task => (
				<TaskRow task={task} key={task.name} toogleTask={toggleTask} />
			));


	return (
	
			<div>
				<TaskBanner
					userName={userName}
					taskItems={taskItems}
				/>

				<div className="container ">
					<TaskCreator newTask={createNewTask} />
					<table className="table table-striped table-bordered">
						<thead>
							<tr className="text-center">
								<th>Description</th>
								<th>Done</th>
							</tr>
						</thead>

						<tbody>
							{taskTableRows(false)}
						</tbody>

					</table>
					
					<div className="bg-secunddary-text-white text-center p-2">
						<VisibiltyControl
							description="Completed Tasks"
							isChecked={showCompleted}
							newTask={checked => setShowCompleted(checked)} />
					</div>	
					
					{showCompleted && (
						
						<table className="table table-striped table-borderd">
							<thead>
							
								<tr>
									<th>Description</th>
									<th>Done</th>
								</tr>
								
							</thead>
							<tbody>
								{taskTableRows(true)}
							</tbody>						
						</table>
						
						
					)}
				
				</div>

			</div>
	


	)
}

export default App
