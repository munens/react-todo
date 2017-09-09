import React, { Component } from 'react';
import UsersTable from './tables/users/UsersTable.js';
import TasksTable from './tables/tasks/TasksTable.js';
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
        <UsersTable
          addUser={(user) => { 
            let current_users = this.state.users;
            current_users.push(user);
            this.setState({...current_users}, () => { console.log(this.state.users) });

          }}
          users={this.state.users}
        />
        <TasksTable
          addTask={(task) => { 
            let current_user_tasks = this.state.selected_user.tasks;
            current_user_tasks.push(task);
          //this.setState({...current_user_taks}, () => { console.log(this.state.users) });

        }}
        tasks={this.state.selected_user.tasks}
      />
      </div>
    );
  }
}

export default App;
