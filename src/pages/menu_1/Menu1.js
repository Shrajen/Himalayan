import React from 'react'
import { Container } from 'react-bootstrap'
// import { Container } from 'react-bootstrap'
import Navbar from '../../Component/Navbar/Navbar'
import Menu from '../../Component/Menu/Menu'

import Footer from '../../Component/Footer/Footer'

const Home = () => {
  return (
    <>
    <Navbar/>
   <Container>
  <Menu/>
       </Container>
       
   <Footer/>
    </>
  )
}

export default Home
