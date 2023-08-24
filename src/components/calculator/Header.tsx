import React from 'react'

const Header = ({ value }: { value: string | number }) => {
  return (
    <header className="flex justify-end items-end pb-4 pr-5 relative">
      <strong
        className="text-white text-7xl font-light absolute right-0 origin-right"
      >
        {value}
      </strong>
    </header>
  )
}

export default Header