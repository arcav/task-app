import React from 'react'
import { Fade } from 'react-reveal'

export const VisibiltyControl = (props) => {
	return (
<Fade>
<div className="form-control">
			<input
			type="checkbox"
			className="form-check-input"
			checked={props.isChecked}
			onChange={e => props.newTask(e.target.checked)}/>
			<label htmlFor="form-checked-label">
				Show {props.description}
			</label>
			
		</div>
</Fade>
		
	)
}
