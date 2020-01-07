import React, { Component } from 'react';
import Log from '../components/logs/Log'
import Logs from '../components/logs/Logs'
import LogInput from '../components/logs/LogInput'
import {connect} from 'react-redux'

import { Route, Switch } from 'react-router-dom'


class LogsContainer extends Component {
  render(){
    return(
      <div>
      <Switch>
        <Route exact path='/logs/new' render={(...routerprops) => <LogInput addLog={this.props.addLog}/>}/>
        <Route exact path='/logs' render={(...routerprops) => <Logs logs={this.props.logs} deleteLog={this.props.deleteLog}/>} />
        <Route path='/logs/:id' render={(...routerprops) => <Log logs={this.props.logs} deleteLog={this.props.deleteLog}/>} />
      </Switch>
      </div>
    )
  }
}

const mapStateToProps = ({logs}) => {return {logs}}

const mapDispatchToProps = dispatch => ({
  addLog:  log =>  dispatch({type: 'ADD_LOG', log}),
  deleteLog: id => dispatch({type: 'DELETE_LOG', id})
})

export default connect(mapStateToProps, mapDispatchToProps)(LogsContainer)
