import React from 'react';
import './App.css';
import NavBar from './components/main/NavBar'
import LogsContainer from './containers/LogsContainer'




function App() {
  return (

    <div className="App">
      <h1>Welcome to Fitness Story!</h1>
      <p>Add in your daily workouts and track what you've done each day and add comments on your progress!</p>
      <NavBar />
        <body className='App-body'>
      <LogsContainer />
      </body>
    </div>

  );
}

export default App;
