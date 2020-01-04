import './assets/scss/app.scss';
import $ from 'cash-dom';
import {
  getUserProfileTemplate,
  getTimelineTemplate,
  getNavbarTemplate,
  NavbarUserInput,
} from './components/index';
import { render } from './util/index';

export class App {
  constructor(githubService) {
    this.githubService = githubService;
  }

  initializeApp() {
    // render elements on the page
    render(getNavbarTemplate(), $('nav.navbar'));
    render(getTimelineTemplate(), $('#user-timeline'));
    render(getUserProfileTemplate(), $('#user-profile'));

    this.usernameInput = new NavbarUserInput($('#username-input'));

    // add event listeners
    $('.load-username').on('click', () => {
      if (!this.usernameInput.isValid) {
        return;
      }

      const userName = $('.username.input').val();
      this.githubService.getUserInfo(userName)
        .then((userInfo) => render(getUserProfileTemplate(userInfo), $('#user-profile')))
        .then(() => this.githubService.getUserEvents(userName))
        .then((userEvents) => {
          const filteredElements = userEvents.filter((event) => {
            switch (event.type) {
              case 'PullRequestEvent':
              case 'PullRequestReviewCommentEvent':
                return true;
              default:
                return false;
            }
          });
          render(getTimelineTemplate(filteredElements), $('#user-timeline'));
        })
        .catch((err) => {
          throw new Error(err);
        });
    });
  }
}
