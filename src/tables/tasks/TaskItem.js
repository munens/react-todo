import React, { Component } from 'react';
import Task from './Task';
import EditTask from './EditTask';
import deleteImg from './icons/if_Block_381636.png';
import completeImg from './icons/if_Complete_Symbol_381607.png';
import undoImg from './icons/if_063_Undo_183192.png';
import './TasksTable.css';

class TaskItem extends Component {

	constructor(props){
		super(props);
		this.state = {
			edit_on: false,
		};
		this.onEditTaskClicked = this.onEditTaskClicked.bind(this);
	}

	onEditTaskClicked() { this.setState({edit_on: this.state.edit_on ? false : true}); }

	render(){
		return(
			<div>
				{this.state.edit_on &&
					<EditTask
						editTask={(index, detail) => { this.onEditTaskClicked(); this.props.editTask(index, detail); }}
						index={this.props.index}
						task={this.props.task}
						onEditTaskClicked={this.onEditTaskClicked}
					/>
				}
				{!this.state.edit_on &&
					<Task
						onEditTaskClicked={this.onEditTaskClicked}
						uncompleteTask={this.props.uncompleteTask}
						completeTask={this.props.completeTask}
						deleteTask={this.props.deleteTask}
						index={this.props.index}
						task={this.props.task}
					/>
				}
			</div>
		)
	}
}

export default TaskItem;