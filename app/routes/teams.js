import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class TeamsRoute extends Route {
  @service store;

  async model() {
    return {
      teams: this.store.peekAll('team'),
      players: this.store.findRecord('player', 1),
    };
  }
}
