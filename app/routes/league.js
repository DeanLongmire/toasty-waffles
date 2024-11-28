import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class LeagueRoute extends Route {
  @service league;

  async model() {
    return this.league.getLeague();
  }
}
