import React from 'react';
import { Segment, Container, Divider, Grid, Header, Icon, Image, Button } from 'semantic-ui-react';
import './Dashboard.css';
import { Link } from 'react-router-dom';


const Dashboard = () => (
  <Container>
    <Header as='h1' icon inverted textAlign='center' className='header'>
      <Icon name='globe' />
      Language Learning App
    </Header>
    <Divider />
    <Grid relaxed>
      <Grid.Row >
        <Grid.Column width={5} className='dash-container'>
          <Link to='translate'>
            <Button animated circular>
              <Button.Content visible>
                <Image src='https://us.123rf.com/450wm/cienpies/cienpies1910/cienpies191000213/130889436-chat-bubbles-with-different-language-words-concept-illustration-for-translation-idea-or-internationa.jpg?ver=6' size='massive' circular/>
              </Button.Content>
              <Button.Content hidden>
                <Icon name='book' />
                Translate
              </Button.Content>
            </Button>
          </Link>
        </Grid.Column>
        <Grid.Column width={5} className='dash-container'>
          <Link to='game'>
            <Button animated circular>
              <Button.Content visible>
                <Image src='https://clipartstation.com/wp-content/uploads/2018/09/computer-game-clipart-8.jpg' size='massive' circular />
              </Button.Content>
              <Button.Content hidden>
                <Icon name='play' />
                Play
              </Button.Content>
            </Button>
          </Link>          
        </Grid.Column>
        <Grid.Column width={5} className='dash-container'>
          <Link to='settings'>
            <Button animated circular>
              <Button.Content visible>
                <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS10pF6Wa2KgcNPeCU6OXYkOSd3-87XJUM_AA&usqp=CAU' size='massive' circular />
              </Button.Content>
              <Button.Content hidden>
                <Icon name='settings' />
                Settings
              </Button.Content>
            </Button>
          </Link> 
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={5} className='dash-container'>
          <Link to='stats'>
            <Button animated circular>
              <Button.Content visible>
                <Image src='data:image/png;base64,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' size='massive' circular />
              </Button.Content>
              <Button.Content hidden>
                <Icon name='chart bar' />
                Stats
              </Button.Content>
            </Button>
          </Link> 
        </Grid.Column>
        <Grid.Column width={5} className='dash-container'>
          <Link to='flashcards'>
            <Button animated circular>
              <Button.Content visible>
                <Image src='https://illustoon.com/photo/4173.png' size='massive' circular />
              </Button.Content>
              <Button.Content hidden>
                <Icon name='table' />
                Flashcards
              </Button.Content>
            </Button>
          </Link> 
        </Grid.Column>
        <Grid.Column width={5} className='dash-container'>
          <Link to='challenge'>
            <Button animated circular>
              <Button.Content visible>
                <Image src='data:image/jpeg;base64,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' size='massive' circular />
              </Button.Content>
              <Button.Content hidden>
                <Icon name='tasks' />
                Challenges
              </Button.Content>
            </Button>
          </Link> 
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container> 
);

export default Dashboard;
