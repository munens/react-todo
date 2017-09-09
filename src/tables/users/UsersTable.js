import React, { Component } from 'react';
import User from './User';

class UsersTable extends Component {
	constructor(props){
		super(props);
	}

	render(){
		return (
			<div className="users-table">
				<table>
					<thead>
						<th>Users</th>
					</thead>
					<tbody>
						{this.props.users.length > 0 &&
							this.props.users.map((user, index) => {
								return (
									<User 

									/>
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
