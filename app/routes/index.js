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
    console.log(
      'Loading champion team with ID:',
      this.league.latestYear?.champion
    );

    // If latestYear is not set yet, use the champion from league service directly
    const championId = this.league.latestYear?.champion || this.league.champion;

    if (!championId) {
      console.warn('No champion ID found');
      return null;
    }

    return await this.store.findRecord('team', championId);
  }

  async getChampionshipMatchup() {
    let league = this.store.peekRecord('league', '1075584259777228800');
    let bracket = await league.championshipBracket;
    bracket.winningTeam = await this.store.findRecord(
      'team',
      this.league.champion
    );
    bracket.runnerUpTeam = await this.store.findRecord(
      'team',
      this.league.runnerUp
    );

    return bracket;
  }
}
