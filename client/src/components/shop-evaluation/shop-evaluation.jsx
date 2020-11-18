import React from 'react';

import Comment from '../comment/comment';

import CONSTANTS from '../../common/Constants';

const { GUEST } = CONSTANTS;

const ShopEvaluation = ({ summaryRating, numberOfVotes, comments, handleComment }) => (
  <div className='ShopEvaluation'>
    {comments.map((comment, index) => <Comment key={index} {...comment} readOnly/>)}
    <Comment {...GUEST} handleComment={handleComment} readOnly={false}/>
  </div>
);

export default ShopEvaluation;
