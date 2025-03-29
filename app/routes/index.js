import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class IndexRoute extends Route {
  @service store;
  @service league;

  async model() {
    let team = await this.getChampionTeam();
    let matchup = await this.getChampionshipMatchup();
    return {
      champion: {
        team: team,
        matchup: matchup,
      },
    };
  }

  async getChampionTeam() {
    return await this.store.findRecord('team', this.league.latestYear.champion);
  }

  async getChampionshipMatchup() {
    let league = this.store.peekRecord('league', '1075584259777228800');
    let bracket = await league.championshipBracket;
    bracket.winningTeam = await this.store.query('team', {
      rosterId: bracket.winningTeam,
    });
    bracket.runnerUpTeam = await this.store.query('team', {
      rosterId: bracket.runnerUpTeam,
    });

    return bracket;
  }
}
