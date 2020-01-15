export const addLog = (data) => {
  return(dispatch) => {
    fetch('http://localhost:3000/logs', {
      headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
        method: 'POST',
        body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(log => dispatch({type: 'ADD_LOG', payload: log}))
  }
}
