import React, {Component} from 'react';
import Comment from './Comment'

class Comments extends Component{
  render(){

    const {comments, deleteComment} = this.props;
    const commentsList = comments.map(comment =>
      <Comment key={comment.id} comment={comment} deleteComment={deleteComment}/>)

    return(
      <div>
        <ul>
          {commentsList}
        </ul>
      </div>
    )
  }
}

export default Comments;
