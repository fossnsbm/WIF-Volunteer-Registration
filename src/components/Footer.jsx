import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <>
      <footer className="w-full bottom-0 md:flex md:flex-col">
        <div className="bg-[#26B2B7] flex flex-col justify-center md:flex-row md:justify-between text-white px-10 md:px-52 py-2 font-openSans text-[11px] ">
          <div className="text-center md:text-left lg:text-left">
            © 2023 FOSS COMMUNITY OF NSBM
          </div>
          <div className='text-center font-bold'>
              <Link to={'https://www.nsbm.ac.lk/'} target='_blank'>NSBM Green University</Link>
          </div>
          <div className="text-center md:text-right lg:text-right">
            &lt;/&gt; WITH 🤍 BY the FOSS COMMUNITY OF NSBM
          </div>
        </div>
      </footer>
    </>
    </>
  )
}

export default Footer