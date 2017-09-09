import React, { Component } from 'react';
import './UsersTable.css';

class User extends Component {
	
	constructor(props){
		super(props);
		this.state = {
			user_clicked: false
		}
	}

	componentWillReceiveProps(nextProps){
		//nextProps.selected_user_index === this.props.index ? this.setState({user_clicked: true}) : this.setState({user_clicked: false});
	}

	render(){
		return(
			<div 
				className={`user ${this.state.user_clicked ? 'clicked' : ''}`}	
			>
				<p>{this.props.task.detail}</p>
			</div>
		)
	}
}

export default User;