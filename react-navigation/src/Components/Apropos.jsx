import React from 'react'
import { Link, Outlet } from 'react-router-dom'
export default function Apropos() {
  return (
    <div>
      <h1>Mieux nous connaître</h1>
      <Link to = "/apropos/contact" >contact</Link>
      <div>
        <Outlet/>
      </div>
    </div>
  )
}
