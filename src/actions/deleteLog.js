const deleteLog = (data) => {
  return fetch('http://localhost:3000/api/v1/logs', {
    headers:{
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
      method: 'DELETE',
      body: JSON.stringify({log: data})
  })
    .then(response => response.json())
    .then(log => dispatch({type: 'DELETE LOG', log: log})
    )
}
}
