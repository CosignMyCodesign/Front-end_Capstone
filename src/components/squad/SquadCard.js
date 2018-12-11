import React, { Component } from "react";
import { Header, Container, Grid, Image, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default class SquadCard extends Component {
  render() {
    return (
      <div className="squadPlayer">
        <h3>
          {/* {this.props.player.firstName} {this.props.player.lastName}{" "} */}
          FirstName LastName
        </h3>
        {/* <p>{this.props.player.currentTeam.abbreviation}</p> */}

        {/* <Image alt="headshot" src={this.props.player.officialImageSrc} /> */}
        <Image alt="headshot" src="https://cdn4.iconfinder.com/data/icons/basketball-3/500/Basketball_11-512.png" />

        <Button.Group className="buttonGroup" size="mini">
          <Button
            className="button-link"
            color="blue"
            as={Link}
            to={"/playerprofile"}
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
