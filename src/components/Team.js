import React from 'react'
// icon
import linkedin from "../images/icon/linkedin.svg"
import facebook from "../images/icon/facebook.svg"
import instagram from "../images/icon/instagram.svg"

// profile
import rafli from "../images/people/rafli.jpeg"
import yudy from "../images/people/yudy.jpeg"
import ali from "../images/people/ali.jpeg"

function Team() {
  return (
    <div>
      <div className='my-10'>
      <div className='bg-orange-600 text-white py-10'>
        <h1 className='text-center uppercase text-3xl font-bold py-3'>Our Team</h1>
        <div className="w-5/6 mx-auto py-10">
          <div className="grid grid-cols-1 space-y-4 lg:space-y-0 lg:grid-cols-3 gap-4 items-start">
            <div>
              <img src={yudy} className='mx-auto w-48 h-48 bg-red-100 rounded-full mb-5' alt="" srcset="" />
              <div className='space-y-3 text-center'>
                <div className='font-bold text-xl uppercase'>YUDY HADI WIBOWO</div>
                <div className='text-lg'>Founder</div>
                <div className='italic'>Integrity is an indicator of one's success and trust is built with good communication.</div>
                <div className='flex justify-center space-x-5 pt-5'>
                  <a href="https://www.linkedin.com/in/yudyhadiwibowo/" target="_blank" rel="noreferrer">
                    <img src={linkedin} className="text-white hover:bg-orange-700 p-1 hover:rounded hover:cursor-pointer" alt="" />
                  </a>
                  <a href="https://www.facebook.com/yudyhadiwibowo/" target="_blank" rel="noreferrer">
                    <img src={facebook} className="text-white hover:bg-orange-700 p-1 hover:rounded hover:cursor-pointer" alt="" />
                  </a>
                  <a href="http://www.instagram.com/yudyhadi" target="_blank" rel="noreferrer">
                    <img src={instagram} className="text-white hover:bg-orange-700 p-1 hover:rounded hover:cursor-pointer" alt="" />
                  </a>
                </div>
              </div>
            </div>


            
            <div>
            <img src={rafli} className='mx-auto w-48 h-48 bg-red-100 rounded-full mb-5' alt="" srcset="" />
              <div className='space-y-3 text-center'>
                <div className='font-bold text-xl uppercase'>Muhammad Rafli Ramadhan</div>
                <div className='text-lg'>Co-Founder</div>
                <div className='italic'>The more I read, the more I acquire, the more certain I am that I know nothing.</div>
                <div className='flex justify-center space-x-5 pt-5'>
                  <a href="https://www.linkedin.com/in/raflidev/" target="_blank" rel="noreferrer">
                    <img src={linkedin} className="text-white hover:bg-orange-700 p-1 hover:rounded hover:cursor-pointer" alt="" />
                  </a>
                  <a href="http://www.instagram.com/raflidev" target="_blank" rel="noreferrer">
                    <img src={instagram} className="text-white hover:bg-orange-700 p-1 hover:rounded hover:cursor-pointer" alt="" />
                  </a>
                </div>
              </div>
            </div>

            
            <div>
              <img src={ali} className='mx-auto w-48 h-48 bg-red-100 rounded-full mb-5' alt="" srcset="" />
              <div className='space-y-3 text-center'>
                <div className='font-bold text-xl uppercase'>ALI RAFII MARZUKI</div>
                <div className='text-lg'>Chief Marketing Officer</div>
                <div className='italic'>Some are born great, some achieve greatness, and some have greatness thrust upon them.</div>
                <div className='flex justify-center space-x-5 pt-5'>
                  <a href="https://www.instagram.com/alirafii.marzuki/" target="_blank" rel="noreferrer">
                    <img src={instagram} className="text-white hover:bg-orange-700 p-1 hover:rounded hover:cursor-pointer" alt="" />
                  </a>
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </div>
     </div>
    </div>
  )
}

export default Team