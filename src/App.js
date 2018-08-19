import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import Routes from "./routes/index";

const App = () => (
  <div className="ui container">  
   <Routes/>
  </div>
);
export default App;
