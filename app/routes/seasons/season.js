import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class SeasonsSeasonRoute extends Route {
  @service store;

  async model(params) {
    let allYears = this.store.peekAll('year');
    let year = allYears.find((year) => {
      return year.yearRange === params.season_id;
    });

    return {
      year: year,
      champion: await this.store.peekRecord('team', year.champion),
      loser: await this.store.peekRecord('team', year.loser),
    };
  }
}
