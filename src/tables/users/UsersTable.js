import React, { Component } from 'react';
import User from './User';
import NewUser from './NewUser';
import './UsersTable.css';

class UsersTable extends Component {
	constructor(props){
		super(props);
		this.state = {
			
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
						<tr className="new-user-row">
							<td>
								<NewUser addUser={(name) => this.props.addUser({name: name, tasks: []}) } />
							</td>
						</tr>
						{this.props.users.length > 0 &&
							this.props.users.map((user, index) => {
								return (
									<tr key={index} >
										<td >
											<User user={user} />
										</td>
									</tr>
								);
							})
						}
					</tbody>
				</table>
			</div>
		)
	}
}

export default UsersTable;
