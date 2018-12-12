import React, { Component } from "react";
import { Image, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
// import APIManager from "../../managers/APIManager";

export default class SquadCard extends Component {
  
  render() {
   
    return (
      <div className="squadPlayer">
        <h3>
         {this.props.player.player.firstName} {this.props.player.player.lastName}
        </h3>

        <Image alt="headshot" src={this.props.player.player.officialImageSrc} />
        <br />
        <Button.Group className="buttonGroup" size="mini">
          <Button
            className="button-link"
            color="blue"
            as={Link}
            to={`/playerprofile/${this.props.player.player.id}`}
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
