import React from 'react';
import classNames from 'classnames';

import Rating from '../rating/rating';

import locales from '../../locales/English.json';

const ShopHeader = ({ name, imageUrl, shopType, summaryRating, numberOfVotes, hoverable }) => {
  const classes = classNames(
    'ShopHeader',
    { [`ShopHeader--hoverable`]: hoverable }
    );

  return (
    <div className={classes}>
      <div className='ShopHeader__Img'>
        <img src={imageUrl} alt={name}/>
      </div>

      <div className='ShopHeader__Basic'>
        <div className='Basic__Name'>{name}</div>
        <div className='Basic__Type'>{shopType}</div>
        <Rating
          score={summaryRating}
          size='medium'
        />
        <span className='Basic__Rating'>
          {locales.Data.Average}: {summaryRating} ({numberOfVotes} {locales.Data.Votes})
        </span>
      </div>

    </div>
  );
}

export default ShopHeader;
