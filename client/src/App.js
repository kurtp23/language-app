import React from "react";
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import Dashboard from './pages/dashboard/Dashboard';
import NavBar from './components/nav/NavBar';

function App() {
  return (
    <div>

      <Router>
        <div>
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
    </div>
  );
}

export default App;
