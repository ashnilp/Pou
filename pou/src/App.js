import React, {useState} from 'react'
import './App.css';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import Headerr from './components/Header/Header'
import { Segment, Container, Grid, Header, List } from 'semantic-ui-react'

function App() {
  return (
    <BrowserRouter>
        <div className='grid-container'>
          <div className='main'>
            <Switch>
              {/*<Route path='/' exact component={home}/>
              <Route path='/about-us' exact component={AboutUs}/>
              <Route path='/services' exact component={Services}/>
              <Route path='/gallery' exact component={Gallery}/>
  <Route path='/contact-us' exact component={ContactUs}/> */}
            </Switch>
          </div>
          <div className='footer'>
            <Segment inverted vertical style={{ padding: '5em 0em'}}>
              <Container>
                <Grid divided inverted stackable>
                  <Grid.Row>
                    <Grid.Column width={3}>
                      <Header inverted as='h4' content='About' />
                      <List link inverted>
                        <List.Item as='a'>Sitemap</List.Item>
                        <List.Item as='a'>
                            <Link to='/contact-us'>
                              Contact Us
                            </Link>
                        </List.Item>
                        <List.Item as='a'>Religious Ceremonies</List.Item>
                        <List.Item as='a'>Gazebo Plans</List.Item>
                      </List>
                    </Grid.Column>
                    <Grid.Column width={3}>
                      <Header inverted as='h4' content='Services' />
                      <List link inverted>
                        <List.Item as='a'>Power Station</List.Item>
                        <List.Item as='a'>Team</List.Item>
                        <List.Item as='a'>Services</List.Item>
                        <List.Item as='a'>Gallery</List.Item>
                      </List>
                    </Grid.Column>
                    <Grid.Column width={7}>
                      <Header as='h4' inverted>
                        Management 
                      </Header>
                      <p>
                        The quick nrown fox jumps over the lazy dog
                      </p>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Container>
            </Segment>
          </div>
        </div>
    </BrowserRouter>
  );
}

export default App;
