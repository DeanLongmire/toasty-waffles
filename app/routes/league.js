import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class LeagueRoute extends Route {
  @service store;
  @service league;

  async model() {
  }
}
