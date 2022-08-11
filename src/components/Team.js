import React from 'react'
// icon
import linkedin from "../images/icon/linkedin.svg"
import facebook from "../images/icon/facebook.svg"
import instagram from "../images/icon/instagram.svg"

function Team() {
  return (
    <div>
      <div className='my-10'>
      <div className='bg-orange-600 text-white py-10'>
        <h1 className='text-center uppercase text-3xl font-bold py-3'>Our Team</h1>
        <div className="w-5/6 mx-auto py-10">
          <div className="grid grid-cols-3 gap-4 items-start">
            <div>
              <div className='mx-auto w-40 h-40 bg-red-100 rounded-full mb-5'></div>
              <div className='space-y-3 text-center'>
                <div className='font-bold text-xl uppercase'>YUDY HADI WIBOWO</div>
                <div className='text-lg'>Founder</div>
                <div className='italic'>Integrity is an indicator of one's success and trust is built with good communication.</div>
                <div className='flex justify-center space-x-5 pt-5'>
                  <div>
                    <img src={linkedin} className="text-white" alt="" />
                  </div>
                  <div>
                    <img src={facebook} className="text-white" alt="" />
                  </div>
                  <div>
                    <img src={instagram} className="text-white" alt="" />
                  </div>
                </div>
              </div>
            </div>


            
            <div>
              <div className='mx-auto w-40 h-40 bg-red-100 rounded-full mb-5'></div>
              <div className='space-y-3 text-center'>
                <div className='font-bold text-xl uppercase'>Muhammad Rafli Ramadhan</div>
                <div className='text-lg'>Co-Founder</div>
                <div className='italic'>The more I read, the more I acquire, the more certain I am that I know nothing.</div>
                <div className='flex justify-center space-x-5 pt-5'>
                  <div>
                    <img src={linkedin} className="text-white" alt="" />
                  </div>
                  <div>
                    <img src={facebook} className="text-white" alt="" />
                  </div>
                  <div>
                    <img src={instagram} className="text-white" alt="" />
                  </div>
                </div>
              </div>
            </div>

            
            <div>
              <div className='mx-auto w-40 h-40 bg-red-100 rounded-full mb-5'></div>
              <div className='space-y-3 text-center'>
                <div className='font-bold text-xl uppercase'>ALI RAFII MARZUKI</div>
                <div className='text-lg'>Chief Marketing Officer</div>
                <div className='italic'>Some are born great, some achieve greatness, and some have greatness thrust upon them.</div>
                <div className='flex justify-center space-x-5 pt-5'>
                  <div>
                    <img src={linkedin} className="text-white" alt="" />
                  </div>
                  <div>
                    <img src={facebook} className="text-white" alt="" />
                  </div>
                  <div>
                    <img src={instagram} className="text-white" alt="" />
                  </div>
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