import React, { Component } from 'react';
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
		return (
			<div className="tasks-table-frame">
				<table className="tasks-table">
					<thead>
						<tr>
							<th>Tasks</th>
						</tr>
					</thead>
					<tbody>
						<tr className="new-task-row">
							<td>
								<NewTask addTask={(name) => this.props.addTask({name: name, tasks: []}) } />
							</td>
						</tr>
						{this.props.tasks.length > 0 &&
							this.props.tasks.map((task, index) => {
								return (
									<tr key={index} >
										<td >
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