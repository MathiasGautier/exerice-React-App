import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Temperature from "./pages/Temperature";
import CustomizeImage from "./pages/CustomizeImage";
import Navbar from "./components/Navbar"

function App() {
  return (
    <div className="App">
<BrowserRouter>
<Navbar/>
<Switch>
<Route exact path="/" component={Home} /> 
<Route exact path="/temperature" component={Temperature} /> 
<Route exact path="/customize-image" component={CustomizeImage} /> 
</Switch>
</BrowserRouter>

     
    </div>
  );
}

export default App;
