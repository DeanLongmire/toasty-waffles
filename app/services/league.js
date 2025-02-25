import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';

export default class LeagueService extends Service {
  @service store;
  @tracked latestYear = '';
}
