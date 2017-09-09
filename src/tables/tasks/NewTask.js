import React, { Component } from 'react';
import './TasksTable.css';

class NewTask extends Component {
	constructor(props){
		super(props)
		this.state = {
			input_on: false,
			task: "",
			empty_task: false
		};
	}
	render(){
		return(
			<div>
				{!this.state.input_on && 
					<div>
						<button className="btn-add" onClick={(event) => { event.preventDefault(); this.setState({input_on: true}); }}>+</button>
					</div>
				}
				{this.state.input_on &&
					<div className="new-task">
						<div className="new-task-group">
							<input className="task-input" placeholder="e.g. Walk the dog this afternoon" type="text" onKeyUp={(event) => { this.setState({task: event.target.value}); }} />
							<button 
								className="btn-new-task"
								onClick={(event) => { 
									event.preventDefault();
									if(this.state.task !== "") {
										this.props.addTask(this.state.task); 
										this.setState({task: "", input_on: false, empty_task: false}); 
									} else {
										this.setState({empty_task: true});
									}
								}}>add
							</button>
						</div>
						{this.state.empty_task &&
							<p className="error-msg">You have not given a task</p>
						}
					</div>
				}
			</div>
		)
	}
}

export default NewTask;