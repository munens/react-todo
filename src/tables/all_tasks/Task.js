import React, { Component } from 'react';
import './AllTasks.css';

class Task extends Component {
	
	constructor(props){
		super(props);
		this.state = {
			user_clicked: false
		}
	}

	componentWillReceiveProps(nextProps){
		
	}

	render(){
		return(
			<tr>
				<td>
					<div className={`user ${this.state.user_clicked ? 'clicked' : ''}`}>
						<p>{this.props.task.name}</p>
					</div>
				</td>
				<td>
					<div className={`user ${this.state.user_clicked ? 'clicked' : ''}`}>
						<p>{this.props.task.detail}</p>
					</div>
				</td>
			</tr>	
		)
	}
}

export default Task;