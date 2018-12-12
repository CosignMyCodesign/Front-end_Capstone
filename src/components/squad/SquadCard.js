import React, { Component } from "react";
import { Image, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
// import APIManager from "../../managers/APIManager";

export default class SquadCard extends Component {
  
  render() {
    // console.log(this.props.squadArr[0])
    // console.log(this.props.player)
    return (
      <div className="squadPlayer">
        <h3>
         {this.props.player.player.firstName}
        {/* {targetedPlayer.firstName} {targetedPlayer.lastName} */}
        </h3>
        {/* <p>{this.props.player.currentTeam.abbreviation}</p> */}

        <Image alt="headshot" src={this.props.player.player.officialImageSrc} />
        {/* <Image alt="headshot" src="https://cdn4.iconfinder.com/data/icons/basketball-3/500/Basketball_11-512.png" /> */}

        <Button.Group className="buttonGroup" size="mini">
          <Button
            className="button-link"
            color="blue"
            as={Link}
            to={'/playerprofile'}
            // to={`/playerprofile/${this.props.player.id}`}
          >
            View Profile
          </Button>
          <Button.Or />
          <Button
            className="button-remove"
            size="tiny"
            color="red"
            // onClick=
          >
            Remove from Squad
          </Button>
        </Button.Group>
      </div>
    );
  }
}
