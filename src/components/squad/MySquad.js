import React, { Component } from "react";
import { Container } from "semantic-ui-react";
// import { Link } from "react-router-dom";
import SquadCard from "./SquadCard";
import APIManager from "../../managers/APIManager";
import "./Squad.css";

export default class MySquad extends Component {
  state = {
    squads: [],
    players: []
  };

  componentDidMount() {
    console.log(APIManager)
    APIManager.allSquads("squads", sessionStorage.getItem("credentials"))
    .then(squads => {
      this.setState({ squads: squads });
    });
  }

  // Close to working properly. The player is removed from squad, but you get a bug and have to refreh the page before you can see the squad properly with that player removed.
  deleteSquadPlayer = id => {
    return APIManager.delete("squads", id)
    .then(squads => {
      console.log(squads)
      this.setState({ squads: squads});
    });
  };

  render() {
    // console.log(this.state.squads)
    return (
      <Container className="squadContainer">
        {this.state.squads.map(squad => {
          return (
            <SquadCard
              squad={squad}
              key={squad.id}
              deleteSquadPlayer={() => this.deleteSquadPlayer(squad.id)}
            />
          );
        })
        // <SquadCard squads={this.state.squads} players={this.state.players}/>
        /* <div className="squadContainer">
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
        </div> */
        }
      </Container>
    );
  }
}
