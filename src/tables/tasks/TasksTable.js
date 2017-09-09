import React, { Component } from 'react';
import moment from 'moment';
import Task from './Task';
import NewTask from './NewTask';
import './TasksTable.css';

class TasksTable extends Component {
	constructor(props){
		super(props);
		this.state = {
			
		}
	}

	render(){
		const selected_user = this.props.selected_user;
		return (
			<div className="tasks-table-frame">
				<table className="tasks-table">
					<thead>
						<tr>
							<th>Tasks</th>
						</tr>
					</thead>
					<tbody>
						{selected_user.tasks &&
							<tr className="new-task-row">
								<td>
									<NewTask addTask={(task) => this.props.addTask({name: selected_user.name, detail: task, completion: false, date: Date.now() }) } />
								</td>
							</tr>
						}
						{selected_user.tasks && selected_user.tasks.length > 0 &&
							selected_user.tasks.map((task, index) => {
								return (
									<tr key={index} >
										<td>
											<Task task={task} />
										</td>
									</tr>
								);
							})
						}
					</tbody>
				</table>
			</div>
		)
	}
}

export default TasksTable;