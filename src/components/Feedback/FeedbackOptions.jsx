import { nanoid } from 'nanoid';
import React from 'react';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <ul>
        {options.map(button => (
          <li key={nanoid()}>
            <button type="button" onClick={() => onLeaveFeedback(button)}>
              {button}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
