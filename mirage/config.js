import { discoverEmberDataModels } from 'ember-cli-mirage';
import { createServer } from 'miragejs';

export default function (config) {
  let finalConfig = {
    ...config,
    // Remove discoverEmberDataModels if you do not want ember-cli-mirage to auto discover the ember models
    models: {
      ...discoverEmberDataModels(config.store),
      ...config.models,
    },
    // uncomment to opt into ember-cli-mirage to auto discover ember serializers
    // serializers: applyEmberDataSerializers(config.serializers),
    routes,
  };

  console.log('Final Mirage config:', finalConfig);

  return createServer(finalConfig);
}

function routes() {
  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  this.passthrough('http://localhost:8080/**');

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  this.namespace = ''; // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    https://miragejs.com/docs/getting-started/overview/
  */

  this.get('/years', (schema) => {
    let years = schema.years.all().models;
    return {
      data: years.map((year) => {
        return {
          id: year.id,
          type: 'year',
          attributes: {
            startYear: year.startYear,
            endYear: year.endYear,
            week: year.week,
            champion: year.champion,
            loser: year.loser,
          },
        };
      }),
    };
  });

  this.get('/brackets/:id', (schema, request) => {
    let bracket = schema.brackets.find(request.params.id);
    return {
      data: {
        id: bracket.id,
        type: 'bracket',
        attributes: {
          winningTeam: bracket.winningTeam,
          winningTeamPoints: bracket.winningTeamPoints,
          winningTeamStarters: bracket.winningTeamStarters,
          winningTeamStarterPoints: bracket.winningTeamStarterPoints,
          runnerUpTeam: bracket.runnerUpTeam,
          runnerUpTeamPoints: bracket.runnerUpTeamPoints,
          runnerUpTeamStarters: bracket.runnerUpTeamStarters,
          runnerUpTeamStarterPoints: bracket.runnerUpTeamStarterPoints,
          type: bracket.type,
        },
      },
    };
  });

  this.get('/players/:id', (schema, request) => {
    let player = schema.players.find(request.params.id);
    return {
      data: {
        id: player.id,
        type: 'player',
        attributes: {
          firstName: player.first_name,
          lastName: player.last_name,
          birthDate: player.birth_date,
          status: player.status,
          yearsExp: player.years_exp,
          position: player.position,
          college: player.college,
          fullName: player.full_name,
          team: player.team,
          statsId: player.stats_id,
          image: player.image,
        },
      },
    };
  });

  this.get('/teams/:id', (schema, request) => {
    let team = schema.teams.find(request.params.id);
    return {
      data: {
        id: team.id,
        type: 'team',
        attributes: {
          teamName: team.teamName,
          avatar: team.avatar,
          players: team.players,
          rosterId: team.rosterId,
        },
      },
    };
  });

  this.get('/teams', (schema, request) => {
    let queryParams = request.queryParams;
    let teams = schema.teams.all().models;

    console.log(queryParams);

    if (queryParams.rosterId) {
      teams = teams.filter((team) => team.rosterId === queryParams.rosterId);
    }

    return {
      data: teams.map((team) => {
        return {
          id: team.id,
          type: 'team',
          attributes: {
            teamName: team.teamName,
            avatar: team.avatar,
            players: team.players,
            rosterId: team.rosterId,
          },
        };
      }),
    };
  });

  this.get('/leagues', (schema) => {
    let leagues = schema.leagues.all().models;
    return {
      data: leagues.map((league) => {
        return {
          id: league.id,
          type: 'league',
          attributes: {
            leagueName: league.leagueName,
            season: league.season,
            divisions: league.divisions.map((division) => {
              return {
                id: division.id,
                divisionName: division.divisionName,
                teams: division.teams.map((team) => {
                  return {
                    teamName: team.teamName,
                  };
                }),
              };
            }),
          },
        };
      }),
    };
  });

  this.get('/leagues/:id', (schema, request) => {
    let league = schema.leagues.find(request.params.id);
    return {
      data: {
        id: league.id,
        type: 'league',
        attributes: {
          leagueName: league.leagueName,
          season: league.season,
          divisions: league.divisions.map((division) => {
            return {
              id: division.id,
              divisionName: division.divisionName,
              teams: division.teams.map((team) => {
                return {
                  id: team.id,
                  teamName: team.teamName,
                  players: team.players,
                };
              }),
            };
          }),
        },
      },
    };
  });

  this.get('/leagues/:id/weeks/:week/leaders', (schema, request) => {
    let league = schema.leagues.find(request.params.id);
    let week = request.params.week;

    return {
      data: {
        id: '1234',
        type: 'weekLeaders',
        attributes: {
          qb: {
            player: '11604',
            points: 25,
          },
          rb: {
            player: '5844',
            points: 41,
          },
          wr: {
            player: '6938',
            points: 34,
          },
          te: {
            player: '11631',
            points: 31,
          },
          k: {
            player: '10862',
            points: 14,
          },
          def: {
            player: 'PHI',
            points: 20,
          },
          mostYards: {
            player: '11564',
            yards: 233,
          },
          mostTds: {
            player: '11655',
            tds: 3,
          },
          fewestYards: {
            player: 'SF',
            yards: 133,
          },
        },
      },
    };
  });

  // this.namespace = 'https://api.sleeper.app/v1/';

  // this.get(
  //   'https://api.sleeper.app/v1/user/998437145096478720/leagues/nfl/:year',
  //   (schema, request) => {
  //     console.log('Schema:', schema);
  //     console.log('Request:', request);
  //     return fetch(request.responseURL, {
  //       method: 'GET',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     });
  //   }
  // );

  this.passthrough('https://api.sleeper.app/v1/user/**');
}
