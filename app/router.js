import EmberRouter from '@ember/routing/router';
import config from 'toasty-waffles/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('seasons', function () {
    this.route('season', { path: '/:season_id' });
  });
  this.route('league');
  this.route('teams');
  this.route('teams.team', { path: 'teams/:team_id' });
});
