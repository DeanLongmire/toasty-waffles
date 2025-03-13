import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class TeamsController extends Controller {
  @action
  routeToTeam(team) {
    this.transitionToRoute('teams.team', team.id);
  }
}
