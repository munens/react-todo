import React, { Component } from 'react';
import UsersTable from './tables/users/UsersTable.js';
import TasksTable from './tables/tasks/TasksTable.js';
import UserTasksTable from './tables/user_tasks/UserTasksTable.js';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      users: [],
      selected_user_index: null,
      selected_user: {}
    }
  }

  render() {
    return (
      <div className="App">
        <div className="tables">
          <UsersTable
            addUser={(user) => { 
              let current_users = this.state.users;
              current_users.push(user);
              this.setState({...current_users}, () => { console.log(this.state.users) });
            }}
            selectUserIndex={(index) => {
              this.setState({selected_user: this.state.users[index], selected_user_index: index}, () => console.log(this.state));
            }}
            users={this.state.users}
          />
          <TasksTable
            selected_user_index={this.state.selected_user_index}
            addTask={(task) => {
              let current_users = this.state.users;
              let current_selected_user = this.state.selected_user;
              current_selected_user.tasks.push(task);
              current_users[this.state.selected_user_index] = current_selected_user
              this.setState({...current_users, ...current_selected_user }, () => console.log(this.state));
            }}
            tasks={this.state.selected_user.tasks}
          />
        </div>

        <div>
          {/*<UserTasksTable 
            users={this.state.users}
            
          />*/}
        </div>
        
        
      </div>
    );
  }
}

export default App;
