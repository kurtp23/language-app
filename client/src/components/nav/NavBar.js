import { PromiseProvider } from "mongoose";
import React from "react";
import { Link } from "react-router-dom";
import { Button, Icon } from "semantic-ui-react";
import { Dropdown, Menu, Grid, Segment } from "semantic-ui-react";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";

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

const NavBar = (props) => (
  <>
    <MobileNav user={props.user} auth={props.auth} userState={props.userState} />
    <DesktopNav user={props.user} auth={props.auth} userState={props.userState} />
  </>
);

export default NavBar;
