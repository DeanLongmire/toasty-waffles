import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class TeamsRoute extends Route {
  @service store;

  async model() {
  }
}
