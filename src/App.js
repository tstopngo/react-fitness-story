import React from 'react';
import './App.css';
import {NavLink} from 'react-router-dom';

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

function App() {
  return (

    <div className="App">
      <h1>Welcome to Fitness Story!</h1>
        <NavLink to='/'  exact style={link}> Home </NavLink>
        <NavLink to='/logs/new'  exact style={link}> New Log </NavLink>
        <NavLink to='/logs'  exact style={link}> See All Logs</NavLink>
    </div>

  );
}

export default App;
