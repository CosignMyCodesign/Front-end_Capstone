import React, { Component } from "react";
import { Image, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import APIManager from "../../managers/APIManager";

export default class SquadCard extends Component {
 
 

  render() {
   
    return (
      <div className="squadPlayer">
        <h3>
         {this.props.squad.players.firstName} {this.props.squad.players.lastName}
        </h3>

        <Image alt="headshot" src={this.props.squad.players.officialImageSrc} />
        <br />
        <Button.Group className="buttonGroup" size="mini">
          <Button
            className="button-link"
            color="blue"
            as={Link}
            // to='playerprofile'
            to={`/playerprofile/${this.props.squad.players.id}`}
          >
            View Profile
          </Button>
          <Button.Or />
          <Button
            className="button-remove"
            size="tiny"
            color="red"
            onClick={this.props.deleteSquadPlayer}
          >
            Remove from Squad
          </Button>
        </Button.Group>
      </div>
    );
  }
}
