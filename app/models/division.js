import Model from '@ember-data/model';
import { attr } from '@ember-data/model';

export default class DivisionModel extends Model {
  @attr('string') name;
  @attr('[]') teams;
}
