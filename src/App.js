import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./home";
import About from "./Pages/about"
import Projects from "./Pages/projects";
import Contact from "./Pages/contact";
import Post from "./Pages/posts";
import Error404 from "./Pages/error404";

const App = () => {
    return (
      <Router>
          <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/projects" component={Projects} />
              <Route path="/contact-me" component={Contact} />
              <Route path="/:slug" component={Post} />
          </Switch>
      </Router>
    );
}
export default App;
