import React, {Component} from 'react';
import { withRouter} from 'react-router-dom'

class LogInput extends Component {
  constructor(props){
    super(props)
    this.state = {
        workouts: '',
        time: '',
      }
  }
  handleOnChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.addLog(this.state)
    this.props.history.push('/logs')
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

export default withRouter(LogInput);
