import './App.css';
import Navbar from "./Navbar";
import Home from './Home';
import Experience from './Experience';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <h1>App</h1>
        <div className="content">
          <Switch>
            <Route path="/experience">
              <Experience />
            </Route>
            <Route path="/">
              <Home />
            </Route>
            
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
