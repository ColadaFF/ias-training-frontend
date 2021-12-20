import React, { useState } from "react";
import ApplicationBar from "./components/app-bar";
import CssBaseline from "@mui/material/CssBaseline";

import PersonForm from "./components/people/form";

function App() {
  const [fieldValue, updateValue] = useState("");

  const handleClick = () => {
    console.log({ fieldValue });
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <ApplicationBar />

      <input onChange={(e) => updateValue(e.target.value)} value={fieldValue} />
      <button onClick={handleClick}>Guardar</button>

      <PersonForm />
    </React.Fragment>
  );
}

export default App;
