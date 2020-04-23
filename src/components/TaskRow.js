import React from 'react'
import { Fade } from 'react-reveal'

export const TaskRow = props => (
<Fade>
<tr key={props.task.name}>
		<td>{props.task.name}</td>
		<td>
			<input type="checkbox" 
			checked={props.task.done} 
			onChange={() => props.toogleTask(props.task)}
			/>
		</td>
	</tr>

</Fade>

	

)




