import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Button, Icon, Image, Container } from 'semantic-ui-react';

function EndGame({ onContinue, onExit, score, category }) {
  const imgUrl = '/images/Challenge/Category/' + category.replace(/\s/g, '') + '.PNG';

  return (
    <>
      <Container style={{ width: '80%', height: '80%'}}>     
        <Image floated='right' src={imgUrl} size='small' circular />       
        <Header as='h2'>Your Score: {score}%</Header>

        

        <Button onClick={onContinue} basic color='green'>
          <Icon name='like' />
           Play Again
        </Button>
        <Link to='/'>
          <Button onClick={onExit} basic color='red'>
            Exit
          </Button>
        </Link>
      </Container>
    </>

  );
}

export default EndGame;
