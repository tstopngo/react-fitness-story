import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import Logs from '../components/logs/Logs'


class LogsContainer extends Component {
  render(){
    return(
      <div>
        <LogsInput />
        <Logs />
      </div>
    )
  }
}

export default LogsContainer
