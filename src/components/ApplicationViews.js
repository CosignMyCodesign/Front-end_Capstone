import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import APIManager from "../managers/APIManager";
import Home from "./home/Home"
import PlayerCard from "./playerProfile/PlayerCard"
// import Login from "./authentication/Login";
// import Register from "./authentication/Registration";
// import UserManager from "../managers/UserManager";

class ApplicationViews extends Component {

  state = {
    user: [],
    players: [],
    initialized: false
  };

  componentDidMount() {
    // Invokes function to get all of the players
    this.listAllPlayers()
    // From zacs login/registration
    // let usersLoading = UserManager.getAll().then(allUsers => {
    //   this.setState({
    //     users: allUsers
    //   });
    // });
  }

  // Don't need this yet, but will eventually I think (ask zac/ousama)
  //   Promise.all([usersLoading]).then(() => {
  //     this.setState({
  //       initialized: true
  //     });
  //   });
  // }

 
// Gets all of the players from the database
  listAllPlayers = () => {
    APIManager.getAll().then(players => {
      // console.log(players)
      this.setState({ players: players })})
  };
  

  render() {
    // if (this.state.initialized) {
    return (
      <React.Fragment>
        {/* fetching the players and displaying their first and last name to the DOM, this serves no purpose now, just wanted to make sure my fetchs were working */}
        <h1>Hello</h1>
        <div>
          <PlayerCard players={this.state.players}/>
        </div>
        <Route
          exact
          path="/home"
          render={props => {
            return <Home />;
          }}
        />
        {/* <Route
          exact
          path="/login"
          render={props => {
            return <Login {...props} users={this.state.users} />;
          }}
        />
        <Route
          exact
          path="/register"
          render={props => {
            return <Register {...props} users={this.state.users} />;
          }}
        /> */}
      </React.Fragment>
    );
        // } else {
        //   return (
        //     <React.Fragment>
        //       loading...
        //     </React.Fragment>
        //   )
        // }
  }
}

export default ApplicationViews;
