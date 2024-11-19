
import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './components/Home'
import 'bootstrap/dist/css/bootstrap.min.css'
import Create from './components/students/create'


export default function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create-student' element={<Create />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}


