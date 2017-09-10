import React, { Component } from 'react';
import moment from 'moment';
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
				<td className={`row ${this.state.user_clicked ? 'clicked' : ''}`}>
					<div className="user">
						<p className="name-text">{task.name}</p>
					</div>
				</td>
				<td className="row task">
					<div className="task-detail">
						<p className={`task-text ${task.completion ? 'complete' : ''}`} >{task.detail}</p>
						<p className="task-date">{moment(task.date).format('MMMM Do YYYY, h:mm:ss a')}</p>
					</div>
				</td>
			</tr>	
		)
	}
}

export default Task;