import React from "react";
import { Link } from "react-router-dom";
import { Button, Icon } from "semantic-ui-react";
import { Dropdown, Menu, Grid, Segment } from "semantic-ui-react";

function SignOut(props) {
  return (
    <Button
      animated
      onClick={() => {
        props.auth
          .signOut()
          .then(() => {
            // Sign-out successful.
          })
          .catch((error) => {
            console.error("An error on sign out", error);
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

const MobileNav = (props) => (
  <Grid>
    <Grid.Row columns={1} only="mobile tablet">
      <Grid.Column>
        {/* <Segment> */}
        <Menu>
          <Menu.Item header>
            <img src="../../project3-icon.png" />
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item>
              <Dropdown item text="Pages">
                <Dropdown.Menu>
                  <Dropdown.Item>
                    <Link to="/">Home</Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link to="/game">Game</Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link to="/challenge">Challenges</Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link to="/flashcards">Flashcards</Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link to="/translate">Translate</Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link to="/stats">Stats</Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link to="/settings">Settings</Link>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Item>
            <Menu.Item>{props.auth.currentUser ? SignOut(props) : "didnt work"}</Menu.Item>
          </Menu.Menu>
        </Menu>
        {/* </Segment> */}
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default MobileNav;
