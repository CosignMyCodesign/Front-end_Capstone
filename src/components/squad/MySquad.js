import React, { Component } from "react";
import { Header, Container, Grid, Image } from "semantic-ui-react";

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
                <Image src="https://react.semantic-ui.com/images/wireframe/media-paragraph.png" />
              </Grid.Column>
              <Grid.Column>
                <Image src="https://react.semantic-ui.com/images/wireframe/media-paragraph.png" />
              </Grid.Column>
              <Grid.Column>
                <Image src="https://react.semantic-ui.com/images/wireframe/media-paragraph.png" />
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column>
                <Image src="https://react.semantic-ui.com/images/wireframe/media-paragraph.png" />
              </Grid.Column>
              <Grid.Column>
                <Image src="https://react.semantic-ui.com/images/wireframe/media-paragraph.png" />
              </Grid.Column>
              <Grid.Column>
                <Image src="https://react.semantic-ui.com/images/wireframe/media-paragraph.png" />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </Container>
    );
  }
}
