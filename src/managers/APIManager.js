const remoteURL = "http://localhost:5002"

// Alternative way of handling your APImanager
export default Object.create(null, {
  single: {
    value: function(resource, id) {
      return fetch(`${remoteURL}/${resource}/${id}`).then(e => e.json())
    }
  },
  all: {
    value: function(resource) {
      return fetch(`${remoteURL}/${resource}`).then(e => e.json())
    }
  },
  delete: {
    value: function(resource, id) {
      return fetch(`${remoteURL}/${resource}/${id}`, {
        method: "DELETE"
      })
        .then(e => e.json())
        .then(() => this.all(resource))
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
        .then(() => this.all(resource))
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
        .then(() => this.all(resource))
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
        .then(() => this.all(resource))
    }
  },
  getSearch: {
    value: function(resource, query) {
      return fetch(`${remoteURL}/${resource}?q=${query}`).then(e => e.json())
    }
  },
  searchNP: {
    value: function(username, password) {
      return fetch(
        `${remoteURL}/users?username=${username}&password=${password}`
      ).then(e => e.json())
    }
  },
  searchUsername: {
    value: function(username) {
      return fetch(`${remoteURL}/users?username=${username}`).then(e =>
        e.json()
      )
    }
  }
})


// My way handling the APIManager utilizing
// class APIManager {
//     constructor(route) {
//         this.route = route
//     }

//   get(id) {
//    return fetch(`${remoteURL}/${this.route}/${id}`).then(e => e.json())
//   }

//   getAll() {
//     return fetch(`${remoteURL}/${this.route}`).then(data => data.json())
//   }

//   delete(id) {
//     return fetch(`${remoteURL}/${this.route}/${id}`, {
//         method: "DELETE"
//       })
//         .then(e => e.json())
//         .then(() => fetch(`${remoteURL}/${this.route}`))
//         .then(e => e.json())
//   }

//   patch(payload, url) {
//     return fetch(`${url}`, {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(payload)
//     }).then(data => data.json())
//   }

//   post(payload) {
//     return fetch(`${remoteURL}/${this.route}/`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(payload)
//     }).then(data => data.json())
//   }

// }

// export default new APIManager("players")