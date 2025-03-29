import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';

export default class runnerUpCalloutComponent extends Component {
  @service store;

  @tracked champion = this.args.champion.team;
  @tracked runnerUp = this.args.champion.matchup.runnerUpTeam.firstObject;

  get matchup() {
    return this.args.champion.matchup;
  }

  get mvp() {
    let highestScore = this.matchup.winningTeamStarterPoints.reduce(
      (max, num, index) => (num > max.value ? { value: num, index } : max),
      { value: -Infinity, index: -1 }
    );
    let player = this.store.findRecord(
      'player',
      this.matchup.winningTeamStarters[highestScore.index]
    );
    return {
      player: player,
      points: highestScore.value,
    };
  }

  get championAvatarUrl() {
    if (this.champion.avatar && this.champion.avatar.startsWith('https://')) {
      return this.champion.avatar;
    } else {
      return 'https://sleepercdn.com/avatars/' + this.champion.avatar;
    }
  }

  get runnerUpAvatarUrl() {
    if (this.runnerUp.avatar && this.runnerUp.avatar.startsWith('https://')) {
      return this.runnerUp.avatar;
    } else {
      return 'https://sleepercdn.com/avatars/' + this.runnerUp.avatar;
    }
  }
}
