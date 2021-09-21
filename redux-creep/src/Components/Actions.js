import React from 'react';
import Rewind from './Rewind';
import Dislike from './Dislike';
import Like from './Like';
import Superlike from './Superlike';

const Actions = ({ person, modifySuperficialChoices }) => (
  <div id="actions">
    <Rewind userId={person.id} />
    <Dislike
      userId={person.id}
      modifySuperficialChoices={modifySuperficialChoices}
    />
    <Like
      userId={person.id}
      modifySuperficialChoices={modifySuperficialChoices}
    />
    <Superlike
      userId={person.id}
      modifySuperficialChoices={modifySuperficialChoices}
    />
  </div>
);

export default Actions;