import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import InfoBox from './components/InfoBox';

function App() {
  return (
    <div className="App">
      <NavBar />
      
      <div className="App-header">
        
        <h1>vanderlinde</h1>
        <InfoBox />
        
      </div>
     
        
      
    </div>
  );
}

export default App;
