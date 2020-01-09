import React, {Component} from 'react';
import Comment from './Comment'

class Comments extends Component{
  render(){

    const {comments, logId, deleteComment} = this.props;
    const associatedComments = comments.filter(comment => comment.logId === logId);
    const commentsList = associatedComments.map(comment =>
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
