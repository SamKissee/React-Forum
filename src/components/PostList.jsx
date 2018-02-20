import React from 'react';


function PostList(){
  return(
    <div>
      <hr/>
      {Object.keys(props.postList).map(function(postId) {
        var post = props.postList[postId];
        return <Post
          user={ticket.user}
          title={ticket.title}
          content={ticket.content}
          votes={ticket.votes}
          key={postId}
          postId={postId}
          />;
      })}
    </div>
  );
}


user: PropTypes.string.isRequired,
title: PropTypes.string.isRequired,
content: PropTypes.string,
votes: PropTypes.number.isRequired,
postId: PropTypes.string.isRequired

PostList.propTypes = {
  postList: PropTypes.object,
}

export default PostList;
