import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types';


function PostList(props){
  return(
    <div>
      <hr/>
      {Object.keys(props.postList).map(function(postId) {
        var post = props.postList[postId];
        return <Post
          user={post.user}
          title={post.title}
          content={post.content}
          votes={post.votes}
          key={postId}
          postId={postId}/>;
      })}
    </div>
  );
}



PostList.propTypes = {
  postList: PropTypes.object,
};

export default PostList;
