import React, { Component } from 'react';
import UserTask from './UserTask';
import './UsersTasksTable.css';

class UsersTable extends Component {
	constructor(props){
		super(props);
		this.state = {
			selected_user_index: null
		}
	}

	render(){
		return (
			<div className="users-table-frame">
				<table className="users-table">
					<thead>
						<tr>
							<th>Users</th>
						</tr>
					</thead>
					<tbody>
						{this.props.users.length > 0 &&
							this.props.users.map((user, index) => {
								return (
									<tr key={index} >
										<td>
											<tr>{user.name}</tr>
										</td>
										<td >
											<UserTask
												tasks={user.tasks} 
											/>
										</td>
									</tr>
								);
							})
						}
						{/*this.props.users.length === 0 &&
							<p>Click on '+' above to add a new user :)</p>
						*/}
					</tbody>
				</table>
			</div>
		)
	}
}

export default UsersTable;