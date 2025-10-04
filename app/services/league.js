import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';

export default class LeagueService extends Service {
  @service store;
  @tracked latestYear = '';
  @tracked champion = '';
  @tracked runnerUp = '';
  @tracked week = null;

  id = '1075584259777228800';

  async getWeekLeaders() {
    let response = await fetch(
      `/leagues/${this.id}/weeks/${this.week}/leaders`
    );
    let data = await response.json();
    return data.data.attributes;
  }
}
