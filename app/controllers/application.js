import Controller from '@ember/controller';
import { service } from '@ember/service';

export default class ApplicationController extends Controller {
  @service store;

  get navbarOptions() {
    let years = [];
    let index = 2;
    this.model.years.forEach((year) => {
      years.push({
        label: year.yearRange,
        route: 'seasons.season',
        type: 'link',
        index: index++,
        param: year.yearRange,
      });
    });
    return [
      {
        label: 'Teams',
        route: 'teams',
        type: 'link',
        index: 0,
      },
      {
        label: 'League',
        route: 'league',
        type: 'link',
        index: 1,
      },
      ...years,
    ];
  }

  get league() {
    return this.model.league;
  }

  constructor() {
    super(...arguments);
  }
}
