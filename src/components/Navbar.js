import React from 'react'
import logo from "../images/logo.png"

function Navbar() {
  return (
    <div>
      {/* Header */}
      <div className="relative">
        
      <div className="fixed top-0 w-full z-20">      
        <div className="bg-orange-600 text-white py-2 px-10">
          <div className="flex justify-between items-center">
            <div className="w-4/12">
              <div className="flex justify-center">
                <img src={logo} alt="Logo Syra International" className='w-14' />
              </div>
            </div>
            <div className="w-8/12">
              <div className="flex justify-end space-x-20">
                <div>
                  Home
                </div>
                <div>
                  About Us
                </div>
                <div>
                  Gallery
                </div>
                <div>
                  Order Here
                </div>
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