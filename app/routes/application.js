import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ApplicationRoute extends Route {
  @service league;
  @service store;

  async model() {
    let years = await this.store.findAll('year');
    let league = await this.store.find('league', this.league.id);
    this.parseLeague(league);
    this.parseYears(years);
    this.league.latestYear = years.lastObject;
    this.league.champion = years.lastObject.champion;
    this.league.runnerUp = years.lastObject.loser;
    this.league.week = years.lastObject.week;
    return {
      years: years,
      league: league,
    };
  }

  async parseLeague(league) {
    await league.divisions.forEach((division) => {
      this.store.createRecord('division', {
        id: division.id,
        name: division.divisionName,
        teams: division.teams,
      });

      division.teams.forEach((team) => {
        this.store.findRecord('team', team.id);
      });
    });
  }

  parseYears(years) {
    years.forEach((year) => {
      year.yearRange = `${year.startYear.slice(-2)}-${year.endYear.slice(-2)}`;
    });
  }
}
