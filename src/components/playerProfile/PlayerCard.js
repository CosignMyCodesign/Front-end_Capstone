import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./PlayerCard.css";

export default class PlayerCard extends Component {
  render() {
    const playerSelection = this.props.players.map(m => m) || {};
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
          {/* Team: {targetedPlayer.currentTeam.abbreviation} */}
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
          Born in: {targetedPlayer.birthCity} {targetedPlayer.birthCountry}
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
                floated="right"
                // onClick=
              >
                Save Message
              </Button>
              <Button
                type="submit"
                color="blue"
                floated="left"
                as={Link}
                to="/"
              >
                Search for Another Player
              </Button>
              <Button
                type="submit"
                color="orange"
                floated="left"
                as={Link}
                to={`/viewsquad/${sessionStorage.getItem("credentials")}`}
              >
                View My Squad
              </Button>
            </div>
          </Form>
        </div>
      </section>
    );
  }
}
