import Controller from '@ember/controller';

export default class ApplicationController extends Controller {
  get league() {
    return this.model.league;
  }
}
