import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import APIManager from "../../managers/APIManager";
import "./PlayerCard.css";

export default class PlayerCard extends Component {
  state = {
    squads: false,
    message: ""
  };

  componentDidMount() {
    const playerSelection = this.props.players.map(m => m) || {};
    // console.log(playerSelection)

    const targetedPlayer =
      playerSelection.find(
        a => a.id === parseInt(this.props.match.params.playerId, 0)
      ) || {};

    APIManager.checkSquads(
      "squads",
      targetedPlayer.id,
      sessionStorage.getItem("credentials")
    ).then(squads => {
      if (squads.length !== 0) {
        this.setState({ squads: true, squadId: squads[0].id, message: squads[0].message});
      }
    });
  }

  addMessage = evt => {
    evt.preventDefault()
    const playerMessage = {
      message: this.state.message
      }
      APIManager.patch("squads", this.state.squadId, playerMessage )
    }

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  render() {
    const playerSelection = this.props.players.map(m => m) || {};
    // console.log(playerSelection)

    const targetedPlayer =
      playerSelection.find(
        a => a.id === parseInt(this.props.match.params.playerId, 0)
      ) || {};

    // console.log(targetedPlayer.id)

    if (this.state.squads === true) {
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
            <br />
            <h4>{this.state.message}</h4>
          </div>
          <div className="form">
            <Form>
              <Form.Field>
                <label>Save a message about this player</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={this.handleFieldChange}
                  value={this.state.message}
                  id="message"
                />
              </Form.Field>
              <div className="buttonGroup">
                <Button
                  type="submit"
                  color="green"
                  floated="right"
                  onClick={this.addMessage}
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
    } else {
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
          <Button type="submit" color="blue" floated="left" as={Link} to="/">
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
        </section>
      );
    }
  }
}
