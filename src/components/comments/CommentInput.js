import React, {Component} from 'react';

class CommentInput extends Component {
  constructor(props){
    super(props)
    this.state = {
        text: '',
      }
  }
  handleOnChange = event => {
      this.setState({
        text: event.target.value
      });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.addComment({text: this.state.text, logId: this.props.logId});
    this.setState({
      text: ''
    })
  }

  render(){
    return(
      <div>
        <h4> Add New Comment</h4>
        <form onSubmit={this.handleOnSubmit}>
          <p><label> Comment: </label></p>
          <input type='text-area' onChange={this.handleOnChange} value={this.state.text}/>
          <p><input type='submit'/></p>
        </form>
      </div>
    )
  }
}

export default CommentInput;
