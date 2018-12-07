import React, { Component } from "react"
import Login from "./Login"
import Home from "../home/Home"

class IsAuth extends Component {
  activeUser() {
    return sessionStorage.getItem("credentials")
  }

  render() {
    console.log(this.activeUser())
    return <React.Fragment>
        {this.props.isAuthenticated() ? (
        <Home activeUser={this.activeUser} {...this.props} />
        ) : (
          <Login {...this.props} />
        )}
      </React.Fragment>
  }
}

export default IsAuth