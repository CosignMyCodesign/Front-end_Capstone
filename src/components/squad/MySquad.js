import React, { Component } from "react";
import { Header, Container, Grid, Image, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default class MySquad extends Component {
  render() {
    return (
      <Container>
        <div className="squadContainer">
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
        </div>
      </Container>
    );
  }
}
