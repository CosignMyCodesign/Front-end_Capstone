import React, { Component } from "react";
import { Header, Dropdown, Divider } from "semantic-ui-react";
import APIManager from "../../managers/APIManager";
import PlayerPopulator from "./PlayerPopulator"
import "./PlayerSearch.css"

// This is just an exmple from Semantic docs of how to populate your searches using the "options" attribute in the Dropdown below. I think I will need to map over the players' names and add them to the options
// import { languageOptions } from '../common'
// languageOptions = [ { key: 'Arabic', text: 'Arabic', value: 'Arabic' }, ...  ]


// write a method in API manager to get all players and loop over all players and return an array of objects that contain the layers full name.
export default class PlayerSearch extends Component {
  state={
    playerNames: [],
    player: []
  }

  componentDidMount() {
    APIManager.getPlayerNames("players").then(players => {
      this.setState({playerNames: players})
    })
  }
//  write a function that will be passed to onclick that will pass this.state.player
// handleFieldChange = (evt) => {
//   const stateToChange = {}
//   stateToChange[evt.target.id] = evt.target.value
//   this.setState(stateToChange)
// }

handleSelection = (e, {name, value}) => {
  
    this.setState({ player: value})
  }

  render() {
    console.log(this.state.playerNames)
    return (
      <div className="searchContainer">
        <div className="searchHeader">
          <Header size="medium">Begin by typing a player's name and selecting.</Header>
        </div>

        <div className="searchBox">
          <Dropdown
            className="icon"
            icon="search"
            selection
            floating
            labeled
            options={this.state.playerNames}
            // onChange={this.handleFieldChange}
            onChange={this.handleSelection}
            search
            text="Search Player"
          />
        </div>
        <Divider />
        {/* import player populator with a conditional that if there is something in state then show the component if not then show nothing/null */}
        <PlayerPopulator player={this.state.player} id={this.state.player.key}/>
      </div>
    );
  }
}
