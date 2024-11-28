import Model from '@ember-data/model';
import { attr } from '@ember-data/model';

export default class TeamModel extends Model {
  @attr('string') teamName;
}
