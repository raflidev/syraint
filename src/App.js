// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import image1 from "./images/1.jpg"
import image2 from "./images/2.jpg"
import image3 from "./images/3.jpg"

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
              <div className="font-bold text-6xl capitalize text-center leading-tight">
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
            <div className="grid grid-cols-3 gap-4">
              <div className="flex">
                <div className="w-1/6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 bg-green-400 rounded-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 bg-green-400 rounded-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 bg-green-400 rounded-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
        <div className="mx-10 grid grid-cols-3 items-center gap-10">
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
    <Swiper>
    <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
    {/* End Carousel */}

    </div>
  );
}

export default App;
