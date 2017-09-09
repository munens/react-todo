import React, { Component } from 'react';
import User from './User';
import NewUser from './NewUser';
import './UsersTable.css';

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
											<User
												index={index}
												selected_user_index={this.state.selected_user_index}
												selectUserIndex={(index) => {
													this.setState({selected_user_index: index});
													this.props.selectUserIndex(index);
												}}
												user={user} 
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
