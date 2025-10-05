import Model, { attr } from '@ember-data/model';

export default class DivisionModel extends Model {
  @attr('string') name;
  @attr('') teams;
}
