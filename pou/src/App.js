import React, {useState} from 'react'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Switch, Route } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/aboutUs' exact component={AboutUs}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
