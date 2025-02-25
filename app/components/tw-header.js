import Component from '@glimmer/component';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class TwHeaderComponent extends Component {
  @service router;

  get seasons() {
    let seasons = [];
    try {
      this.args.years.forEach((year) => {
        let seasonRange = `${year.startYear.slice(-2)}-${year.endYear.slice(
          -2
        )}`;
        let yearId = year.id;
        let season = { seasonRange, yearId };
        seasons.push(season);
      });
    } catch (e) {
      console.log(e);
    }
    return seasons;
  }

  @action
  routeHeader(route) {
    this.router.transitionTo(route);
  }

  @action
  routeSeason(season) {
    this.router.transitionTo('seasons.season', season.seasonRange);
  }
}
