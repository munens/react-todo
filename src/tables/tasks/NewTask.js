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
							<input className="name-input" placeholder="e.g. Walk the dog this afternoon" type="text" onKeyUp={(event) => { this.setState({name: event.target.value}); }} />
							<button 
								className="btn-new-task"
								onClick={(event) => { 
									event.preventDefault();
									if(this.state.name !== "") {
										this.props.addUser(this.state.name); 
										this.setState({task: "", input_on: false, empty_task: false}); 
									} else {
										this.setState({empty_task: true});
									}
								}}>add
							</button>
						</div>
						{this.state.empty_name &&
							<p className="error-msg">You have not given a task</p>
						}
					</div>
				}
			</div>
		)
	}
}

export default NewTask;