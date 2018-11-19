import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchPost} from '../actions';

class PostsShow extends Component {
    componentDidMount(){
      const{id}=  this.props.match.params;
        this.props.fetchPost();
    }
  render() {
    return (
      <div>
        posts Show!!
      </div>
    );
  };
}

function mapStateToProps({posts}, ownProps) {
return {posts:posts[ownProps.match.params.id]};
}

export default connect(null,{fetchPost})(PostsShow);