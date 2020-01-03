import './assets/scss/app.scss';
import $ from 'cash-dom';


export class App {
  initializeApp() {
    $('.load-username').on('click', () => {
      const userName = $('.username.input').val();

      fetch(`https://api.github.com/users/${userName}`)
        .then((response) => {
          if (response.status !== 200) {
            throw new Error(`Looks like there was a problem. Status Code: ${response.status}`);
          }
          return response.json();
        })
        .then((body) => {
          this.profile = body;
          this.updateProfile();
        })
        .catch((err) => {
          throw new Error(err);
        });
    });
  }

  updateProfile() {
    $('#profile-name').text($('.username.input').val());
    $('#profile-image').attr('src', this.profile.avatar_url);
    $('#profile-url').attr('href', this.profile.html_url).text(this.profile.login);
    $('#profile-bio').text(this.profile.bio || '(no information)');
  }
}
