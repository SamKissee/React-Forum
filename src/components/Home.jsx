import React from 'react';
import PostList from './PostList';
import AddPost from './AddPost';
import { Switch, Route, withRouter } from 'react-router-dom';
import Moment from 'moment';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedPost: null
    };
  }

  componentDidMount() {

  }

  componentWillUnmount(){
  }


  render(){
    return (
      <div>
        <Switch>
          <Route exact path='/' render={()=><PostList postList={this.props.masterPostList} />} />
          <Route path='/addpost' render={()=><AddPost />} />
        </Switch>
      </div>
    );
  }
}

Home.propTypes = {
  masterPostList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    masterPostList: state
  };
};

export default withRouter(connect(mapStateToProps)(Home));
