import React, { Component } from "react";
import { Header, Icon } from "semantic-ui-react";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <Header className="header" as="h3" block={true} dividing={true} size="small" color="orange" textAlign="center">
        <Icon name="basketball ball"/>
        Keep up to date with your favorite NBA athletes and assemble your own
        custom squad!
      </Header>
    );
  }
}
