import React, { Component } from 'react';
import './UsersTable.css';

class NewUser extends Component {
	constructor(props){
		super(props)
		this.state = {
			input_on: false,
			name: "",
			empty_name: false
		};
	}
	render(){
		return(
			<div>
				{!this.state.input_on && 
					<div className="add">
						<button className="btn-add" onClick={(event) => { event.preventDefault(); this.setState({input_on: true}); }}>+</button>
						<p className="add-text">Click '+' to add a new user</p>
					</div>
				}
				{this.state.input_on &&
					<div className="new-user">
						<div className="new-user-group">
							<input className={`input ${this.state.empty_name ? 'error' : ''}`} placeholder="What is your name? e.g. Bob" type="text" onKeyUp={(event) => { this.setState({name: event.target.value}); }} />
							<button 
								className="btn-new"
								onClick={(event) => { 
									event.preventDefault();
									if(this.state.name !== "") {
										this.props.addUser(this.state.name); 
										this.setState({name: "", input_on: false, empty_name: false}); 
									} else {
										this.setState({empty_name: true});
									}
								}}>Add
							</button>
							<button 
								className="btn-cancel"
								onClick={(event) => { 
									event.preventDefault();
									this.setState({input_on: false}); 
								}}>Cancel
							</button>
						</div>
						{this.state.empty_name &&
							<p className="error-msg">You have not provided a user</p>
						}
					</div>
				}
			</div>
		)
	}
}

export default NewUser;