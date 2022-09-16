import './App.css';
import './Component/Navbar/Navbar.css';

import './Component/Special_Offer/Spec.css';
import './Component/AddForm/AddForm.css';
import './Component/Contact/Contact.css';

import './Component/OurSpecial/OurSpecial.css';
import './Component/Footer/Footer.css';



import React from 'react'
import Navbar from './Component/Navbar/Navbar';
import Spec from './Component/Special_Offer/Spec';
import OurSpecial from './Component/OurSpecial/OurSpecial';

import Footer from './Component/Footer/Footer';
import Contact from './Component/Contact/Contact';

function App() {
  return (
 <>
<Navbar></Navbar>
<Spec></Spec>
<OurSpecial></OurSpecial>
<Footer></Footer>
 </>



  
  );
}

export default App;
