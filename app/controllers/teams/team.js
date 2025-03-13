import Controller from '@ember/controller';
import { service } from '@ember/service';

export default class TeamsTeamController extends Controller {
  @service store;

  get players() {
    let players = this.model.team.players;
    let playerList = [];
    players.forEach((player) => {
      playerList.push(this.store.findRecord('player', player));
    });

    return playerList;
  }
}
