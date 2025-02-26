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
            champion: year.champion,
            loser: year.loser,
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
          divisions: league.divisions.map((division) => {
            return {
              id: division.id,
              divisionName: division.divisionName,
              teams: division.teams.map((team) => {
                console.log(team.id)
                return {
                  id: team.id,
                  teamName: team.teamName,
                };
              }),
            };
          }),
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
