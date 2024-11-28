import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class LeagueService extends Service {
  @tracked latestYear = '';

  getLeague(year) {
    let url;
    if (year) {
      url = `https://api.sleeper.app/v1/user/998437145096478720/leagues/nfl/${year}`;
    } else {
      url = `https://api.sleeper.app/v1/user/998437145096478720/leagues/nfl/${this.latestYear}`;
    }
    try {
      let response = fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log('Response:', data);
          return data;
        });
    } catch (error) {
      console.error('Error:', error);
    }
  }
}
