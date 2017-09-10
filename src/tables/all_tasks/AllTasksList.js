import React, { Component } from 'react';
import Task from './Task';
import './AllTasks.css';

class AllTasksList extends Component {
	constructor(props){
		super(props);
		this.state = {
		
		}
	}

	render(){
		const all_user_tasks = [].concat(...this.props.users.map((user, index) => { return user.tasks}));
		return (
			<div className="all-tasks-table-frame">
				<table className="all-tasks-table">
					<thead>
						<tr>
							<th className="user-header">Users</th>
							<th className="task-header">Tasks</th>
						</tr>
					</thead>
					<tbody>
						{all_user_tasks.length > 0 &&
							all_user_tasks.map((task, index) => {
								console.log(all_user_tasks)
								if(task.name && task.detail){
									return (
										<Task key={index} task={task} />
									);
								}
							})
						}
						{/*this.props.users.length === 0 &&
							<p>Click on '+' above to add a new user :)</p>
						*/}
					</tbody>
				</table>
			</div>
		)
	}
}

export default AllTasksList;