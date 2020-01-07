import React, {Component} from 'react';

class Comment extends Component {

  handleOnClick() {
    this.props.deleteComment(this.props.comment.id);
  }

  render(){

    const { comment } = this.props;

    return(
      <div>
        <li>
          <p>Comment: {comment.text} <button onClick={() => this.handleOnClick()}> Remove </button></p>

        </li>
      </div>
    )

  }
}

export default Comment;
