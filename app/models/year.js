import Model from '@ember-data/model';
import { attr } from '@ember-data/model';

export default class YearModel extends Model {
  @attr('number') startYear;
  @attr('number') endYear;
  @attr('number') week;
  @attr('string') yearRange;
  @attr('string') champion;
  @attr('string') loser;
}
