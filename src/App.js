import React from "react";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Temperature from "./components/Temperature";
import CustomizeImage from "./components/CustomizeImage.jsx";
import Celebrities from "./components/Celebrities";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/temperature">Temperature</Link>
        <Link to="/customize-image">Customize Image</Link>
        <Link to="/celebrities">Celebrities</Link>
      </nav>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/temperature" component={Temperature} />
        <Route path="/customize-image" component={CustomizeImage} />
        <Route path="/celebrities" component={Celebrities} />
        <Route render={() => <h1>404</h1>} />
      </Switch>
    </div>
  );
}

export default App;
