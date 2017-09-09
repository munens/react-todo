import React, { Component } from 'react';
import './TasksTable.css';

class Task extends Component {
	
	render(){
		return(
			<div className="task">
				<p>{this.props.task.name}</p>
			</div>
		)
	}
}

export default Task;