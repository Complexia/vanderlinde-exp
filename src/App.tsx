import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import InfoSection from './components/InfoSection';
import ParticipateSection from './components/ParticipateSection';
import { BrowserRouter, Route } from 'react-router-dom';
import Switch from 'react-bootstrap/esm/Switch';
import HomePage from './pages/HomePage';
import ShadowGalactic from './pages/ShadowGalactic';

function App() {
  return (
    <BrowserRouter>
        <Switch className="leftVerticalLine">

          <Route path="/" component={ HomePage } exact />
          <Route path="/ShadowGalactic" component={ ShadowGalactic } exact />
          

        </Switch>
      </BrowserRouter>
  );
}

export default App;
