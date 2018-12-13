const remoteURL = "http://localhost:5002";

// Alternative way of handling your APImanager
export default Object.create(null, {
  single: {
    value: function(resource, id) {
      return fetch(`${remoteURL}/${resource}/${id}`).then(e => e.json());
    }
  },
  //(this is used in PlayerSearch.js)
  singlePlayer: {
    value: function(resource, id) {
      return fetch(`${remoteURL}/${resource}/${id}`).then(e =>
      e.json()
      .then(player => player)
      );
    }
  },
  // Had to make this because of a target issue in the dropdown selection. (this is used in PlayerSearch.js)
  singlePlayerByName: {
    value: function(resource, firstname, lastname) {
      return fetch(`${remoteURL}/${resource}?firstName=${firstname}&lastName=${lastname}`).then(e =>
      e.json()
      .then(player => player)
      );
    }
  },
  // This is a method to get all of the player names for the dropdown options. I also added an id to be able to target that specific option by it's id and return the entire player object. This way I can get whatever data is needed from the singular player object(this is used in PlayerSearch.js)
  getPlayerNames: {
    value: function(resource) {
     return this.allPlayers(resource)
        .then(players => {
          return players.map(player => {
            return {
              id: player.id,
              key: player.id,
              text: `${player.firstName} ${player.lastName}`,
              value: `${player.firstName} ${player.lastName}`
            };
          });
        });
    }
  },
  // added in an operator "_ne" to filter out any players that aren't currently on a team. Also filtered out coaches by checking if there was a jerseyNumber assigned.
  allPlayers: {
    value: function(resource) {
      return fetch(`${remoteURL}/${resource}?currentTeam.abbreviation_ne=null&jerseyNumber_ne=null`).then(e => e.json());
    }
  },
  all: {
    value: function(resource) {
      return fetch(`${remoteURL}/${resource}`).then(e => e.json())
    }
  },
  allSquads: {
    value: function(resource, id) {
      return fetch(`${remoteURL}/${resource}?_expand=players&users_id=${id}`).then(e => e.json())
    }
  },
  checkSquads: {
    value: function(resource, playerId, id) {
      return fetch(`${remoteURL}/${resource}?playersId=${playerId}&users_id=${id}`).then(e => e.json())
      .then(player => player)
    }
  },
  delete: {
    value: function(resource, id) {
      return fetch(`${remoteURL}/${resource}/${id}`, {
        method: "DELETE"
      })
        .then(e => e.json())
        .then(() => this.allSquads(resource, sessionStorage.getItem("credentials")));
    }
  },
  add: {
    value: function(resource, newObject) {
      return fetch(`${remoteURL}/${resource}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newObject)
      }).then(e => e.json())
      // Had to comment this out because it was causing an issue when registering a new user, the value (which should be the userID) was coming back as NaN because it was bringing back all of the users in the database.
      // .then(() => this.all(resource))
    }
  },

  edit: {
    value: function(resource, id, newObject) {
      return fetch(`${remoteURL}/${resource}/${id}`, {
        method: "PUT",
        body: JSON.stringify(newObject),
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(e => e.json())
        .then(() => this.all(resource));
    }
  },
  //PUT means that you MUST send the entire entity details to a resource, whereas with PATCH, you only send the data that you wish to change aka the delta.
  patch: {
    value: function(resource, id, newObject) {
      return fetch(`${remoteURL}/${resource}/${id}`, {
        method: "PATCH",
        body: JSON.stringify(newObject),
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(e => e.json())
        .then(() => this.all(resource));
    }
  },
  getSearch: {
    value: function(resource, query) {
      return fetch(`${remoteURL}/${resource}?q=${query}`).then(e => e.json());
    }
  },
  searchNP: {
    value: function(username, password) {
      return fetch(
        `${remoteURL}/users?username=${username}&password=${password}`
      ).then(e => e.json());
    }
  },
  searchUsername: {
    value: function(username) {
      return fetch(`${remoteURL}/users?username=${username}`).then(e =>
        e.json()
      );
    }
  }
});

