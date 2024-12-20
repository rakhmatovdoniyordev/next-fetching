import Footer from '@/components/Footer/Footer'
import Heaeder from '@/components/Header/Heaeder'
import React from 'react'

const Layout = ({children}) => {
  return (
    <>
        <Heaeder/>
        {children}
        <Footer/>
    </>
  )
}

export default Layout