import Controller from '@ember/controller';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class ApplicationController extends Controller {
  @service store;
  @service league;

  get league() {
    return this.model.league;
  }

  constructor() {
    super(...arguments);
  }
}
