import React from "react";
import Articles from './Articles';
import PostArticle from './PostArticle';
import About from './About';
import Login from './Login';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
      <Router>
          <div className="App">
              <Route path="/about" component={About} />
              <Route path="/login" component={Login} />
              <Route path="/articles" component={Articles} />
              <Route path="/PostArticle" component={PostArticle} />
          </div>
      </Router>
  )
}

export default App;