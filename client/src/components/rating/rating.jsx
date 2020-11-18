import React from 'react';
import classNames from 'classnames';

const Rating = ({ score, size, handleClick, editable }) => {
  let circles = [];
  let decimal = (score - Math.floor(score)).toFixed(2);
  score = Math.floor(score);

  const classFull = classNames(
    'Rating__Circle',
    'Rating__Circle--full',
    `Rating__Circle--size-${size}`,
    { [`Rating__Circle--editable`]: editable }
  );

  const classEmpty = classNames(
    'Rating__Circle',
    'Rating__Circle--empty',
    `Rating__Circle--size-${size}`,
    { [`Rating__Circle--editable`]: editable }
  );

  // Create full circles
  for (let i = 0; i < score; i++) {
    circles.push(
      <div
        key={i}
        className={classFull}
        onClick={() => handleClick ? handleClick(i) : ''}
      />);
  }

  // Create circles with less or more opacity based on the decimal value
  if (decimal > 0) {
    circles.push(
      <div
        key={score+1}
        className={classFull}
        style={{
          opacity: `${decimal}`
        }}
      />);
    score++;
  }

  // Create empty circles
  for (let i = score+1; i < 6; i++) {
    circles.push(
      <div
        key={i}
        className={classEmpty}
        onClick={() => handleClick ? handleClick(i) : ''}
      />);
  }

  return (
    <div className='Rating'>
      {circles}
    </div>
  );
}

export default Rating;
