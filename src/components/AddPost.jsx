import React from 'react';
import { connect } from 'react-redux';
import { v4 } from 'uuid';

function AddPost(props){
  let _user = null;
  let _title = null;
  let _content = null;

  function handleNewPostSubmission(event) {
    const { dispatch } = props;
    event.preventDefault();
    const action = {
      type: 'ADD_POST',
      id: v4(),
      user: _user.value,
      title: _title.value,
      content: _content.value,
      votes: 0
    };
    dispatch(action);
    _user.value = '';
    _title.value = '';
    _content.value = '';
  }

  return (
    <div>
      <form onSubmit={handleNewPostSubmission}>
        <input
          type='text'
          id='user'
          placeholder='User Name'
          ref={(input) => {_user = input;}}/>
        <input
          type='text'
          id='title'
          placeholder='Give Your Post a Unique Title'
          ref={(input) => {_title = input;}}/>
        <textarea
          id='content'
          placeholder='Describe Your Content.'
          ref={(textarea) => {_content = textarea;}}/>
        <button type='submit'>Help!</button>
      </form>
    </div>
  );
}

export default connect()(AddPost);
