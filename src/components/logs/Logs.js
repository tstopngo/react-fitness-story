import React, {Component} from 'react';
import Log from './Log'

class Logs extends Component {


  logList = () => {
    return this.props.logs.map(log =>
      <Log key={log.id} log={log} deleteLog={this.props.deleteLog}/>  
    )
  }

  render(){
    return(
      <div>

        <h1>Your Log Entries</h1>
          <ol>
            {this.logList()}
          </ol>
      </div>
    )
  }
}

export default Logs;
