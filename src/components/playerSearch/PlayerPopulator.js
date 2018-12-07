import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import APIManager from "../../managers/APIManager";
import "./PlayerPopulator.css";

export default class PlayerPopulator extends Component {
  state = {
    users: [],
    players: {}
  };

  componentDidMount() {
    // Invokes function to get all of the players
    this.listPlayer();
  }

  listPlayer = () => {
    APIManager.singlePlayer("players", 9157).then(player => {
      console.log(player[0].player);
      this.setState({ players: player[0].player });
    });
  };

  render() {
    return (
      <div className="populatorContainer">
        <div className="playerSelection">
          <li>
            {this.state.players.firstName} {this.state.players.lastName}
            <img alt="kyrie irving" src={this.state.players.officialImageSrc} />
            <br />
            <br />
            <Button.Group className="buttonGroup">
              <Button
                className="button-link"
                color="blue"
                as={Link}
                to="/PlayerProfile"
              >
                View Profile
              </Button>
              <Button.Or />
              <Button
                className="button-add"
                color="green"
                // onClick=
              >
                Add to Squad
              </Button>
            </Button.Group>
          </li>
        </div>
      </div>
    );
  }
}
