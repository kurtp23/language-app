import React from "react";
import { Link } from "react-router-dom";
import { Button, Icon } from "semantic-ui-react";
/*
const NavBar = (props) => {
  return (
    <>
      {console.log(props.auth.signOut)}
      <div >
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

function NewNav(){
  return(
<div class="ui secondary vertical pointing menu">
  <a class="active item">
    <Link to="/">
      <h1>Home</h1>
    </Link>
  </a>
  <a class="item">
  <Link to="/stats">
      <h1>Stats</h1>
    </Link>
  </a>
  <a class="item">
    Friends
  </a>
</div>
)}
export default NewNav;
*/
import { Dropdown, Menu } from 'semantic-ui-react'

const MenuExampleDropdownItem = () => (
  <Menu vertical>
    <Dropdown item text='Categories'>
      <Dropdown.Menu>
        <Dropdown.Item>Electronics</Dropdown.Item>
        <Dropdown.Item>Automotive</Dropdown.Item>
        <Dropdown.Item>Home</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  </Menu>
)

export default MenuExampleDropdownItem

