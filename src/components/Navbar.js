import React from 'react'
import logo from "../images/logo.png"
import {Link} from "react-scroll";

function Navbar() {
  return (
    <div>
      {/* Header */}
      <div className="relative">
        
      <div className="fixed top-0 w-full z-20">      
        <div className="bg-orange-600 text-white py-2 px-10">
          <div className="flex justify-center lg:justify-between items-center">
            <div className="w-4/12">
              <div className="flex justify-center">
                <img src={logo} alt="Logo Syra International" className='w-14' />
              </div>
            </div>
            <div className="hidden lg:inline w-8/12">
              <div className="flex justify-end space-x-10">
                <Link to="home" className='hover:bg-gray-200 p-1 hover:text-black hover:rounded px-2' smooth={true} duration={500}>
                  Home
                </Link>
                <Link to="about" className='hover:bg-gray-200 p-1 hover:text-black hover:rounded px-2' smooth={true} offset={-200} duration={500}>
                  About Us
                </Link>
                <Link to="gallery" className='hover:bg-gray-200 p-1 hover:text-black hover:rounded px-2' smooth={true} offset={-50} duration={500}>
                  Gallery
                </Link>
                <Link to="order" className='hover:bg-gray-200 p-1 hover:text-black hover:rounded px-2' smooth={true} offset={-200} duration={500}>
                  Order Here
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      </div>
      {/* End Header */}
    </div>
  )
}

export default Navbar