import React from 'react';
import { Link } from 'react-router-dom'
import { Container, Segment, Grid, List, Header } from 'semantic-ui-react'

const Footer = () => {
    return (
      <Segment inverted vertical style={{ padding: '5em 0em', background: 'black', color: 'white' }}>
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row>
              <Grid.Column width={3}>
                <Header inverted as='h4' content='About' />
                <List link inverted>
                  <List.Item as='a'>Sitemap1111</List.Item>
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
    )
}
export default Footer
 