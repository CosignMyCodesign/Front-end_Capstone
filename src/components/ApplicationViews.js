import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import APIManager from "../managers/APIManager";
import PlayerCard from "../components/playerProfile/PlayerCard";
import MySquad from "../components/squad/MySquad"
import Home from "./home/Home"
// import PlayerCard from "./playerProfile/PlayerCard"

class ApplicationViews extends Component {
  state = {
    users: [],
    players: [],
    squads: [],
    initialized: false
  };

  componentDidMount() {
    this.getAllPlayers();
    this.getAllUsers();
    this.getAllSquads()
  }

  // Check if credentials are in local storage
  isAuthenticated = () => sessionStorage.getItem("credentials") !== null;

  // Gets all of the players from the database
  getAllPlayers = () => {
    APIManager.allPlayers("players").then(players => {
      // console.log(players)
      this.setState({ players: players });
    });
  };

  getAllUsers = () => {
    APIManager.all("users").then(users => {
      // console.log(users)
      this.setState({ users: users });
    });
  }

  getAllSquads = () => {
    APIManager.all("squads").then(squads => {
      // console.log(squads)
      this.setState({ squads: squads});
    });
  }


  render() {
    // if (this.state.initialized) {
      // console.log(this.state.players)
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
        <Route
          path="/viewsquad/:squadId(\d+)"
          render={props => {
            return <MySquad players={this.state.players} {...props} />;
          }}
        />
      </React.Fragment>
    );
  }
}

export default ApplicationViews;
