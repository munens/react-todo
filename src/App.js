import React, { Component } from 'react';
import UsersTable from './tables/users/UsersTable.js';
import TasksTable from './tables/tasks/TasksTable.js';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      users: [],
      selected_user_index: 0,
      selected_user: null
    }
  }

  render() {
    return (
      <div className="App">
        <UsersTable
          addUser={(user) => { 
            let current_users = this.state.users;
            current_users.push(user);
            this.setState({...current_users}, () => { console.log(this.state.users) });
          }}
          selectUserIndex={(index) => {
            this.setState({selected_user: this.state.users[index]}, () => console.log(this.state.selected_user.name));
          }}
          users={this.state.users}
        />
        
      </div>
    );
  }
}

export default App;
