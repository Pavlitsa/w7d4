import React from "react";
import Home from "./Home";
import "./App.css";
import About from "./About";
import { Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";

const NotFound = () => {
  return <div>404 not found</div>;
};

function App() {
  return (
    <div className="App">
      {/* <Home />
      <About /> */}
      <Navbar />
      {/* Switch will only render one route, the first route that matches the path */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
