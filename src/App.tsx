import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import ApplicationBar from "./components/app-bar";
import PersonForm from "./components/people/form";
import PeopleMainPage from "./components/people/pages/main-page";
import EditPersonPage from "./components/people/pages/person-details";
// import Clock from "./components/clock";

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <ApplicationBar />

      {/*  <Clock timezone="America/Bogota" />
      <Clock timezone="Africa/Abidjan" />
      <Clock timezone="Asia/Dubai" /> */}

      <Routes>
        <Route path="/" element={<PeopleMainPage />} />
        <Route path="create" element={<PersonForm />} />
        <Route path=":personId/details" element={<EditPersonPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
