import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import NavBar from "./components/nav/NavBar";

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

firebase.initializeApp({
  apiKey: "AIzaSyB4QCoJnYPe0SO57vaRjY2n2RjkzFJIjzo",
  authDomain: "language-app-9fdd7.firebaseapp.com",
  projectId: "language-app-9fdd7",
  storageBucket: "language-app-9fdd7.appspot.com",
  messagingSenderId: "322107717238",
  appId: "1:322107717238:web:6ff906f60e98e96f349157",
  measurementId: "G-4X4FT4CYN6",
});
const auth = firebase.auth();

function App() {
  const [user] = useAuthState(auth);
  return (
    <div>
      {user ? (
        <Router>
          <div>
            <SignOut />
            <NavBar />

            <Switch>
              <Route path="/game">
                <h1>Hello from Game</h1>
              </Route>
              <Route path="/challenge">
                <h1>Hello from challenge</h1>
              </Route>
              <Route path="/flashcards">
                <h1>Hello from flashcards</h1>
              </Route>
              <Route path="/stats">
                <h1>Hello from stats</h1>
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
  };
  return <button onClick={signInWithGoogle}>Sign in with google</button>;
}
function SignOut() {
  return (
    auth.currentUser && (
      <button className="sign-out" onClick={() => auth.signOut()}>
        Sign Out
      </button>
    )
  );
}
export default App;
