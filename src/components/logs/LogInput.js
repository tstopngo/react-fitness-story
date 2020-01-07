import React, {Component} from 'react';

class LogInput extends Component {
  constructor(props){
    super(props)
    this.state = {
        workouts: '',
        time: ''
      }
  }
  handleOnChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.addLog({workouts: this.state.workouts, time: this.state.time});
    this.setState({
      workouts: '',
      time: ''
    })
  }

  render(){
    return(
      <div>
        <h1> Add New Log</h1>
        <form onSubmit={this.handleOnSubmit}>
          <p><label>Workouts: </label></p>
          <input type='text' name='workouts' onChange={this.handleOnChange} value={this.state.workouts}/>
          <p><label> Time: </label></p>
          <input type='text' name='time' onChange={this.handleOnChange} value={this.state.time}/>
          <p><input type='submit'/></p>
        </form>
      </div>
    )
  }
}

export default LogInput;
