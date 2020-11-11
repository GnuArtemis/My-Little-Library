import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom"
import "./App.css";
import Navbar from "./Components/Navbar";
import Search from "./Components/Search";
import Intro from "./Components/Intro";
import Saved from "./Components/Saved";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Intro />
      <Switch>
        <Route exact path="/">
          
        </Route>
        <Route exact path="/search">
          <Search/>
        </Route>
        <Route exact path="/saved">
          <Saved/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}


export default App;
