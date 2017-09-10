import React, { Component } from 'react';
import UsersTable from './tables/users/UsersTable.js';
import TasksTable from './tables/tasks/TasksTable.js';
import AllTasksList from './tables/all_tasks/AllTasksList.js';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      all_users_on: false,
      users: [],
      selected_user_index: null,
      selected_user: null
    };
  }

  render() {
    const users = this.state.users;
    const selected_user = this.state.selected_user;
    return (
      <div className="App">
        <div className="page-option">
          <button 
            onClick={(event) => {
              event.preventDefault();
              this.setState({all_users_on: this.state.all_users_on ? false : true}, () => console.log(this.state.selected_user_index));
            }}
            className="btn-page">
            {this.state.all_users_on ? 'Back' : 'All Tasks'}
          </button>
        </div>
        <div className="tables">
          {!this.state.all_users_on &&
            <div className="user-tasks">
              <UsersTable
                addUser={(user) => { 
                  users.push(user);
                  this.setState({users}, () => { console.log("addUser: ", this.state) });
                }}
                selectUserIndex={(index) => {
                  this.setState({selected_user: this.state.users[index], selected_user_index: index}, () => console.log(this.state));
                }}
                selected_user_index={this.state.selected_user_index}
                users={this.state.users}
              />
              <TasksTable
                selected_user={this.state.selected_user}
                addTask={(task) => {
                  selected_user.tasks.push(task);
                  this.setState({selected_user}, () => console.log("addTask: ", this.state));
                }}
                uncompleteTask={(index) => {
                  selected_user.tasks[index].completion = false;
                  this.setState({selected_user}, () => console.log("updateTask: ", this.state));
                }} 
                completeTask={(index) => {;
                  selected_user.tasks[index].completion = true;
                  this.setState({selected_user}, () => console.log("updateTask: ", this.state));
                }}
                editTask={(index, detail) => {
                  selected_user.tasks[index].detail = detail;
                  this.setState({selected_user}, () => console.log("updateTask: ", this.state));
                }}  
                deleteTask={(index) => {
                  selected_user.tasks.splice(index, 1);
                  this.setState({selected_user}, () => console.log("deleteTask: ", this.state));
                }}
              />
            </div>
          }
          {this.state.all_users_on &&
            <div className="all-tasks">
              <AllTasksList
                users={this.state.users}
              />
            </div>
          } 
        </div> 
      </div>
    );
  }
}

export default App;
