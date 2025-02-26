import Controller from '@ember/controller';
import { service } from '@ember/service';

export default class LeagueController extends Controller {
  @service league;
  @service store;
}
