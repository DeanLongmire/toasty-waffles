import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ApplicationRoute extends Route {
  @service league;
  @service store;

  async model() {
    let tmp = await this.store.findAll('year');
    let league = await this.store.find('league', 1);
    this.parseLeague(league);
    this.league.latestYear = tmp.lastObject.startYear;
    return {
      years: tmp,
      league: league
    };
  }

  parseLeague(league) {
    league.divisions.forEach((division) => {
      this.store.createRecord('division', {
        id: division.id,
        name: division.divisionName,
        teams: division.teams
      });

      division.teams.forEach((team) => {
        this.store.createRecord('team', {
          id: team.id,
          teamName: team.teamName,
        });
      });
    });
  }
}
