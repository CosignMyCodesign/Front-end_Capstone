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
  // WONT need a function on this page after I get the search functionality to work on the playerSearch component
  // listPlayer = () => {
  //   APIManager.singlePlayer("players", 9157).then(player => {
  //     console.log(player[0].player);
  //     this.setState({ players: player[0].player });
  //   });
  // };

  render() {
    // console.log(this.props.player);
    return (
      <div className="populatorContainer">
        <div className="playerSelection">
          <div className="selectedPlayer">
            {/* will be passing in this.props.etc to get the value of what is clicked in the playersearch component */}
            <h4> {this.props.player.firstName} {this.props.player.lastName} </h4>
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
