import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ApplicationRoute extends Route {
  @service league;
  @service store;

  async model() {
    let tmp = await this.store.findAll('year');
    this.league.latestYear = tmp.lastObject.startYear;
    return {
      years: tmp,
    };
  }
}
