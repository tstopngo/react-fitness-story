import React, { Component } from 'react';
import Log from '../components/logs/Log'
import Logs from '../components/logs/Logs'
import LogInput from '../components/logs/LogInput'
import Home from '../components/main/Home'
import { connect } from 'react-redux'
import { fetchLogs } from '../actions/fetchLogs'
import { addLog } from '../actions/addLog'
import { Route, Switch } from 'react-router-dom'


class LogsContainer extends Component {

  componentDidMount(){
    this.props.fetchLogs();
  }

  render(){
    return(
      <div  className='App-body'>
      <Switch>
        <Route exact path ='/' component={Home}/>
        <Route exact path='/logs/new' render={(...routerprops) => <LogInput addLog={this.props.addLog}/>}/>
        <Route exact path='/logs' render={(...routerprops) => <Logs logs={this.props.logs} deleteLog={this.props.deleteLog}/>} />
        <Route path='/logs/:id' render={(...routerprops) => <Log logs={this.props.logs} deleteLog={this.props.deleteLog}/>} />
      </Switch>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    logs: state.logs,
    loading: state.loading
    }
  }

const mapDispatchToProps = (dispatch) => ({
  addLog: (log) => dispatch(addLog(log)),
  deleteLog: id => dispatch({type: 'DELETE_LOG', id}),
  fetchLogs: () => dispatch(fetchLogs())
})

export default connect(mapStateToProps, mapDispatchToProps)(LogsContainer)
