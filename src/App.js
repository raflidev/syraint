
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import { Pagination } from "swiper";

import image1 from "./images/1.jpg"
import image2 from "./images/2.jpg"
import image3 from "./images/3.jpg"


import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import Advantages from './components/Advantages';
import Feature from './components/Feature';
// import Carousel from "./components/Carousel"
import Team from "./components/Team";

// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";

// icon
import long from "./images/Long_Charcoal.png"
import cube from "./images/Cube_Charcoal.png"
import question from "./images/question_mark.png"
import data from "./data"
import { useState } from "react";


function App() {
  const [popup, setPopup] = useState(false);
  const [value, setValue] = useState({});
  const [index, setIndex] = useState(0);
  const cek = (value) => {
    setIndex(value-1);
    setValue(data[value-1]);
    setPopup(true);
  }
  return (
    <div className="bg-white h-screen font-lato relative" id="home">
      { popup &&
      <div className='flex justify-center'>
        <div className='bg-gray-200 rounded p-5 w-1/2 h-1/2 top-40 fixed z-10 shadow-lg'>
        <div className="absolute right-4 top-4">
          <svg xmlns="http://www.w3.org/2000/svg" onClick={() => setPopup(false)} className="h-6 w-6 text-black hover:text-red-600 hover:cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
          <div className="flex items-center">
            <div className="w-1/2">
              { index === 0 &&
                <div>
                  <img className='mx-auto' src={long} alt=""/>
                </div>
              }

              { index !== 0 &&
                <div>
                  <img className='mx-auto' src={cube} alt=""/>
                </div>
              }
              <div className='text-center text-2xl font-bold'>
                { value.name }
              </div>
            </div>
            <div className="w-1/2">
              <div className='font-bold'>Specification</div>
              { index === 0 &&
                <div>
                  <div>Hardness: { value.a }</div>
                  <div>Moisture : { value.b }</div>
                  <div>Volatite Matter : { value.c }</div>
                  <div>Fix Carbon : { value.d }</div>
                  <div>Ash Content : { value.e }</div>
                  <div>Calory (J) : { value.f }</div>
                  <div>Burning Time : { value.g }</div>
                  <div>Material  : { value.h }</div>
                  <div>MOQ   : { value.i }</div>
                  <div>MOQ   : { value.j }</div>
                </div>
              }
              { index === 1 &&
                <div>
                  <div>Heat Content: { value.a }</div>
                  <div>Fixed Carbon : { value.b }</div>
                  <div>Volatite Matter : { value.c }</div>
                  <div>Ash Content : { value.d }</div>
                  <div>Moisture Content : { value.e }</div>
                  <div>Material : { value.f }</div>
                  <div>Ignition time : { value.g }</div>
                  <div>Glowing Time  : { value.h }</div>
                  <div>Gross Calorific   : { value.i }</div>
                  <div>Value   : { value.j }</div>
                  <div>Bulk density   : { value.k }</div>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
      }
      {/* Header */}
        <Navbar/>
      {/* End Header */}

      {/* Jumbotron */}
        <Jumbotron/>
      {/* End Jumbotron */}

      {/* advantages */}
        <Advantages/>
      {/* End advantages */}

      {/* Feature */}
        <Feature/>
      {/* End Feature */}

      {/* Gallery */}
      <div className="w-5/6 mx-auto py-10" id="gallery">
        <h1 className="font-bold text-center text-4xl pb-10">Gallery</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-1">
          <img className="col-span-2" src={image1} alt="" />
          <div className="space-y-1">
            <img src={image2} alt="" />
            <img src={image3} alt="" />
          </div>
        </div>
      </div>
      {/* End Gallery */}


    {/* Carousel */}
      {/* <Carousel/> */}

      <div>
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
              <div className='flex justify-center pb-5'>
                <button onClick={() => cek(1)} className='bg-orange-600 hover:bg-orange-400 text-white  rounded-md py-2 px-4 '>Specification</button>
              </div>  
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
              <div className='flex justify-center pb-5'>
                <button onClick={() => cek(2)} className='bg-orange-600 hover:bg-orange-400 text-white  rounded-md py-2 px-4 '>Specification</button>
              </div> 
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
    </div>
    {/* End Carousel */}

    {/* Team */}
     <Team/>
    {/* End Team */}

    {/* Maps */}
    <div>
      <h1 className='text-center uppercase text-3xl font-bold py-8'>Location</h1>
        <iframe
      className='w-5/6 mx-auto h-96'
      loading="lazy"
      title='maps'
      src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCBsWcQJiEmoNEY3XJZCTEfdxU-jkfyn4M
        &q=PT Syra International">
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
