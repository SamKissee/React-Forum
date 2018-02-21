export default (state = {}, action) => {
  let newState;
  switch (action.type) {
  case 'ADD_POST':
    const { user, title, content, votes, id } = action;
    newState = Object.assign({}, state, {
      [id]: {
        user: user,
        title: title,
        content: content,
        votes: votes,
        id: id
      }
    });
    return newState;
  case 'ADD_VOTE':
    let newVotes = state.votes + 1;
    newState = {
      votes: newVotes,
    };
    return newState;
  case 'REMOVE_VOTE':
    newVotes = state.votes - 1;
    newState = {
      votes: newVotes,
    };
    return newState;

  default:
    return state;
  }
};
