import "./App.css";
import "./Component/Navbar/Navbar.css";
import "./Component/Special_Offer/Spec.css";
import "./Component/AddForm/AddForm.css";
import "./Component/Contact/Contact.css";

import "./Component/OurSpecial/OurSpecial.css";
import "./Component/Footer/Footer.css";

import React from "react";

import Allroutes from "./Routes/Allroutes";
import axios from "axios";

function App() {
  axios.defaults.baseURL = "http://192.168.1.73:80/api/";
  return (
    <>
      <Allroutes />
    </>
  );
}

export default App;
