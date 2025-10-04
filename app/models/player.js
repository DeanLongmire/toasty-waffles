import Model, { attr } from '@ember-data/model';

export default class PlayerModel extends Model {
  @attr('string') firstName;
  @attr('string') lastName;
  @attr('string') birthDate;
  @attr('string') status;
  @attr('string') yearsExp;
  @attr('string') position;
  @attr('string') college;
  @attr('string') fullName;
  @attr('string') team;
  @attr('string') statsId;
  @attr('string') image;
}
