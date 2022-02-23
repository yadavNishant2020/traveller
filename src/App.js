import React from "react";
import { CssBaseline, Grid } from "@material-ui/core";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import PlaceDetails from "./components/PlaceDetails/PlaceDetails";
import "./App.css";

function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      <List />
    </>
  );
}

export default App;
