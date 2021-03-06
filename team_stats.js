/*Recording a team's players and games with relevant getters. There are not setters because we do not want the arrays changed. The functions 
in the method add a player or a game to the existing arrays, _players and _games:*/

// Note destructuring in methods.

const team = {
  _players: [
    {
      firstName: 'Luis',
      lastName: 'Figo',
      age: 26
    },
    {
      firstName: 'Eric',
      lastName: 'Cantona',
      age: 34
    },
    {
      firstName: 'Mark',
      lastName: 'Viduka',
      age: 31
    }
  ],
  _games: [
    {
      opponent: 'Barcelona',
      teamPoints: 3,
      opponentPoints: 3
    },
    {
      opponent: 'PSG',
      teamPoints: 1,
      opponentPoints: 0
    },
    {
      opponent: 'Juventus',
      teamPoints: 4,
      opponentPoints: 2
    }
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(firstName, lastName, age) {
    let player = {
      firstName,
      lastName,
      age
    };
    this._players.push(player);
  },
  addGame(opponentName, teamPoints, opponentPoints) {
    let game = {
      opponent: opponentName,
      teamPoints,
      opponentPoints
    };
    this._games.push(game);
  }
}

// Add players to the existing array in 'team'
team.addPlayer('Hidetoshi', 'Nakata', 29);
team.addPlayer('Gabriel', 'Batistuta', 36);

// Add games to the existing array in 'team'
team.addGame('Dortmund', 1, 2);
team.addGame('LA Galaxy', 3, 1);

console.log(team._players);
console.log(team._games);

// The above can also be called using the getters:

console.log(team.players);
console.log(team.games);

/*Resulting printouts from the above console.logs:

[ { firstName: 'Luis', lastName: 'Figo', age: 26 },
  { firstName: 'Eric', lastName: 'Cantona', age: 34 },
  { firstName: 'Mark', lastName: 'Viduka', age: 31 },
  { firstName: 'Hidetoshi', lastName: 'Nakata', age: 29 },
  { firstName: 'Gabriel', lastName: 'Batistuta', age: 36 } ]
[ { opponent: 'Barcelona', teamPoints: 3, opponentPoints: 3 },
  { opponent: 'PSG', teamPoints: 1, opponentPoints: 0 },
  { opponent: 'Juventus', teamPoints: 4, opponentPoints: 2 },
  { opponent: 'Dortmund', teamPoints: 1, opponentPoints: 2 },
  { opponent: 'LA Galaxy', teamPoints: 3, opponentPoints: 1 } ]
  */
