import React, { Component } from "react";
import { Menu, Icon, Button, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./NavBar.css";
// import APIManager from "../managers/APIManager";
export default class NavBar extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  logout = () => {
    sessionStorage.clear("credentials");
    this.props.setAuth();
  };

  render() {
    const { activeItem } = this.state;

    return (
      <Menu>
        <Image
          className="nav-logo"
          src="http://www.clipartsuggest.com/images/845/basketball-team-silhouette-clip-art-bQ8xKM-clipart.jpg"
        />

        <h1 className="title">Squad Spawn</h1>
        <Menu.Item
          name="Home"
          as={Link}
          to="/home"
          active={activeItem === "Home"}
          onClick={this.handleItemClick}
        >
          Home
        </Menu.Item>


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

        <Menu.Item
          name="Logout"
          as={Link}
          to="/"
          position="right"
          active={activeItem === "Logout"}
          onClick={this.logout}
        >
          Logout
        </Menu.Item>
      </Menu>
    );
  }
}
