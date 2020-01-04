import { formatDate } from '../util/index';

const reviewCommentTemplate = (data) => `created <a href="${data.payload.comment.html_url}">comment</a> to`;

const eventAction = (data) => {
  switch (data.type) {
    case 'PullRequestEvent':
      return data.payload.action;
    case 'PullRequestReviewCommentEvent':
      return reviewCommentTemplate(data);
    default:
      return '';
  }
};

const timelineItemTemplate = (data) => `
<div class="timeline-item">
    <div class="timeline-marker"></div>
        <div class="timeline-content">
              <p class="heading">${formatDate(data.created_at)}</p>
              <div class="media">
                <div class="media-left">
                  <figure class="image is-32x32">
                    <img src="${data.actor.avatar_url}" alt="User profile image" />
                  </figure>
                </div>
                <div class="media-content">
                  <div class="content">
                    <p>
                      <a href="${data.actor.url}">${data.actor.login}</a>
                      ${eventAction(data)}
                      <a href="${data.payload.pull_request.html_url}">pull request</a>
                      <span class="repo-name">
                        <a href="https://github.com/${data.repo.name}">${data.repo.name}</a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
`;

export const getTimelineItemTemplate = (data) => timelineItemTemplate(data);
