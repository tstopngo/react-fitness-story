import React, { Component } from 'react';
import Logs from '../components/logs/Logs'
import LogInput from '../components/logs/LogInput'
import {connect} from 'react-redux'


class LogsContainer extends Component {
  render(){
    return(
      <div>
        <LogInput addLog={this.props.addLog} />
        <Logs logs={this.props.logs} deleteLog={this.props.deleteLog}/>
      </div>
    )
  }
}

const mapStateToProps = ({logs}) => {return {logs}}

const mapDispatchToProps = dispatch => ({
  addLog:  log =>  dispatch({type: 'ADD_LOG', log}),
  deleteLog: id => dispatch({type: 'DELETE_LOG,', id})
})

export default connect(mapStateToProps, mapDispatchToProps)(LogsContainer)
