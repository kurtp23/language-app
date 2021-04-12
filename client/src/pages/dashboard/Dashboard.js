//only='mobile'
//mobile={3} tablet={6} computer={12} widescreen={16}
    
import React from 'react'
import { Container, Divider, Grid, Header, Icon } from 'semantic-ui-react'
import './Dashboard.css';
import { Link } from 'react-router-dom';
import DashButton from '../../components/dash-button/DashButton';

const Dashboard = () => (
  <Container>

    <Header as='h2' icon inverted textAlign='center' className="header">
      <Icon name='globe' />
      Language Learning App
    </Header>
    <Divider />

    <Header as='h2' inverted textAlign='center' className="header">
      Dashboard
    </Header>
    <Grid relaxed>
      <Grid.Row>
        <Grid.Column width={4} className="dash-container">
            <Link to="teambio">
                <DashButton children='Team!'/>
            </Link>
        </Grid.Column>
        <Grid.Column width={8} className="dash-container" >
            <Link to="game">
                <DashButton children='Play!' color='red'/>
            </Link>
        </Grid.Column>
        <Grid.Column width={4} className="dash-container">
            <Link to="settings">
                <DashButton children='Settings!'/>
            </Link>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={4} className="dash-container" >
            <Link to="stats">
                <DashButton children='Stats!'/>
            </Link>
        </Grid.Column>
        <Grid.Column width={8} className="dash-container">
            <Link to="flashcards">
                <DashButton children='Flashcards!' />
            </Link>
        </Grid.Column>
        <Grid.Column width={4} className="dash-container">
            <Link to="challenge">
                <DashButton children='Challenges!'/>
            </Link>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>
)

export default Dashboard;