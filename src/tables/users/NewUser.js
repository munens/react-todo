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
		this.onAddUserClcked = this.onAddUserClcked.bind(this);
	}

	onAddUserClcked(){ 
		if(this.state.name !== "") {
			this.props.addUser(this.state.name);
			this.setState({name: "", input_on: false, empty_name: false}); 
		} else {
			this.setState({empty_name: true});
		}
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
							<input 
								className={`input ${this.state.empty_name ? 'error' : ''}`} 
								placeholder="What is your name? e.g. Bob" 
								type="text" 
								onChange={(event) => { this.setState({name: event.target.value}); }}
								onKeyPress={(event) => {
									const code = (event.keyCode ? event.keyCode : event.which);
									if(code === 13) { 
										this.onAddUserClcked();
									}
								}}
							/>
							<button 
								className="btn-new"
								onClick={(event) => { 
									event.preventDefault();
									this.onAddUserClcked();
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