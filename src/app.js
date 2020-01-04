import './assets/scss/app.scss';
import $ from 'cash-dom';
import {
  getUserProfileTemplate,
  getTimelineTemplate,
  getNavbarTemplate,
} from './components/index';
import { render } from './util/index';

export class App {
  constructor(
    githubService,
  ) {
    this.githubService = githubService;
  }

  initializeApp() {
    // render elements on the page
    render(getNavbarTemplate(), $('nav.navbar'));
    render(getTimelineTemplate(), $('#user-timeline'));
    render(getUserProfileTemplate(), $('#user-profile'));

    // add event listeners
    $('.load-username').on('click', () => {
      const userName = $('.username.input').val();

      this.githubService.getUserInfo(userName)
        .then((body) => render(getUserProfileTemplate(body), $('#user-profile')))
        .catch((err) => {
          throw new Error(err);
        });
    });
  }
}
