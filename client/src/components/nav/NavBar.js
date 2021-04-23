import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react';
import { Dropdown, Menu } from 'semantic-ui-react';

function SignOut(props) {
  return (
    <Button
      animated
      onClick={() => {
        props.auth
          .signOut()
          .then(() => {
            // Sign-out successful.
            console.log('signed out');
          })
          .catch((error) => {
            // An error happened.
          });
      }}
    >
      <Button.Content visible>Sign Out</Button.Content>
      <Button.Content hidden>
        <Icon name='ban' />
      </Button.Content>
    </Button>
  );
}

const NavBar = (props) => (
  <Menu stackable>
    <Menu.Item>
      <img src='../../project3-icon.png' />
      <h4> Language Learning App</h4>
    </Menu.Item>
    <Menu.Item>
      <p>{props.userState.displayName}</p>
    </Menu.Item>
    
    <Menu.Menu position='right'>
      <Menu.Item>
        <Dropdown item text='Pages' >
          <Dropdown.Menu>
            <Dropdown.Item>
              <Link to='/game'>
                <p>Game</p>
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to='/challenge'>
                <p>Challenges</p>
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to='/flashcards'>
                <p>Flashcards</p>
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to='/translate'>
                <p>Translate</p>
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to='/stats'>
                <p>Stats</p>
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to='/settings'>
                <p> Settings</p>
              </Link>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
      <Menu.Item>
        <Link to='/'>
          <p>Home</p>
        </Link>
      </Menu.Item>
      <Menu.Item>
        {props.auth.currentUser ? SignOut(props) : 'didnt work'}
      </Menu.Item>
    </Menu.Menu>
  </Menu>
);
export default NavBar;
