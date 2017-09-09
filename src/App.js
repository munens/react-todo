import React, { Component } from 'react';
import UsersTable from './tables/users/UsersTable.js';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      users: [],
      selected_user: {}
    }
  }

  addUser(user){
    
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          
        </div>
        <UsersTable
          addUser={(user) => { 
            let current_users = this.state.users;
            current_users.push(user);
            this.setState({...current_users}, () => { console.log(this.state.users) });

          }}
          users={this.state.users}
        />
      </div>
    );
  }
}

export default App;
