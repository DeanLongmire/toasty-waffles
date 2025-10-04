import Controller from '@ember/controller';
import { service } from '@ember/service';

export default class ApplicationController extends Controller {
  @service store;
  @service league;

  get navbarOptions() {
    let years = [];
    let index = 0;
    this.model.years.forEach((year) => {
      years.push({
        label: year.yearRange,
        route: 'seasons.season',
        index: index++,
        param: year.yearRange,
      });
    });
    return [
      {
        label: 'Players',
        route: 'league.players',
        type: 'link',
        index: 0,
      },
      {
        label: 'Teams',
        route: 'teams',
        type: 'link',
        index: 1,
      },
      {
        label: 'League',
        route: 'league',
        type: 'link',
        index: 2,
      },
      {
        label: 'Seasons',
        route: 'seasons',
        type: 'dropdown',
        placeholder: this.league.latestYear.yearRange,
        index: 3,
        dropdownOptions: [...years],
      },
    ];
  }

  get league() {
    return this.model.league;
  }

  constructor() {
    super(...arguments);
  }
}
