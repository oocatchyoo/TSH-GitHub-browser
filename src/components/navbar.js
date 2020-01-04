const navbarTemplate = `
    <div class="navbar-brand">
        <div class="navbar-item">
          <div class="field has-addons">
            <div class="control">
              <input id="username-input" class="input username" type="text" placeholder="enter github username">
            </div>
            <div class="control">
              <button class="button is-info load-username">
                Load
              </button>
            </div>
          </div>
        </div>
        <div class="navbar-item">
          <div class="loader is-hidden" id="spinner"></div>
        </div>
      </div>
`;

export const getNavbarTemplate = () => navbarTemplate;


export class NavbarUserInput {
  constructor(HTMLElement) {
    this.HTMLElement = HTMLElement;
    this.isValid = false;
    this.HTMLElement.on('keyup blur', () => this.validate());
  }

  validate() {
    const name = this.HTMLElement.val();
    const regexp = new RegExp('^[a-z0-9-_]+$');
    this.isValid = regexp.test(name);
    this.HTMLElement.toggleClass('error', !this.isValid);
  }
}
