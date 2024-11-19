import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import AppBar from '../../Components/Navbar'

export default function Dashboard() {

  const navigate = useNavigate()

  useEffect(() => {
    if (!localStorage.getItem("users")) {
      navigate("/login")
    }
  })
  return (
    <div> <AppBar /> </div>
  )
}
