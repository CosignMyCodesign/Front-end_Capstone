import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./PlayerCard.css";

export default class PlayerCard extends Component {
  render() {
    const playerSelection = this.props.players.map(m => m.player) || {};
    // console.log(playerSelection)

    const targetedPlayer =
      playerSelection.find(
        a => a.id === parseInt(this.props.match.params.playerId, 0)
      ) || {};

    return (
      <section>
        <div className="playerCard" key={targetedPlayer.id}>
          <h3>
            {targetedPlayer.firstName} {targetedPlayer.lastName}
          </h3>
          <br />
          <img alt="player" src={targetedPlayer.officialImageSrc} />
          <br />
          Team: {targetedPlayer.currentTeam.abbreviation}
          <br />
          Position: {targetedPlayer.primaryPosition}
          <br />
          Age: {targetedPlayer.age}
          <br />
          Height: {targetedPlayer.height}
          <br />
          Weight: {targetedPlayer.weight}
          <br />
          College: {targetedPlayer.college}
          <br />
          Born in: {targetedPlayer.birthCity}, {targetedPlayer.birthCountry}
        </div>
        <div className="form">
          <Form>
            <Form.Field>
              <label>Save a message about this player</label>
              <input />
            </Form.Field>
            <div className="buttonGroup">
              <Button
                type="submit"
                color="green"
                floated="left"
                // onClick=
              >
                Submit
              </Button>
              <Button
                type="submit"
                color="blue"
                floated="right"
                as={Link}
                to="/"
                // onClick=
              >
                Back
              </Button>
            </div>
          </Form>
        </div>
        {/* {this.props.player.map(member => {
          // console.log(player)
          return (
            <div className="playerCard" key={member.player.id}>
              Name: {member.player.firstName} {member.player.lastName}
              <br />
              <img alt="player" src={member.player.officialImageSrc}/>
              <br />
              Position: {member.player.primaryPosition}
              <br />
              Age: {member.player.age}
              <br />
              Height: {member.player.height}
              <br />
              Weight: {member.player.weight}
              <br />
            </div>
          );
        })} */}
      </section>
    );
  }
}
