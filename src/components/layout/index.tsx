import React, { ReactElement } from 'react'
import Navbar from '../navbar'

const Layout = ({ children }: { children: ReactElement }) => {
  return (
    <div className='bg-black text-white'>
      <Navbar />
      <div>
        {children}
      </div>
    </div>
  )
}

export default Layout
