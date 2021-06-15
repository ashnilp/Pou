import React from 'react'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import AboutUs from './pages/About/AboutUs';
import Services from './pages/Services/Service';
import Gallery from './pages/Gallery/Gallery';
import ContactUs from './pages/ContactUs/ContactUs';
import Marketing from './pages/Services/Marketing/Marketing';
import Download from './components/Download/download'


function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <Navbar/>
        </header>
        <main className="main">
          <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/about-us" exact component={AboutUs}/>
              <Route path="/services" exact component={Services}/>
              <Route path="/gallery" exact component={Gallery}/>
              <Route path="/contact-us" exact component={ContactUs}/>
              <Route path="/marketing" exact component={Marketing}/>
              <Route path="/download" exact component={Download}/>
            </Switch>
        </main>
        <footer className="footer">
          All right reserved!
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
