const navbarTemplate = `
    <div class="navbar-brand">
        <div class="navbar-item">
          <div class="field has-addons">
            <div class="control">
              <input class="input username" type="text" placeholder="enter github username">
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
