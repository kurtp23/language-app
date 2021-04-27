import React, { useEffect, useState } from "react";
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
import getUser from "./utils/getUser";
import Stats from "./pages/stats/stats";
import "./app.css";
import Bot from "./pages/bot/bot.js";
import API from "./utils/userAPI.js";
import MemoryGame from "./pages/memory/MemoryGame";
// hard-wiring in the Challenge for dev purposes
import Challenges from "./components/Challenge/Challenges.js";
import Settings from "./pages/settingsPage/settings.js";
import PS from "./components/PS/Ps.js";
const auth = firebase.auth();

function App() {
  const [user] = useAuthState(auth);
  const [userState, setUserState] = useState({});
  const [dbUser, setDbUser] = useState({});

  useEffect(() => {
    if (user) {
      // API.postUser(user);
      setUserState({ displayName: user.displayName, userId: user.uid, language: "es", theme: "" });
      API.postUser(user).then(() => {
        API.getUser(user.uid).then((data) => {
          console.log(data)
          const newUser = {
            displayName: data.data[0].username,
            userId: data.data[0].fire_id,
            language: data.data[0].language,
            theme: ""
          };
          setUserState(newUser);
        });
      });
    }
  }, [user]);

  console.log("this is user state", userState);

  return (
    <div>
      {/* <PS /> */}
      {user ? (
        <Router>
          <div>
            <NavBar user={user} auth={auth} userState={userState} />

            <Switch>
              <Route path="/game">
                <MemoryGame userState={userState} />
              </Route>
              <Route path="/challenge">
                <Challenges userState={userState} />
              </Route>
              <Route path="/flashcards">
                <FlashCardSelector userState={userState} />
              </Route>
              <Route path="/stats">
                <Stats userState={userState} />
              </Route>
              <Route path="/settings">
                <Settings userState={userState} setUserState={setUserState} />
              </Route>
              <Route path="/translate">
                <Bot userState={userState}></Bot>
              </Route>
              <Route path="/">
                <Dashboard userState={userState} />
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
