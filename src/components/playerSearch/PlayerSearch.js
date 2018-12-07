import React, { Component } from "react";
import { Header, Dropdown, Divider } from "semantic-ui-react";
import APIManager from "../../managers/APIManager";
import "./PlayerSearch.css"

// This is just an exmple from Semantic docs of how to populate your searches using the "options" attribute in the Dropdown below. I think I will need to map over the players' names and add them to the options
// import { languageOptions } from '../common'
// languageOptions = [ { key: 'Arabic', text: 'Arabic', value: 'Arabic' }, ...  ]


// write a method in API manager to get all players and loop over all players and return an array of objects that contain the layers full name.
export default class PlayerSearch extends Component {
  state={
    playerNames: []
  }

  componentDidMount() {
    APIManager.getPlayerNames("players").then(players => {
      this.setState({playerNames: players})
    })
  }
 
  render() {
    return (
      <div className="searchContainer">
        <div className="searchHeader">
          <Header size="medium">Begin by typing a player's name and selecting.</Header>
        </div>

        <div className="searchBox">
          <Dropdown
            button
            className="icon"
            floating
            labeled
            icon="search"
            options={this.state.playerNames}
            // onClick=
            search
            text="Search Player"
          />
        </div>
        <Divider />
      </div>
    );
  }
}
