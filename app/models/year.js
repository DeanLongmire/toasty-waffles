import Model, { attr } from '@ember-data/model';

export default class YearModel extends Model {
  @attr('string') startYear;
  @attr('string') endYear;
  @attr('number') week;
  @attr('string') yearRange;
  @attr('string') champion;
  @attr('string') loser;
}
