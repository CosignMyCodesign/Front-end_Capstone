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
    player: {}
  }

  // This get all of my players first and last names and sets them as options in my dropdown
  componentDidMount() {
    APIManager.getPlayerNames("players").then(players => {
      this.setState({playerNames: players})
    })
  }

  //  First thing I did was add an ID into each option in the APIManager.getPlayerNames then we were able to get back the entire object of a single player. Then we could set the state of a single player so that I could use dot notation and get whatever data I needed.
  handleSelection = (e, {name, value}) => {

    if(e.target.className === "search"){

    } else if(e.target.className.includes("text")){

      let fullName = e.target.innerText;
      let firstName = fullName.split(" ")[0]
      let lastName = fullName.split(" ")[1]
      APIManager.singlePlayerByName("players", firstName, lastName)
      .then(player => {
        // console.log(player[0].player)
        this.setState({player: player[0].player})
      })
    } else {
      APIManager.singlePlayer("players", Number(e.target.id))
      .then(player => {
        // console.log(player[0].player)
        this.setState({player: player[0].player})
      })
    }
  }

  render() {
    // console.log(this.state.playerNames)
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
            onChange={this.handleSelection}
            search
            text="Search Player"
          />
        </div>
        <Divider />
        {/* import player populator with a conditional that if there is something in state then show the component if not then show nothing/null */}
        <PlayerPopulator player={this.state.player}/>
      </div>
    );
  }
}
