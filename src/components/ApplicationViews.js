import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import APIManager from "../managers/APIManager";
import PlayerCard from "../components/playerProfile/PlayerCard";
import Home from "./home/Home"
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
      console.log(this.state.players)
    return (
      <React.Fragment>
        <Route
          exact path="/"
          render={props => {
            return <Home players={this.state.players} {...props} />;
          }}
        />
        <Route
          path="/playerprofile/:playerId(\d+)"
          render={props => {
            return <PlayerCard players={this.state.players} {...props} />;
          }}
        />
      </React.Fragment>
    );
  }
}

export default ApplicationViews;
