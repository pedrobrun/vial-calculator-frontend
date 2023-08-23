import Navbar from '@/navbar'
import React, { ReactElement } from 'react'

const Layout = ({ children }: { children: ReactElement }) => {
  return (
    <div className="w-screen h-screen flex flex-col items-center ">
      <Navbar />
      {children}
    </div>
  )
}

export default Layout
