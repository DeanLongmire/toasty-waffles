import Controller from '@ember/controller';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class LeagueController extends Controller {
  @service league;
  @service store;
}
