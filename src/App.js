// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import { Pagination } from "swiper";

// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import image1 from "./images/1.jpg"
import image2 from "./images/2.jpg"
import image3 from "./images/3.jpg"

// icon
import linkedin from "./images/icon/linkedin.svg"
import facebook from "./images/icon/facebook.svg"
import instagram from "./images/icon/instagram.svg"

import long from "./images/Long_Charcoal.png"
import cube from "./images/Cube_Charcoal.png"
import question from "./images/question_mark.png"

import logo from "./images/logo.png"

function App() {
  return (
    <div className="bg-white h-screen font-lato">
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

      {/* Jumbotron */}
      <div>
        <div className="text-white h-screen bg-no-repeat bg-cover " style={{backgroundImage: `url("https://charcoal.pro/info/wp-content/uploads/2020/05/trusted-coconut-shell-charcoal-briquettes-factory-1024x576.jpg")` }}>
          <div className="flex h-screen bg-black bg-opacity-40">
            <div className="m-auto ">
              <div className="font-bold text-3xl lg:text-6xl capitalize text-center leading-tight">
                  Get your premium briquettes <br></br> with quality raw materials
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Jumbotron */}

      {/* flydiv */}
      <div className="w-5/6 mx-auto relative"> 
        <div className="-mt-32 z-10">
          <div className="p-5 py-10 mx-5 bg-white rounded-lg shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <div className="flex">
                <div className="w-1/6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 bg-orange-600 rounded-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                </div>
                <div className="w-5/6">
                  <div className="text-4xl font-black">100</div>
                  <div>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum?
                  </div>
                </div>
              </div>
              <div className="flex">
                <div className="w-1/6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 bg-orange-600 rounded-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                </div>
                <div className="w-5/6">
                  <div className="text-4xl font-black">100</div>
                  <div>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum?
                  </div>
                </div>
              </div>
              <div className="flex">
                <div className="w-1/6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 bg-orange-600 rounded-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                </div>
                <div className="w-5/6">
                  <div className="text-4xl font-black">100</div>
                  <div>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum?
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End flydiv */}

      {/* Feature */}
      <div className="w-5/6 mx-auto mt-24 pt-5 pb-10">
        <div className="mx-10 grid grid-cols-2 lg:grid-cols-3 items-center gap-10">
          <div className="space-y-5">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
            </div>
            <div className="font-bold text-xl">
              Lorem, ipsum dolor.
            </div>
            <div>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, porro.
            </div>
          </div>
         
          <div className="space-y-5">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
            </div>
            <div className="font-bold text-xl">
              Lorem, ipsum dolor.
            </div>
            <div>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, porro.
            </div>
          </div>
         
          <div className="space-y-5">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
            </div>
            <div className="font-bold text-xl">
              Lorem, ipsum dolor.
            </div>
            <div>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, porro.
            </div>
          </div>
         
          <div className="space-y-5">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
            </div>
            <div className="font-bold text-xl">
              Lorem, ipsum dolor.
            </div>
            <div>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, porro.
            </div>
          </div>
         
          <div className="space-y-5">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
            </div>
            <div className="font-bold text-xl">
              Lorem, ipsum dolor.
            </div>
            <div>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, porro.
            </div>
          </div>
         
          <div className="space-y-5">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
            </div>
            <div className="font-bold text-xl">
              Lorem, ipsum dolor.
            </div>
            <div>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, porro.
            </div>
          </div>
         
        </div>
        
      </div>
      {/* End Feature */}

      {/* Gallery */}
      <div className="w-5/6 mx-auto py-10">
        <h1 className="font-bold text-center text-4xl pb-10">Gallery</h1>
        <div className="grid grid-cols-3 gap-1">
          <img className="col-span-2" src={image1} alt="" />
          <div className="space-y-1">
            <img src={image2} alt="" />
            <img src={image3} alt="" />
          </div>
        </div>
      </div>
      {/* End Gallery */}


    {/* Carousel */}
    <h1 className='text-3xl font-bold text-center pt-10 pb-5'>OUR INVENTORY</h1>
    <Swiper navigation={true} pagination={true} modules={[Navigation, Pagination]} className="mySwiper mx-10">
      <SwiperSlide>
        <div className='flex py-10 justify-center'>
          <div className='w-1/2 mx-auto space-y-5'>
              <img className='mx-auto' src={long} alt="Long Charcoal"/>
              <p className='text-center font-bold text-xl'>
                SAWDUST CHARCOAL
              </p>
              <p className='text-center'>
              Sawdust Charcoal is made by burning wood in the absence of oxygen. Our modern carbonization process produces strong and high density charcoal. Its unique hexagonal shape provides efficient storage, wide surface area, and easy stacking of charcoal during usage.
              </p>    
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='flex py-10 justify-center'>
          <div className='w-1/2 mx-auto space-y-5'>
              <img className='mx-auto' src={cube} alt="Long Charcoal"/>
              <p className='text-center font-bold text-xl'>
              CUBES SHISHA CHARCOAL
              </p>
              <p className='text-center'>
              Arguably the most common type of shisha coal, cubes have six flat equal sides (like dice) which make them ultra-stable when burning. Cubes offer a slow burn and can be successfully used with most hookah bowl and screen setups due to the many different sizes available. Make sure to rotate the cubes throughout the session to get the best results.
              </p>    
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='flex py-10 justify-center'>
          <div className='w-1/2 mx-auto space-y-5'>
              <img className='mx-auto' src={question} alt="Long Charcoal"/>
              <p className='text-center font-bold text-xl'>
              CUSTOMIZE YOUR CHARCOAL!
              </p>
              <p className='text-center'>
              You can customize the shape of the charcoal. You can adjust the size, hardness, and duration of burning. We will make all expectations as much as possible.
              </p>    
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
    {/* End Carousel */}

    {/* Team */}
     <div className='my-10'>
      <div className='bg-orange-600 text-white py-10'>
        <h1 className='text-center uppercase text-3xl font-bold py-3'>Our Team</h1>
        <div className="w-5/6 mx-auto py-10">
          <div className="grid grid-cols-4 gap-4">
            <div>
              <div className='mx-auto w-40 h-40 bg-red-100 rounded-full mb-5'></div>
              <div className='space-y-3 text-center'>
                <div className='font-bold text-xl'>Muhammad Rafli Ramadhan</div>
                <div className='text-lg'>Jabatan</div>
                <div className='italic'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis, magni.</div>
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
                <div className='font-bold text-xl'>Muhammad Rafli Ramadhan</div>
                <div className='text-lg'>Jabatan</div>
                <div className='italic'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis, magni.</div>
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
                <div className='font-bold text-xl'>Muhammad Rafli Ramadhan</div>
                <div className='text-lg'>Jabatan</div>
                <div className='italic'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis, magni.</div>
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
                <div className='font-bold text-xl'>Muhammad Rafli Ramadhan</div>
                <div className='text-lg'>Jabatan</div>
                <div className='italic'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis, magni.</div>
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
    {/* End Team */}

    {/* Maps */}
    <div>
      <h1 className='text-center uppercase text-3xl font-bold py-8'>Location</h1>
        <iframe
      className='w-5/6 mx-auto h-96'
      loading="lazy"
      title='maps'
      allowfullscreen
      referrerpolicy="no-referrer-when-downgrade"
      src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCBsWcQJiEmoNEY3XJZCTEfdxU-jkfyn4M
        &q=Mixue Tambun">
      </iframe>
    </div>

    {/* End Maps */}

    {/* Footer */}
    <div className='w-full bg-orange-600 py-7 mt-10'>
      <div className='text-center text-sm font-light text-white space-y-1'>
        <p>syra.idn@gmail.com</p>
        <p>+62 812-9710-8565 (Whatsapp)</p>
        <p>Indonesia, Bekasi. Medan Satria, Pejuang Jaya, Jalan Komando Raya.</p>
        <p className='pt-5'>&copy;2021 by PT Syra International.</p>
      </div>
    </div>
    {/* End Footer */}

    </div>
  );
}

export default App;
