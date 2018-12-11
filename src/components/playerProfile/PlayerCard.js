import React, { Component } from "react";
import "./PlayerCard.css"

export default class PlayerCard extends Component {
  render() {
    const playerSelection = this.props.players.map(m => m.player) || {}
    // console.log(playerSelection)

    const targetedPlayer =playerSelection.find(a =>  a.id === parseInt(this.props.match.params.playerId, 0)) || {}
    // console.log(this.props.players[0])
    // const playerObj = targetedPlayer.player
    console.log(targetedPlayer.id)
    // console.log(playerObj)
    return (
      <section>
        <div className="playerCard" key={targetedPlayer.id}>
              Name: {targetedPlayer.firstName} {targetedPlayer.lastName}
              <br />
              <img alt="player" src={targetedPlayer.officialImageSrc}/>
              <br />
              Position: {targetedPlayer.primaryPosition}
              <br />
              Age: {targetedPlayer.age}
              <br />
              Height: {targetedPlayer.height}
              <br />
              Weight: {targetedPlayer.weight}
              <br />
            </div>
        {/* {this.props.player.map(member => {
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
        })} */}
      </section>
    );
  }
}
