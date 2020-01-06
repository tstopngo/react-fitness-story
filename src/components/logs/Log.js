import React, {Component} from 'react';

class Log extends Component {

  handleOnClick(){
    this.props.deleteLog(this.props.log.id);
  }

  render(){

    const {log} = this.props;

    return(
      <div>
        <li>
          <p> Workouts: {log.workouts} </p>
          <p> Time: {log.time} </p>
          <button onClick={() => this.handleOnClick()}>Delete</button>
        </li>
      </div>
    )

  }
}



export default Log;
