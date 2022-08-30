import React from 'react'
import { Route, Routes } from 'react-router'
import HomePage from './HomePage'
import Loginform from './Loginform'

function App() {
  
  return (
   <>
   {/* <Loginform/> */}

   <Routes>
    <Route path="/" element={<Loginform></Loginform>}></Route>
    <Route exact path="/home"element={<HomePage/>}></Route>
  </Routes>
  
   </>

  )
}

export default App