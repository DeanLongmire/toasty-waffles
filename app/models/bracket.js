import Model from '@ember-data/model';
import { attr } from '@ember-data/model';

export default class BracketModel extends Model {
  @attr('string') winningTeam;
  @attr('string') runnerUpTeam;
  @attr('string') type;
  @attr('number') winningTeamPoints;
  @attr('') winningTeamStarters;
  @attr('') winningTeamStarterPoints;
  @attr('number') runnerUpTeamPoints;
  @attr('') runnerUpTeamStarters;
  @attr('') runnerUpTeamStarterPoints;
}
