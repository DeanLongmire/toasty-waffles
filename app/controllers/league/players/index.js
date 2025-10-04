import Controller from '@ember/controller';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class LeaguePlayersIndexController extends Controller {
  @service store;
  @tracked _highestScoringPlayer = null;

  get playerMap() {
    return this.model.playerMap;
  }

  get players() {
    let players = [];
    Object.values(this.playerMap).map(async (obj) => {
      players.push(await this.store.findRecord('player', obj.player));
    });
    return players;
  }

  get highestScoringPlayer() {
    if (this._highestScoringPlayer) {
      return this._highestScoringPlayer;
    }
    console.log('Calculating highest scoring player...');

    let maxPoints = 0;
    let highestScoringPlayer = null;
    Object.values(this.playerMap).map(async (obj) => {
      if (obj.points > maxPoints) {
        maxPoints = obj.points;
        highestScoringPlayer = obj.player;
        console.log(
          `Highest Scoring Player: ${highestScoringPlayer} with ${maxPoints} points`
        );
      }
    });

    return this.store.findRecord('player', highestScoringPlayer);
  }
}
