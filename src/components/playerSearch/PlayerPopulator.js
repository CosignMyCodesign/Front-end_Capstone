import React, { Component } from "react";
import { Button, Divider } from "semantic-ui-react";
import { Link } from "react-router-dom";
import APIManager from "../../managers/APIManager";
import "./PlayerPopulator.css";

export default class PlayerPopulator extends Component {


  addSquadPlayer = evt => {
    evt.preventDefault()
    const squadMember = {
      users_id: parseInt(sessionStorage.getItem("credentials")),
      playerId: this.props.player.id
      }
      APIManager.add("squads", squadMember)
      // then i could do a .then and alert that the player has been added to squad
    }

  // componentDidMount() {
  // }

  render() {
    // need to figure out why the console log below doesnt work
    // console.log(this.props.player.currentTeam.abbreviation)
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
