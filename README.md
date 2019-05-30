# Squad Spawn

Growing up, I spent countless hours researching my favorite athletes. It proved tedious to navigate between multiple websites and team pages/ rosters to find information about the player I was interested in. I created Spawn Squad to fill this void. With Spawn Squad a user can assemble a team of their favorite NBA players and easily navigate between player profiles, save notes about individual players, and also delete players from their squad if needed. It's quick, clean, and easy-to-use. My favorite thing about Squad Spawn is that it provides me endless room for improvement and added content/functionality in the future. It will be a one-stop website to view player information, statistics, videos, and news articles. Squad Spawn is a single-page responsive CRUD web application built in React.Js with Semantic UI React for styling and design. It utilizes a custom JSON database containing vast information about each player in the NBA. 

I built this application for my front end capstone project for Nashville Software School.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

To start, you'll need to download and install NPM. [Get it here.](https://www.npmjs.com/get-npm)

### Installing

Open your command line and type

```
git clone git@github.com:CosignMyCodesign/Front-end_Capstone.git
```

One more step for installing everything...

```
npm install
```


Now we need to start the server. Navigate to the api folder by typing

```
cd api
```

To start the server, type

```
json-server -w -p 5002 playerInfo.1.json
```

Open a second command line window and navigate to the same directory. To start the app, type

```
npm start
``` 

## Using the app

If you'd like to see an existing user's login, try logging in with username "Dillon" and password "Cowboys".

* Note that this version of Squad Spawn does not offer secure storage. Don't save anything sensitive to this database!

Now that you have the app installed and running, let's build your squad!

### Search for a player

Begin by typing a player's name. You'll notice each keystroke is searching the database of player's with that particular string of character's. After searching, you can either view the player's profile, or add them to your squad.

### Viewing Profile

You'll notice the player's basic information on their profile. However if the player has been added to your squad, you'll have the added feature of being able to save a note about that player, as well as edit it anytime.

In version 2.0, I want to incorporate statistics, recent game logs, recent videos, and recent articles into this player profile page with the option of being able to save videos and articles for each players on your squad.
### Viewing your Squad

When viewing your squad you will still have the same ability of being able to view that player's profile (with the added feature of saving a note specific to that player). You can also remove an player from your squad as well.

## Built With

* [React](https://reactjs.org/) - Web framework
* [NPM](https://www.npmjs.com/) - Dependency management
* [Semantic UI React](https://react.semantic-ui.com/) - Styling components

## Future versions

I plan to deploy Squad Spawn using Heroku.

In version 2.0 of Squad Spawn, I plan to implement
* Player statistics
* Recent game logs (specific to that player)
* Recent Youtube videos  (specific to that player) using Youtube's API
* Recent news articles  (specific to that player) using Google's API
* Secure login via Auth0
* Draggable player cards
