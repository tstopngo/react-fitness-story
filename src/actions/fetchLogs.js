export function fetchLogs(){
  return(dispatch) => {
    dispatch({type: 'LOADING_LOGS'})
    fetch('http://localhost:3000/api/v1/logs')
      .then(response => {return response.json()})
      .then(logs => dispatch({type: 'ADD_LOGS', logs: logs}))
  }
}
