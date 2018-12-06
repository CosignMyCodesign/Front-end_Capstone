import React, { Component } from "react";
import { Menu, Icon, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./NavBar.css";
export default class MenuExampleBasic extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu>
        <Menu.Item
          name="Home"
          as={Link}
          to="/home"
          active={activeItem === "Home"}
          onClick={this.handleItemClick}
        >
          Home
        </Menu.Item>

        <h1 className="header">Squad Spawn</h1>

        <Menu.Item
          name="View My Squad"
          as={Link}
          to="/viewsquad"
          position="right"
          active={activeItem === "View My Squad"}
          onClick={this.handleItemClick}
        >
          View My Squad
        </Menu.Item>
      </Menu>
    );
  }
}
