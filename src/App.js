import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import NewsPost from './components/NewsPost';
import { Navbar } from 'react-bootstrap';
import RaawView from './components/RaawView';

function App() {
  return (
    <div className="App">
       <Router>
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home" className="text-center">
              <h2 className="text-center">News fangs @ CreateBytes</h2>
            </Navbar.Brand>
          </Navbar>
            <Switch>
              <Route exact path="/postInfo">
                <RaawView />
              </Route>
              <Route path="/">
                <NewsPost />
              </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
