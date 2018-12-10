import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import APIManager from "../managers/APIManager";
// import Home from "./home/Home"
// import PlayerCard from "./playerProfile/PlayerCard"

class ApplicationViews extends Component {
  state = {
    users: [],
    players: [],
    initialized: false
  };

  componentDidMount() {
    // Invokes function to get all of the players
    this.listAllPlayers();
  }

  // Check if credentials are in local storage
  isAuthenticated = () => sessionStorage.getItem("credentials") !== null;

  // Gets all of the players from the database
  listAllPlayers = () => {
    APIManager.all("players").then(players => {
      // console.log(players)
      this.setState({ players: players });
    });
  };

  render() {
    // if (this.state.initialized) {
    return (
      <React.Fragment>
        <div>{/* <Home/> */}</div>
        <div>{/* <PlayerCard players={this.state.players}/> */}</div>
        {/* <Route
          exact
          path="/home"
          render={props => {
            return <Home />;
          }}
        /> */}
      </React.Fragment>
    );
  }
}

export default ApplicationViews;
