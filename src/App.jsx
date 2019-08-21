import React from "react";
import Loading from "./components/Loading";
import Routes from "./routers";

import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Loading />
      <Routes />
    </div>
  );
};

export default App;
