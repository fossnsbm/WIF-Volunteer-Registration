import React from 'react'

function NavBar() {
  return (
    <>
      <div className="text-black flex justify-between px-10 py-5">
        <div className="text-left font-bold text-2xl items-end">
          Home
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
    </>
  )
}

export default NavBar