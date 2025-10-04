import { createServer, Model } from 'miragejs';

export default function setupMirage() {
  return createServer({
    models: {
      year: Model,
      league: Model,
      team: Model,
      player: Model,
      bracket: Model,
    },

    seeds(server) {
      server.create('year', {
        id: '996305272014585856',
        startYear: '2023',
        endYear: '2024',
        week: 7,
        champion: '866543990391074816',
        loser: '998437145096478720',
      });

      server.create('year', {
        id: '1075584259777228800',
        startYear: '2024',
        endYear: '2025',
        week: 13,
        champion: '1001334659659190272',
        loser: '996645393918152704',
      });

      server.create('league', {
        id: '1075584259777228800',
        leagueName: 'Toasty Waffles',
        season: '2024',
      });
    },

    routes() {
      this.namespace = '';

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
              },
            };
          }),
        };
      });

      // Pass through any unhandled requests
      this.passthrough();
    },
  });
}
