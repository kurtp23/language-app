import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import FlashCard from "./pages/flash-cards/FlashCard";
import NavBar from "./components/nav/NavBar";
import Login from "./components/landingpage/login";
import { useAuthState } from "react-firebase-hooks/auth";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "./utils/fireUtil";
import postUser from "./utils/userApiPost.js";
import Stats from "./pages/stats/stats";

// hard-wiring in the Challenge for dev purposes
import Challenges from "./components/Challenge/Challenges.js";

const auth = firebase.auth();

function App() {
  const [user] = useAuthState(auth);
  console.log(user);
  return (
    <div>
      {user ? (
        <Router>
          <div>
            <NavBar user={user} auth={auth} />

            <Switch>
              <Route path="/game">
                <h1>Hello from Game</h1>
              </Route>
              <Route path="/challenge">
                <Challenges />
              </Route>
              <Route path="/flashcards">
                <FlashCard />
              </Route>
              <Route path="/stats">
                <h1>
                  <Stats />
                </h1>
              </Route>
              <Route path="/settings">
                <h1>Hello from settings</h1>
              </Route>
              <Route path="/teambio">
                <h1>Hello from team bio</h1>
              </Route>
              <Route path="/">
                <Dashboard />
              </Route>
            </Switch>
          </div>
        </Router>
      ) : (
        <SignIn />
      )}
    </div>
  );
}

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
    postUser({ text: "test" });
  };
  return (
    <>
      <Login login={signInWithGoogle} />
    </>
  );
}

export default App;
