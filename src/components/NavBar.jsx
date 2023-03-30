import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <nav>
      <div className="text-black sticky top-0 flex justify-between px-10 md:px-52 py-5">
        <div className="text-left font-bold text-2xl items-end">
          <Link to={'/'}>
          Home
          </Link>
        </div>
        <div className="text-right font-normal flex text-lg items-end">
          <div className="p-0">
            #FOSS
          </div>
          <div className="pl-5">
            #WIF
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar