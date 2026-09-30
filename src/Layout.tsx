import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './comp1/Navbar'

export default function Layout() {
  return (

    <>
    <Navbar />
    <Outlet />
    <h1>footer</h1>

    </>
  )
}
