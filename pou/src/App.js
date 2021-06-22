import React from 'react'
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Header1 from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { Container, Segment, Grid, List, Header } from 'semantic-ui-react'



const dashboardRoutes = [];

function App(props) {
  const { ...rest } = props;
  return (
    <BrowserRouter>
      <div className="grid-container">
        <main className="main">
          <Header1 
            color="blue"
            routes={dashboardRoutes}
            brand="POU"
            fixed
            changeColorOnScroll={{
                height: 400,
                color: "white",
            }}
            {...rest}
          />
          <Switch>
            <Route path='/' component={Home}/>
          </Switch>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
