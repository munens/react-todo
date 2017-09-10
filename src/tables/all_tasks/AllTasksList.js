import React, { Component } from 'react';
import Task from './Task';
import mergeSortByDate from './util';
import './AllTasks.css';

class AllTasksList extends Component {
	constructor(props){
		super(props);
		this.state = {
		
		};
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
						{all_user_tasks.length > 0 && all_user_tasks.length < 3 &&
							all_user_tasks.map((task, index) => {
								if(task.name && task.detail){
									return (
										<Task key={index} task={task} />
									);
								}
								return (null);
							})
						}
						{all_user_tasks.length >= 3 &&
							mergeSortByDate(all_user_tasks).map((task, index) => {
								if(task.name && task.detail){
									console.log(mergeSortByDate(all_user_tasks))
									return (
										<Task key={index} task={task} />
									);
								}
								return (null);
							})
						}
						{all_user_tasks.length === 0 &&
							<tr className="no-row">
								<td colSpan={2}>
									<p className="no-row-msg">There are no tasks to show at thie time. Create one first :)</p>
								</td>
							</tr>
						}
					</tbody>
				</table>
			</div>
		)
	}
}

export default AllTasksList;