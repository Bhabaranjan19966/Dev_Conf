import React, { Component, Fragment } from 'react';
import './App.css';
import axios from "axios";
import './css/login.css';;


class App extends Component {
  state = {
    users: [],
   
  };
  componentDidMount() {
   
    axios.get("http://localhost:3002/users").then(user => {
      this.setState({
        users: user.data
        
      });
    });
  }
  CreateNewUser(event) {
    event.preventDefault();
    const newUser = {
      name: this.state.newName,
      password: this.state.newPassword,
      profile: this.state.newProfile
    };
   
    console.log("new", newUser);
    axios
      .post("http://localhost:3002/users", newUser)
      .then(user => {
        console.log(user);
        this.props.history.push({
          pathname: '/home',
          state: {name : this.state.newName ,
                  profile:this.state.newProfile}
      });
        const userList = this.state.users;
        const newUserList = [...userList, user.data];
        this.setState({
          users: newUserList,
          newName: "",
          newPassword: "",
          newProfile:""
        });
      })
      .catch(err => console.log(err));
  }
  nameAdded(event) {
    event.preventDefault();
    this.setState({
      newName: event.target.value
    });
  }
  passwordAdded(event) {
    event.preventDefault();
    this.setState({
      newPassword: event.target.value
    });
  }
  profileAdded(event) {
    event.preventDefault();
    this.setState({
      newProfile: event.target.value
    })
  }
  render() {
    return (
      <Fragment>
      
         <div className="ui container"> 
        <div className="ui grid">
  <div className="eight wide column" > <form
                  className="ui form"
                  onSubmit={this.CreateNewUser.bind(this)}
                >
                  <div className="ui three column centered grid">
                    <div className="inline field">
                      <label>Username</label>
                      <div className="ui left icon input">
                        <input
                          type="text"
                          placeholder="email"
                          onChange={this.nameAdded.bind(this)}
                          value={this.state.newName || ""}
                        />
                        <i className="user icon" />
                      </div>
                    </div>
                  </div>
                  <div className="ui three column centered grid">
                    <div className="inline field">
                      <label>Profile Url</label>
                      <div className="ui left icon input">
                        <input
                          type="text"
                          placeholder="profile"
                          onChange={this.profileAdded.bind(this)}
                          value={this.state.newProfile || ""}
                        />
                        <i className="user icon" />
                      </div>
                    </div>
                  </div>

                  <div className="ui three column centered grid">
                    <div className="inline field">
                      <label>Password</label>
                      <div className="ui left icon input">
                        <input
                          type="password"
                          placeholder="password"
                          onChange={this.passwordAdded.bind(this)}
                          value={this.state.newPassword || ""}
                        />
                        <i className="lock icon" />
                      </div>
                    </div>
                  </div>

                  <div className="ui two column centered grid" >
                    <button className="ui primary button" type="submit"id="button" >
                      Login
                    </button>
                  </div>
                </form>
                </div>
                <div className="one wide column"><div className="ui vertical divider">Or</div></div>
  <div className="five wide column"><div className="middle aligned column">
                <div className="ui big button" id="btn">
                  <i className="signup icon" />
                  Sign Up
                </div>
              </div>
            </div>
           
          </div>
         
            </div>
      </Fragment>
     
    );
  }
}

export default App;
