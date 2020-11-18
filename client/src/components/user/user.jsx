import React from 'react';

import Rating from '../rating/rating';

const User = ({ evaluatorImageUrl, evaluatorName, evaluationDate, evaluationRating }) => {
  return (

      <div className='User'>
        <div className='User__Image'>
          <img src={evaluatorImageUrl} alt={evaluatorName}/>
        </div>

        <div className='User__Name'>{evaluatorName}</div>

        <Rating
          score={evaluationRating}
          size='small'
        />

        <div className='User__Date'>{evaluationDate}</div>

      </div>

  );
}

export default User;
