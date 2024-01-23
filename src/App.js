import React from "react";
import PlantDetails from "./pages/Plant Details/Plant_Details"

import RoutesConfig from "../src/pages/4_Routing/RoutesConfig";
import {BrowserRouter as Router } from "react-router-dom";



function App() {
  return (
    <>
    <div>
      <Router basename="/">
        <RoutesConfig/>
      </Router>
    </div>
    </>
  );
}

export default App;
