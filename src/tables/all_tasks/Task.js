import React, { Component } from 'react';
import './AllTasks.css';

class Task extends Component {
	
	constructor(props){
		super(props);
		this.state = {
			user_clicked: false
		}
	}

	render(){
		const task = this.props.task;
		return(
			<tr>
				<td className="user-data">
					<div className={`user ${this.state.user_clicked ? 'clicked' : ''}`}>
						<p>{task.name}</p>
					</div>
				</td>
				<td className="task-data">
					<div className={`user ${this.stat ? 'clicked' : ''}`}>
						<p className={`task-text ${task.completion ? 'complete' : ''}`}>{task.detail}</p>
					</div>
				</td>
			</tr>	
		)
	}
}

export default Task;