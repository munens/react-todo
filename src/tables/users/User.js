import React, { Component } from 'react';
import './UsersTable.css';

class User extends Component {
	
	render(){
		return(
			<div className="user">
				<p>{this.props.user.name}</p>
			</div>
		)
	}
}

export default User;