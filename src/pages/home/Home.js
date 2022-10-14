import React from "react";

import Navbar from "../../Component/Navbar/Navbar";
import Spec from "../../Component/Special_Offer/Spec";
import OurSpecial from "../../Component/OurSpecial/OurSpecial";
import Footer from "../../Component/Footer/Footer";
import Category from "../../Component/Category/Category";
// import Menu from "../../Component/Menu/Menu";

const Home = () => {
  return (
    <>
      <Navbar />

      <Spec />
      <OurSpecial />
      <Category />
      <Footer />
    </>
  );
};

export default Home;
