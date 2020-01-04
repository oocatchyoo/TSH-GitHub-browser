const userProfileTemplate = (data) => `
    <h2 class="subtitle is-4">Profile</h2>
    <div class="profile">
      <div class="media">
        <div class="media-left">
          <figure class="media-left image is-64x64">
            <img src="${data.avatar_url}" id="profile-image" alt="User profile image">
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-5" id="profile-name">${data.name}</p>
          <p class="subtitle is-6"><a href="${data.html_url}" id="profile-url">${data.login}</a></p>
        </div>
      </div>
      <div class="content" id="profile-bio">
        <p>${data.bio}</p>
      </div>
    </div>
    `;

export const getUserProfileTemplate = (data) => userProfileTemplate(data);
