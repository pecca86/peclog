import React, { Fragment, useEffect } from "react";
// materialize css & JS
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./App.css";

// own components
import SearchBar from "./components/layout/SearchBar";
import Logs from "./components/logs/Logs";
import AddBtn from './components/layout/AddBtn'

const App = () => {
  useEffect(() => {
    // automatically initializes materialize-css JS when app is loaded
    M.AutoInit();
  });

  return (
    <Fragment>
      <SearchBar />
      <div className="container">
        <h1>Peclog</h1>
        <AddBtn />
        <Logs />
      </div>
    </Fragment>
  );
};

export default App;
