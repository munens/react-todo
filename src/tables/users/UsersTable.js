import React, { Component } from 'react';
import User from './User';
import NewUser from './NewUser';

class UsersTable extends Component {
	constructor(props){
		super(props);
		this.state = {
			
		}
	}

	render(){
		return (
			<div className="users-table">
				<table>
					<thead>
						<tr>
							<th>Users</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<NewUser addUser={(name) => this.props.addUser({name: name, tasks: []}) } />
							</td>
						</tr>
						{this.props.users.length > 0 &&
							this.props.users.map((user, index) => {
								return (
									<tr key={index}>
										<td>
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
