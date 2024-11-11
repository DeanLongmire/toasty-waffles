import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ApplicationRoute extends Route {
  @service store;

  async model() {
    let tmp = await this.store.findAll('year');
    return {
      years: tmp,
    };
  }
}
