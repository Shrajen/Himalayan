import React from 'react'
import { Container } from 'react-bootstrap'
// import { Container } from 'react-bootstrap'
import Navbar from '../../Component/Navbar/Navbar'
import Spec from '../../Component/Special_Offer/Spec'
import OurSpecial from '../../Component/OurSpecial/OurSpecial'
import Footer from '../../Component/Footer/Footer'
import Menu from '../../Component/Menu/Menu'

const Home = () => {
  return (
    <>
    <Navbar/>
   <Container>
   <Spec/>
    <OurSpecial/>
       </Container>
       <Menu/>
   <Footer/>
    </>
  )
}

export default Home
