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
          users={this.state.users}
        />
      </div>
    );
  }
}

export default App;
