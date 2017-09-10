import React, { Component } from 'react';
import TaskItem from './TaskItem';
import NewTask from './NewTask';
import './TasksTable.css';

class TasksTable extends Component {
	constructor(props){
		super(props);
		this.state = {};
	}

	render(){
		const selected_user = this.props.selected_user;
		return (
			<div className="tasks-table-frame">
				<table className="tasks-table">
					<thead>
						<tr>
							<th className="table-header">Tasks</th>
						</tr>
					</thead>
					<tbody>
						{selected_user !== null &&
							<tr className="new-task-row">
								<td>
									<NewTask addTask={(detail) => this.props.addTask({name: selected_user.name, detail: detail, completion: false, date: Date.now() }) } />
								</td>
							</tr>
						}
						{selected_user === null &&
							<tr className="no-row">
								<td>
									<p className="no-row-msg">No tasks to show at this time. Click on a user first :)</p>
								</td>
							</tr>
						}
						{selected_user && selected_user.tasks && selected_user.tasks.length > 0 &&
							selected_user.tasks.map((task, index) => {
								return (
									<TaskItem
										key={index}
										uncompleteTask={this.props.uncompleteTask}
										completeTask={this.props.completeTask}
										editTask={this.props.editTask}
										deleteTask={this.props.deleteTask}
										index={index}
										task={task} 
									/>	
								);
							})
						}
						<tr style={ selected_user === null ? {height: 280} :  {height: 300 - 40*(selected_user.tasks.length)} }>
							<td className="empty-row">
								
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		)
	}
}

export default TasksTable;