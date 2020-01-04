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

  filterUserEvents(events) {
    return events.filter((event) => {
      switch (event.type) {
        case 'PullRequestEvent':
        case 'PullRequestReviewCommentEvent':
          return true;
        default:
          return false;
      }
    });
  }

  getUserData() {
    const userName = $('.username.input').val();

    this.showUserData(false);
    this.showSpinner(true);

    this.githubService.getUserInfo(userName)
      .then((userInfo) => render(getUserProfileTemplate(userInfo), $('#user-profile')))
      .then(() => this.githubService.getUserEvents(userName))
      .then((userEvents) => {
        const filteredElements = this.filterUserEvents(userEvents);
        render(getTimelineTemplate(filteredElements), $('#user-timeline'));
      })
      .catch((err) => {
        throw new Error(err);
      })
      .finally(() => {
        this.showUserData(true);
        this.showSpinner(false);
      });
  }

  initializeApp() {
    // render elements on the page
    render(getNavbarTemplate(), $('nav.navbar'));

    // add elements variables
    this.usernameInput = new NavbarUserInput($('#username-input'));

    // add event listeners
    $('.load-username').on('click', () => {
      if (!this.usernameInput.isValid) {
        return;
      }
      // get user info and history
      this.getUserData();
    });
  }


  showUserData(value) {
    $('#user-profile').toggleClass('is-hidden', !value);
    $('#user-timeline').toggleClass('is-hidden', !value);
  }

  showSpinner(value) {
    $('#spinner').toggleClass('is-hidden', !value);
  }
}
