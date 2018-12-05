import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import APIManager from "../managers/APIManager.js";

class ApplicationViews extends Component {

  state = {
    players: []
  };

// Gets all of the players from the database
  playerList = () => {
    APIManager.getAll().then(players => {
      // console.log(players)
      this.setState({ players: players })})
  };
  

  render() {
    // Invokes function to get all of the players
    this.playerList()
    return (
      <React.Fragment>
        <h1>Hello</h1>
        <section>
        {this.state.players.map(player=> {
          // console.log(player)
          return <div>{player.player.firstName} {player.player.lastName}</div>
        })}
        </section>
      </React.Fragment>
    );
  }
}

export default ApplicationViews;
