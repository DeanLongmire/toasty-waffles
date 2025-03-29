import Model from '@ember-data/model';
import { attr } from '@ember-data/model';

export default class LeagueModel extends Model {
  @attr('string') leagueName;
  @attr('string') season;
  @attr('[]') divisions;

  get championshipBracket() {
    return this.store.findRecord('bracket', this.id);
  }
}
