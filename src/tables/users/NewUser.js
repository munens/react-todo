import React, { Component } from 'react';

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
					<div>
						<button onClick={(event) => { event.preventDefault(); this.setState({input_on: true}); }}>+</button>
					</div>
				}
				{this.state.input_on &&
					<div>
						<div>
							<input placeholder="what is your name? e.g. Bob" type="text" onKeyUp={(event) => { this.setState({name: event.target.value}); }} />
							<button 
								onClick={(event) => { 
									event.preventDefault();
									if(this.state.name !== "") {
										this.props.addUser(this.state.name); 
										this.setState({input_on: false, empty_name: false}); 
									} else {
										this.setState({empty_name: true});
									}
								}}>add
							</button>
						</div>
						{this.state.empty_name &&
							<p>You have not given a name</p>
						}
					</div>
				}
			</div>
		)
	}
}

export default NewUser;