import React, { Component } from 'react';
import './UsersTable.css';

class User extends Component {
	
	constructor(props){
		super(props);
		this.state = {
			user_clicked: false
		}
	}

	componentDidMount(){
		this.setState({user_clicked: this.props.selected_user_index === this.props.index})
	}

	componentWillReceiveProps(nextProps){
		this.setState({user_clicked: nextProps.selected_user_index === this.props.index})
	}

	render(){
		return(
			<tr onClick={(event) => { this.setState({user_clicked: true}, () => { this.props.selectUserIndex(this.props.index); }); }}>
				<td className={`row ${this.state.user_clicked ? 'clicked' : ''}`}>
					<div className="user">
						<p className="name-text">{this.props.user.name}</p>
					</div>
				</td>
			</tr>
		)
	}
}

export default User;