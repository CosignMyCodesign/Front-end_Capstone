import React, { Component } from "react";
import { Header, Dropdown, Divider } from "semantic-ui-react";
import APIManager from "../../managers/APIManager";
import PlayerPopulator from "./PlayerPopulator";
import "./PlayerSearch.css";

// This is just an example from Semantic docs of how to populate your searches using the "options" attribute in the Dropdown below. I think I will need to map over the players' names and add them to the options
// import { languageOptions } from '../common'
// languageOptions = [ { key: 'Arabic', text: 'Arabic', value: 'Arabic' }, ...  ]

// write a method in API manager to get all players and loop over all players and return an array of objects that contain the layers full name.
export default class PlayerSearch extends Component {
  state = {
    playerNames: [],
    player: {}
  };

  // This get all of my players first and last names and sets them as options in my dropdown
  componentDidMount() {
    APIManager.getPlayerNames("players").then(players => {
      this.setState({ playerNames: players });
    });
  }

  // added an ID into each option in the APIManager.getPlayerNames then we were able to get back the entire object of a single player. Then we could set the state of a single player so that I could use dot notation and get whatever data I needed.
  handleSelection = (e, { name, value }) => {
    // This eliminates the bug where if you tried to click outside of the dropdown selection options it would cause an error
    if (e.target.className === "search") {
      // Previously, if you clicked on the text (player name) of the option in the dropdown menu you would get an error because it was in a span tag (inside the div) with a className of text, so it wasn't letting you target the actual div where the target id was assigned. I made a new API method that would fetch by the player's first and last name (which was the text value in the span tag)
    } else if (e.target.className.includes("text")) {
      // console.log(e.target.innerText);
      let fullName = e.target.innerText;
      let firstName = fullName.split(" ")[0];
      let lastName = fullName.split(" ")[1];
      APIManager.singlePlayerByName("players", firstName, lastName).then(
        player => {
          // this sets the state of player with the value being the singular player object that was targeted in the dropdown option selection
          this.setState({ player: player[0] });
        }
      );
    } else {
      APIManager.singlePlayer("players", Number(e.target.id)).then(player => {
        console.log(player)
        this.setState({ player: player});
      });
    }
  };

  render() {
    // console.log(this.state.player);
    // Set up a conditional render. PlayerPopulator wont render unless a player is selected from the dropdown
    if (this.state.player.firstName) {
      return (
        <div className="searchContainer">
          <div className="searchHeader">
            <Header size="medium">
              Begin by typing a player's name and selecting.
            </Header>
          </div>

          <div className="searchBox">
            <Dropdown
              className="icon"
              icon="search"
              selection
              floating
              labeled
              options={this.state.playerNames}
              onChange={this.handleSelection}
              search
              text="Search Player"
            />
          </div>
          <Divider />
          <PlayerPopulator player={this.state.player}/>
        </div>
      );
    } else {
      return (
        <div className="searchContainer">
        <div className="searchHeader">
          <Header size="medium">
            Begin by typing a player's name and selecting.
          </Header>
        </div>

        <div className="searchBox">
          <Dropdown
            className="icon"
            icon="search"
            selection
            floating
            labeled
            options={this.state.playerNames}
            onChange={this.handleSelection}
            search
            text="Search Player"
          />
        </div>
        <Divider />
      </div>
    );
      }
  }
}
