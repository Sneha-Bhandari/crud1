import { useState } from 'react'
import {Routes, Route } from 'react-router-dom'
import Postmethod from './Files/Postmethod'
import Getmethod from './Files/Getmethod'
import Table from './Files/Table'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path='/' element={<Postmethod/>}></Route>
      <Route path='/Getmethod' element={<Getmethod/>}></Route>
      <Route path='/Table' element={<Table/>}></Route>


    </Routes>
    </>
  )
}

export default App
