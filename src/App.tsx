import React, { useState } from "react";
import ApplicationBar from "./components/app-bar";
import CssBaseline from "@mui/material/CssBaseline";
import Clock from "./components/clock";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <ApplicationBar />

      <Clock timezone="America/Bogota" />
      <Clock timezone="Africa/Abidjan" />
      <Clock timezone="Asia/Dubai" />
    </React.Fragment>
  );
}

export default App;
