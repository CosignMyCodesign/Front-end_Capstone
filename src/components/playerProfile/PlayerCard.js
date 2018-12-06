import React, { Component } from "react";
import "./PlayerCard.css"

export default class PlayerCard extends Component {
  render() {
    return (
      <section>
        {this.props.players.map(member => {
          // console.log(player)
          return (
            <div className="playerCard" key={member.player.id}>
              Name: {member.player.firstName} {member.player.lastName}
              <br />
              <img alt="player" src={member.player.officialImageSrc}/>
              <br />
              Position: {member.player.primaryPosition}
              <br />
              Age: {member.player.age}
              <br />
              Height: {member.player.height}
              <br />
              Weight: {member.player.weight}
              <br />
            </div>
          );
        })}
      </section>
    );
  }
}
