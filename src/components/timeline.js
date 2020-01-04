import { getTimelineItemTemplate } from './timeline-item';

export const getTimelineTemplate = (data) => {
  let timelineItems = '';

  if (data && data.length > 0) {
    timelineItems = (data).map((element) => getTimelineItemTemplate(element)).join('');
  }

  return `
      <h2 class="subtitle is-4">History</h2>
      <div class="timeline">
        ${timelineItems}
      </div>
    `;
};
