import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const MainLayout = () => {
  return (
    <>
        <Navbar />
        <Outlet />
    </>
  )
}
// react outlet is used to render child route within 
// the parent route

export default MainLayout