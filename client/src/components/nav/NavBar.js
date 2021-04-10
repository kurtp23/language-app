import React from "react";
import { Link } from "react-router-dom";
import { Button, Icon } from "semantic-ui-react";

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
        <Icon name="arrow right" />
      </Button.Content>
    </Button>
  );
}
export default NavBar;

// () => {
//     alert("hello");
//     props.auth
//       .signOut()
//       .then(() => {
//         // Sign-out successful.
//       })
//       .catch((error) => {
//         // An error happened.
//       });
//   }}
