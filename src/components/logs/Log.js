import React, {Component} from 'react';
import CommentsContainer from '../../containers/CommentsContainer'

class Log extends Component {

  handleOnClick() {
    this.props.deleteLog(this.props.log.id);
  }

  render(){

    const { log } = this.props;

    return(
      <div>
        <li>
          <p> Workouts: {log.workouts} <button onClick={() => this.handleOnClick()}> Remove </button> </p>
          <p> Time: {log.time} </p>
          <CommentsContainer log={log}/>
        </li>
      </div>
    )

  }
}

export default Log;
