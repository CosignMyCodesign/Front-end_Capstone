import React, { Component } from "react";
import { Button, Divider } from "semantic-ui-react";
import { Link } from "react-router-dom";
// import APIManager from "../../managers/APIManager";
import "./PlayerPopulator.css";

export default class PlayerPopulator extends Component {
  state = {
    users: [],
    players: {}
  };

  componentDidMount() {
    // Invokes function to get all of the players
    // this.listPlayer();
  }

  render() {
    // console.log(this.props.player);
    // need to figure out why the console log below doesnt work
    // console.log(this.props.player.currentTeam.abbreviation)
    return (
      <div className="populatorContainer">
        <div className="playerSelection">
          <div className="selectedPlayer">
            {/* will be passing in this.props.etc to get the value of what is clicked in the playersearch component */}
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
          </div>
        </div>
        <Divider />
      </div>
    );
  }
}
