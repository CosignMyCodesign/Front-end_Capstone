import React, { Component } from "react";
import { Header, Container, Grid, Image, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import SquadCard from "./SquadCard"
import "./Squad.css"

// Im going to need to map over the grid to put each grid column in after you "add to squad". I should only have one column hard coded below
export default class MySquad extends Component {
  render() {
    // const playerSelection = this.props.players.map(m => m.player) || {}
    // // console.log(playerSelection)

    // const targetedPlayer =playerSelection.find(a =>  a.id === parseInt(this.props.match.params.playerId, 0)) || {}
    
    return (
      <Container className="squadContainer">
        <SquadCard/>
        {/* <div className="squadContainer">
          <div className="squadHeader">
            <Header size="huge" textAlign="center" block={true} color="orange">
              My Squad
            </Header>
            <br />
            <br />
          </div>
          <Grid columns={3} divided>
            <Grid.Row>
              <Grid.Column>
                <Image src="https://cdn4.iconfinder.com/data/icons/basketball-3/500/Basketball_11-512.png" />
                <Button.Group className="buttonGroup" size="mini">
                  <Button
                    className="button-link"
                    color="blue"
                    as={Link}
                    to={"/playerprofile"}
                  >
                    View Profile
                  </Button>
                  <Button.Or />
                  <Button
                    className="button-remove"
                    size="tiny"
                    color="red"
                    // onClick=
                  >
                    Remove from Squad
                  </Button>
                </Button.Group>
              </Grid.Column>
              <Grid.Column>
                <Image src="https://cdn4.iconfinder.com/data/icons/basketball-3/500/Basketball_11-512.png" />
                <Button.Group className="buttonGroup" size="mini">
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
                    className="button-remove"
                    size="tiny"
                    color="red"
                    // onClick=
                  >
                    Remove from Squad
                  </Button>
                </Button.Group>
              </Grid.Column>
              <Grid.Column>
                <Image src="https://cdn4.iconfinder.com/data/icons/basketball-3/500/Basketball_11-512.png" />
                <Button.Group className="buttonGroup" size="mini">
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
                    className="button-remove"
                    size="tiny"
                    color="red"
                    // onClick=
                  >
                    Remove from Squad
                  </Button>
                </Button.Group>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column>
                <Image src="https://cdn4.iconfinder.com/data/icons/basketball-3/500/Basketball_11-512.png" />
                <Button.Group className="buttonGroup" size="mini">
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
                    className="button-remove"
                    size="tiny"
                    color="red"
                    // onClick=
                  >
                    Remove from Squad
                  </Button>
                </Button.Group>
              </Grid.Column>
              <Grid.Column>
                <Image src="https://cdn4.iconfinder.com/data/icons/basketball-3/500/Basketball_11-512.png" />
                <Button.Group className="buttonGroup" size="mini">
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
                    className="button-remove"
                    size="tiny"
                    color="red"
                    // onClick=
                  >
                    Remove from Squad
                  </Button>
                </Button.Group>
              </Grid.Column>
              <Grid.Column>
                <Image src="https://cdn4.iconfinder.com/data/icons/basketball-3/500/Basketball_11-512.png" />
                <Button.Group className="buttonGroup" size="mini">
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
                    className="button-remove"
                    size="tiny"
                    color="red"
                    // onClick=
                  >
                    Remove from Squad
                  </Button>
                </Button.Group>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div> */}
      </Container>
    );
  }
}
