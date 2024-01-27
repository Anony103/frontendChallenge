import React from 'react'
import Home from '../src/pages/Home'
import { Routes, Route } from 'react-router-dom'
import Sales from './pages/Sales'


function App() {

  return (
    <React.Fragment>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/sale' element={<Sales/>}/>

      </Routes>
    </React.Fragment>
  )
}

export default App
