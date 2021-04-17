import React from "react";
import { Link } from "react-router-dom";
import { Button, Icon } from "semantic-ui-react";
import { Dropdown, Menu, Header } from "semantic-ui-react";

const NavBar = (props) => {
  return (
    <>
      {console.log(props.auth.signOut)}
      <div>
        <Link to="/">
          <h1>Home</h1>
        </Link>

        {props.auth.currentUser ? SignOut(props) : "didnt work"}
      </div>
    </>
  );
};

function SignOut(props) {
  return (
    <Button
      animated
      onClick={() => {
        props.auth
          .signOut()
          .then(() => {
            // Sign-out successful.
            console.log("signed out");
          })
          .catch((error) => {
            // An error happened.
          });
      }}
    >
      <Button.Content visible>Sign Out</Button.Content>
      <Button.Content hidden>
        <Icon name="ban" />
      </Button.Content>
    </Button>
  );
}

const MenuExampleDropdownItem = (props) => (
  <>
    <Menu vertical>
      <Dropdown item text="Categories">
        <Dropdown.Menu>
          <Dropdown.Item>{props.auth.currentUser ? SignOut(props) : "didnt work"}</Dropdown.Item>
          <Dropdown.Item>
            <Link to="/">
              <h1>Home</h1>
            </Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="/stats">
              <h1>Stats</h1>
            </Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="/challenge">
              <h1>Challenge</h1>
            </Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="/game">
              <h1>Game</h1>
            </Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="/flashcards">
              <h1>FlashCard</h1>
            </Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="/teambio">
              <h1>Team Bio</h1>
            </Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="/settings">
              <h1>Settings</h1>
            </Link>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Menu>
    <div>
      <Header inverted={true}>{props.userState.displayName}</Header>
    </div>
  </>
);

export default MenuExampleDropdownItem;
