import React, { Component } from 'react';
import User from './User';
import NewUser from './NewUser';
import './UsersTable.css';

class UsersTable extends Component {
	constructor(props){
		super(props);
		this.state = {};
	}

	render(){
		const users = this.props.users;
		return (
			<div className="users-table-frame">
				<table className="users-table">
					<thead>
						<tr>
							<th className="table-header">Users</th>
						</tr>
					</thead>
					<tbody>
						<tr className="new-user-row">
							<td>
								<NewUser addUser={(name) => this.props.addUser({name: name, tasks: []}) } />
							</td>
						</tr>
						{users.length > 0 &&
							users.map((user, index) => {
								return (
									<User
										key={index} 
										index={index}
										selected_user_index={this.props.selected_user_index}
										selectUserIndex={this.props.selectUserIndex}
										user={user} 
									/>
								);
							})
						}
						<tr style={users.length > 0 ? {height: 300 - 30*(users.length)} : {height: 300}}>
							<td className="empty-row"></td>
						</tr>
					</tbody>
				</table>
			</div>
		)
	}
}

export default UsersTable;
