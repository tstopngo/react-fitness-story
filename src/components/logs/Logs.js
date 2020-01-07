import React, {Component} from 'react';
import Log from './Log'

class Logs extends Component {
  render(){
    const {logs, deleteLog} = this.props;
    const logList = logs.map(log =>{return(<Log key={log.id} log={log} deleteLog={deleteLog}/>)})

    return(
      <div>

        <h1>Your Log Entries</h1>
          <ol>
            {logList}
          </ol>
      </div>
    )
  }
}

export default Logs;
