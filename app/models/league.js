import Model, { attr } from '@ember-data/model';
import { service } from '@ember/service';

export default class LeagueModel extends Model {
  @service
  store;

  @attr('string') leagueName;
  @attr('string') season;
  @attr('') divisions;

  get championshipBracket() {
    return this.store.findRecord('bracket', this.id);
  }
}
