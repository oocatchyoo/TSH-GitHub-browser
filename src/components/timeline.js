import { getTimelineItemTemplate } from './timeline-item';

const dummyTimelineItems = [
  // first entry
  {
    event: {
      type: 'PullRequestEvent',
    },
    payload: {
      action: 'closed',
      pull_request: {
        html_url: 'TheSoftwareHouse/Kakunin/pull/41',
        user: {
          html_url: 'https://github.com/sethii',
        },
      },
      comment: {
        html_url: '',
      },
    },
    created_at: 'Jan 21, 2016',
    actor: {
      avatar_url: 'https://avatars.githubusercontent.com/u/2310778?',
      login: 'sethii',
    },
    repo: {
      name: 'TheSoftwareHouse/Kakunin',
    },
  },
  // second entry
  {
    event: {
      type: 'PullRequestReviewCommentEvent',
    },
    payload: {
      action: 'closed',
      pull_request: {
        html_url: 'https://api.github.com/repos/TheSoftwareHouse/Kakunin/pulls/comments/176273897',
        user: {
          html_url: 'https://github.com/simonsipl',
        },
      },
      comment: {
        html_url: 'https://github.com/TheSoftwareHouse/Kakunin/pull/41#discussion_r176273897',
      },
    },
    created_at: 'Jan 19, 2016',
    actor: {
      avatar_url: 'https://avatars.githubusercontent.com/u/1208786?',
      login: 'gajdus',
    },
    repo: {
      name: 'TheSoftwareHouse/Kakunin',
    },
  },
  // third entry
  {
    event: {
      type: 'PullRequestEvent',
    },
    payload: {
      action: 'opened',
      pull_request: {
        html_url: 'https://github.com/TheSoftwareHouse/Kakunin/pull/41',
        user: {
          html_url: 'https://github.com/aherok',
        },
      },
      comment: {
        html_url: '',
      },
    },
    created_at: 'Jan 19, 2016',
    actor: {
      avatar_url: 'https://avatars.githubusercontent.com/u/2310778',
      login: 'sethii',
    },
    repo: {
      name: 'TheSoftwareHouse/Kakunin',
    },
  },
];

export const getTimelineTemplate = (data) => (
  data && data.length > 0
    ? (data).map((element) => getTimelineItemTemplate(element)).join('')
    : ''
);
