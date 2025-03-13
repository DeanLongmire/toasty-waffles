import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class TeamsTeamRoute extends Route {
  @service store;

  async model(params) {
    return {
      team: await this.store.findRecord('team', params.team_id),
    };
  }
}
