import React, { Component } from "react";
import { Header, Dropdown, Divider } from "semantic-ui-react";
import "./PlayerSearch.css";

// This is just an exmple from Semanic docs of how to populate your searches using the "options" attribute in the Dropdown below. I think I will need to map over the players' names and add them to the options
// import { languageOptions } from '../common'
// languageOptions = [ { key: 'Arabic', text: 'Arabic', value: 'Arabic' }, ...  ]

export default class PlayerSearch extends Component {
  render() {
    return (
      <div className="searchContainer">
        <div className="searchHeader">
          <Header size="medium">Begin by typing a player's name...</Header>
        </div>

        <div className="searchBox">
          <Dropdown
            button
            className="icon"
            floating
            labeled
            icon="search"
            // options={languageOptions}
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
