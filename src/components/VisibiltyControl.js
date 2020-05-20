import React from 'react'


export const VisibiltyControl = (props) => {
	return (

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

	)
}
