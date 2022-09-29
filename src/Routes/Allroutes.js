import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import Menu1 from "../pages/menu_1/Menu1"

const Allroutes = () => {
  return (
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/menu1' element={<Menu1/>}/>


    </Routes>
  )
}

export default Allroutes
