import React from 'react';
import { Title } from 'Components';

export const WinnersList = ({ winners = [] }) => {
  return (
    <div>
      {winners.map(({ category, movie }) => (
        <div key={category}>
          <Title>{category}</Title>
          <Title type='h2'>{movie}</Title>
        </div>
      ))}
    </div>
  );
};
