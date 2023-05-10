import React from 'react'
import Navbar from '../components/ui/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/ui/Footer'
import UseScrollToTop from '../hooks/UseScrollToTop'

export default function Layout() {
  return (
    <>
      <UseScrollToTop/>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}
