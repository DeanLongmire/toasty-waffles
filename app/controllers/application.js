import Controller from '@ember/controller';
import { service } from '@ember/service';

export default class ApplicationController extends Controller {
  @service store;

  get league() {
    return this.model.league;
  }

  constructor() {
    super(...arguments);
  }
}
