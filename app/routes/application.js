import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ApplicationRoute extends Route {
  @service league;
  @service store;

  async model() {
    let years = await this.store.findAll('year');
    let league = await this.store.findRecord('league', this.league.id);
    this.parseLeague(league);
    this.parseYears(years);

    const yearsArray = [...years];
    const latestYear = yearsArray.sort((a, b) => {
      return parseInt(b.endYear) - parseInt(a.endYear);
    })[0];

    this.league.latestYear = latestYear;
    this.league.champion = latestYear.champion;
    this.league.runnerUp = latestYear.loser;
    this.league.week = latestYear.week;

    return {
      years: years,
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
