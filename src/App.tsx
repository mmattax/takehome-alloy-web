import React from 'react';
import './App.css';
import Home from './pages/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Redirected from './pages/Redirected';
import Finish from './pages/Finish';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/redirected" component={Redirected} />
          <Route exact path="/finish" component={Finish} />
        </Switch>
      </div>
    </Router>
  );
}
export default App;
