import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function Post(props){

  // function upVote() {
  //   console.log(props.votes);
  //   const { dispatch } = props;
  //   const action = {
  //     type: 'ADD_VOTE',
  //     user: props.user,
  //     title: props.title,
  //     content: props.content,
  //     votes: props.votes,
  //     id: props.id
  //   };
  //   dispatch(action);
  // }
  return(
    <div>
      <h3>{props.title} - Posting Time Here Later</h3>
      <p>{props.content}</p>
      <p>{props.user}</p>
      <p><span>  Downvote  </span>{props.votes}<span onClick={upVote}>  Upvote  </span></p>

      <hr/>

    </div>
  );
}


Post.propTypes = {
  user: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  votes: PropTypes.number.isRequired,
  postId: PropTypes.string.isRequired
};


export default connect()(Post);
