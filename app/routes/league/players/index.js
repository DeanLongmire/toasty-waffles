import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class LeaguePlayersIndexRoute extends Route {
  @service league;

  async model() {
    let playerMap = await this.league.getWeekLeaders();

    return {
      playerMap,
    };
  }
}
