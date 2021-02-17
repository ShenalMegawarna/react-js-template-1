import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Custom Components
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Products from "./components/pages/Products";
import Services from "./components/pages/Services";
import SignUp from "./components/pages/SignUp";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/products" exact component={Products}></Route>
          <Route path="/services" exact component={Services}></Route>
          <Route path="/signUp" exact component={SignUp}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
