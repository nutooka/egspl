import React from 'react';

import Rating from '../rating/rating';

import locales from '../../locales/English.json';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      comment: '',
      score: 0
    };
  }

  handleName = (event) => {
    this.setState({ name: event.target.value });
  }

  handleComment = (event) => {
    this.setState({ comment: event.target.value });
  }

  handleClick = (score) => {
    this.setState({ score });
    console.log('score', score);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, comment, score } = this.state;
    const { evaluatorName, evaluatorImageUrl, handleComment } = this.props;
    const evaluation = {
      evaluation: {
        comments : [
          {
            evaluatorName: name || evaluatorName,
            evaluatorImageUrl: evaluatorImageUrl,
            evaluationRating: score,
            evaluationComment: comment || 'No comment added.'
          }
        ]
      }
    };

    handleComment(evaluation);
  }

  render() {
    const { name, comment, score } = this.state;

    return (
      <form className='CommentForm' onSubmit={this.handleSubmit}>
        <div className='CommentForm__Data'>
          <Rating
            size='large'
            score={score}
            editable
            handleClick={this.handleClick}
          />
          <input
            className='Data__Name'
            type='text'
            value={name}
            placeholder={locales.Evaluation.NamePlaceholder}
            onChange={this.handleName}
          />
          <textarea
            className='Data__Comment'
            placeholder={locales.Evaluation.CommentPlaceholder}
            value={comment}
            onChange={this.handleComment}
          />
        </div>

        <button className='CommentForm__Submit' type='submit'>{locales.Evaluation.Submit}</button>
      </form>
    );
  }
}
export default CommentForm;
