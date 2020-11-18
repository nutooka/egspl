import React from 'react';

import User from '../user/user';
import CommentForm from '../comment-form/comment-form';

const Comment = ({ handleComment, evaluationComment, readOnly, ...props }) => {
  return (
    <div className='Comment'>
      <User {...props} />
      { readOnly
        ? <div className='Comment__Message'>{evaluationComment}</div>
        : <CommentForm handleComment={handleComment} {...props}/> }
    </div>
  );
}

export default Comment;
