import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import FlashCardSelector from "./pages/flash-cards/FlashCardSelector";
import NavBar from "./components/nav/NavBar";
import Login from "./components/landingpage/login";
import { useAuthState } from "react-firebase-hooks/auth";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "./utils/fireUtil";
import postUser from "./utils/userApiPost.js";
import Stats from "./pages/stats/stats";
import "./app.css";
import CardExampleCard from "./pages/teampage/teampage.js";

// hard-wiring in the Challenge for dev purposes
import Challenges from "./components/Challenge/Challenges.js";

const auth = firebase.auth();

function App() {
  const [user] = useAuthState(auth);
  const [userState, setUserState] = useState({});
  console.log(user);

  useEffect(() => {
    if (user) {
      postUser(user);
      setUserState({ displayName: user.displayName, userId: user.uid, language: "", theme: "" });
    }
  }, [user]);
  console.log("this is user state", userState);

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
                <FlashCardSelector />
              </Route>
              <Route path="/stats">
                <Stats />
              </Route>
              <Route path="/settings">
                <h1>Hello from settings</h1>
              </Route>
              <Route path="/teambio">
                <CardExampleCard />
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
  return (
    <>
      <Login login={signInWithGoogle} />
    </>
  );
}

export default App;
