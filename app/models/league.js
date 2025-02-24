import Model from '@ember-data/model';
import { attr } from '@ember-data/model';

export default class LeagueModel extends Model {
  @attr('string') leagueName;
  @attr('[]') divisions;
}
