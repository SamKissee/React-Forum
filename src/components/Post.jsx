import React from 'react';
import PropTypes from 'prop-types';

function Post(props){
  return(
    <div>
      <h3>{props.title} - Posting Time Here Later</h3> | <p>{props.votes}</p>
      <p>{props.content}</p>
      <p>{props.user}</p>
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


export default Post;
