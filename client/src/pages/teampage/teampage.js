import React from 'react';
import { Card, Icon, Image, Grid, Segment, Header } from 'semantic-ui-react';

const TeamPage = () => (
  <>
    <br />
    <Header size='huge' textAlign='center' inverted={true}>
      <Header.Content>Meet The Team</Header.Content>
    </Header>
    <Grid centered={true} columns='5'>
      <Grid.Row>
        <Grid.Column>
          <Segment>
            <Card centered={true}>
              <Image src='https://i.postimg.cc/jSB7HGh6/biopic.jpg' wrapped ui={false} />
              <Card.Content>
                <Card.Header>Destiny Fleming </Card.Header>
                <Card.Meta>
                  <span className='date'>Joined in 2015</span>
                </Card.Meta>
                <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a>
                  <Icon name='user' />
                  22 Friends
                </a>
              </Card.Content>
            </Card>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>
            <Card centered={true}>
              <Image src='https://i.postimg.cc/jSB7HGh6/biopic.jpg' wrapped ui={false} />
              <Card.Content>
                <Card.Header>Erik Portillo </Card.Header>
                <Card.Meta>
                  <span className='date'>Joined in 2015</span>
                </Card.Meta>
                <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a>
                  <Icon name='user' />
                  22 Friends
                </a>
              </Card.Content>
            </Card>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>
            <Card centered={true}>
              <Image src='https://i.postimg.cc/jSB7HGh6/biopic.jpg' wrapped ui={false} />
              <Card.Content>
                <Card.Header>Charles Latrobe-Bateman </Card.Header>
                <Card.Meta>
                  <span className='date'>Joined in 2015</span>
                </Card.Meta>
                <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a>
                  <Icon name='user' />
                  22 Friends
                </a>
              </Card.Content>
            </Card>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>
            <Card centered={true}>
              <Image src='https://i.postimg.cc/jSB7HGh6/biopic.jpg' wrapped ui={false} />
              <Card.Content>
                <Card.Header>Steve Eliuth </Card.Header>
                <Card.Meta>
                  <span className='date'>Joined in 2015</span>
                </Card.Meta>
                <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a>
                  <Icon name='user' />
                  22 Friends
                </a>
              </Card.Content>
            </Card>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>
            <Card centered={true}>
              <Image src='https://i.postimg.cc/jSB7HGh6/biopic.jpg' wrapped ui={false} />
              <Card.Content>
                <Card.Header>Kurt Phillips </Card.Header>
                <Card.Meta>
                  <span className='date'>Not good at semantic-ui</span>
                </Card.Meta>
                <Card.Description>
                  FullStack Web-Developer that enjoys creating unique UX/UI interactions
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a>
                  <Icon name='user' />
                  22 Friends
                </a>
              </Card.Content>
            </Card>
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </>
);

export default TeamPage;
