import React from 'react'
import Home from '../Pages/Home'
import Navbar from '../Component/ShareComp/Navbar'
import Footer from '../Component/ShareComp/Footer'
import { Outlet } from 'react-router'

export default function Layout() {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}
