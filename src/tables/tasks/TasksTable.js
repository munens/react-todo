import React, { Component } from 'react';
import moment from 'moment';
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
							<th>Tasks</th>
						</tr>
					</thead>
					<tbody>
						{selected_user != null &&
							<tr className="new-task-row">
								<td>
									<NewTask addTask={(detail) => this.props.addTask({name: selected_user.name, detail: detail, completion: false, date: Date.now() }) } />
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
					</tbody>
				</table>
			</div>
		)
	}
}

export default TasksTable;