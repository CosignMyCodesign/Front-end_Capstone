import React, { Component } from "react";
import { Header, Container, Grid, Image, Button } from "semantic-ui-react";

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
                <Button className="removePlayer" color="red">Remove from Squad</Button>
              </Grid.Column>
              <Grid.Column>
                <Image src="https://cdn4.iconfinder.com/data/icons/basketball-3/500/Basketball_11-512.png" />
                <Button className="removePlayer" color="red">Remove from Squad</Button>
              </Grid.Column>
              <Grid.Column>
                <Image src="https://cdn4.iconfinder.com/data/icons/basketball-3/500/Basketball_11-512.png" />
                <Button className="removePlayer" color="red">Remove from Squad</Button>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column>
                <Image src="https://cdn4.iconfinder.com/data/icons/basketball-3/500/Basketball_11-512.png" />
                <Button className="removePlayer" color="red">Remove from Squad</Button>
              </Grid.Column>
              <Grid.Column>
                <Image src="https://cdn4.iconfinder.com/data/icons/basketball-3/500/Basketball_11-512.png" />
                <Button className="removePlayer" color="red">Remove from Squad</Button>
              </Grid.Column>
              <Grid.Column>
                <Image src="https://cdn4.iconfinder.com/data/icons/basketball-3/500/Basketball_11-512.png" />
                <Button className="removePlayer" color="red">Remove from Squad</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </Container>
    );
  }
}
