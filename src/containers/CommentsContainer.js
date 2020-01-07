import React, { Component } from 'react';
import Comments from '../components/comments/Comments'
import CommentInput from '../components/comments/CommentInput'
import {connect} from 'react-redux'


class CommentsContainer extends Component {
  render(){
    return(
      <div>
        <CommentInput addComment={this.props.addComment} />
        <Comments comments={this.props.comments} deleteComment={this.props.deleteComment}/>
      </div>
    )
  }
}

const mapStateToProps = ({comments}) => {return {comments}}

const mapDispatchToProps = dispatch => ({
  addComment:  comment =>  dispatch({type: 'ADD_COMMENT', comment}),
  deleteComment: id => dispatch({type: 'DELETE_COMMENT', id})
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentsContainer)
