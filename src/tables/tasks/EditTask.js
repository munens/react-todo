import React, { Component } from 'react';
import './TasksTable.css';

class EditTask extends Component {
	constructor(props){
		super(props)
		this.state = {
			detail: "",
			empty_detail: false
		};
		this.onEditUserClicked = this.onEditUserClicked.bind(this);
	}

	onEditUserClicked(){
		if(this.state.detail !== "") {
			this.props.editTask(this.props.index, this.state.detail); 
			this.setState({detail: "", input_on: false, empty_detail: false}); 
		} else {
			this.setState({empty_detail: true});
		}
	}

	componentDidMount(){
		this.setState({detail: this.props.task.detail});
	}

	render(){
		return(
			<div className="edit-task">
				<div className="edit-task-group">
					<input 
						className="input" 
						placeholder="e.g. Walk the dog this afternoon" 
						value={this.state.detail} 
						type="text" 
						onChange={(event) => { this.setState({detail: event.target.value}); }}
						onKeyPress={(event) => {
							const code = (event.keyCode ? event.keyCode : event.which);
							if(code === 13) { 
								this.onEditUserClicked();
							}
						}}
					/>
					<button 
						className="btn-new"
						onClick={(event) => { 
							event.preventDefault();
							this.onEditUserClicked();
						}}>Submit
					</button>
					<button 
						className="btn-cancel"
						onClick={(event) => { 
							event.preventDefault();
							this.props.onEditTaskClicked();
						}}>Cancel
					</button>
				</div>
				{this.state.empty_detail &&
					<p className="error-msg">You have not given a task</p>
				}
			</div>
		)
	}
}

export default EditTask;