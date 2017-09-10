import React, { Component } from 'react';
import './TasksTable.css';

class NewTask extends Component {
	constructor(props){
		super(props)
		this.state = {
			input_on: false,
			detail: "",
			empty_detail: false
		};
	}
	render(){
		return(
			<div>
				{!this.state.input_on && 
					<div className="add">
						<button className="btn-add" onClick={(event) => { event.preventDefault(); this.setState({input_on: true}); }}>+</button>
						<p className="add-text">Click '+' to add a new task</p>
					</div>
				}
				{this.state.input_on &&
					<div className="new-task">
						<div className="new-task-group">
							<input className={`input ${this.state.empty_detail ? 'error' : ''}`} placeholder="e.g. Walk the dog this afternoon" type="text" onChange={(event) => { this.setState({detail: event.target.value}); }} />
							<button 
								className="btn-new"
								onClick={(event) => { 
									event.preventDefault();
									if(this.state.detail !== "") {
										this.props.addTask(this.state.detail); 
										this.setState({detail: "", input_on: false, empty_detail: false}); 
									} else {
										this.setState({empty_detail: true});
									}
								}}>add
							</button>
							<button 
								className="btn-cancel"
								onClick={(event) => { 
									event.preventDefault();
									this.setState({input_on: false}); 
								}}>Cancel
							</button>
						</div>
						{this.state.empty_detail &&
							<p className="error-msg">You have not given a task</p>
						}
					</div>
				}
			</div>
		)
	}
}

export default NewTask;