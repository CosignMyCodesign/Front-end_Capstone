import React, { Component } from "react";
import { Button, Divider } from "semantic-ui-react";
import { Link } from "react-router-dom";
import APIManager from "../../managers/APIManager";
import "./PlayerPopulator.css";

export default class PlayerPopulator extends Component {
  state = {
    users: [],
    players: {},
    squads: [],
    users_id: "",
    player_id: "",
    message: ""
  };

  addSquadPlayer = evt => {
    evt.preventDefault()
    const squadMember = {
      users_id: "hi",
      player_id: "hello",
      message: "whats up"
      }
      APIManager.add("squads", squadMember).then(squadMember => {
        this.setState({ squads: squadMember });
      });
    }

    // add: {
    //   value: function(resource, newObject) {
    //     return fetch(`${remoteURL}/${resource}`, {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json"
    //       },
    //       body: JSON.stringify(newObject)
    //     }).then(e => e.json());
    //     // Had to comment this out because it was causing an issue when registering a new user, the value (which should be the userID) was coming back as NaN because it was bringing back all of the users in the database.
    //     // .then(() => this.all(resource))
    //   }
    // },

  // componentDidMount() {
  // }

  render() {
    // console.log(this.props.player);
    // need to figure out why the console log below doesnt work
    // console.log(this.props.player.currentTeam.abbreviation)
    // console.log(this.props.player.firstName)
    return (
      <div className="populatorContainer">
        <div className="playerSelection">
          <div className="selectedPlayer">
            <h3>
              {this.props.player.firstName} {this.props.player.lastName}{" "}
            </h3>
            {/* <p>{this.props.player.currentTeam.abbreviation}</p> */}

            <img alt="headshot" src={this.props.player.officialImageSrc} />
          </div>
          <br />
          <br />
          <div>
            <Button.Group className="buttonGroup">
              <Button
                className="button-link"
                color="blue"
                as={Link}
                to={`/playerprofile/${this.props.player.id}`}
              >
                View Profile
              </Button>
              <Button.Or />
              <Button
                className="button-add"
                color="green"
                onClick={this.addSquadPlayer}
              >
                Add to Squad
              </Button>
            </Button.Group>
          </div>
        </div>
        <Divider />
      </div>
    );
  }
}
