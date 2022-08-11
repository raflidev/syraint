import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import { Pagination } from "swiper";

// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";

// icon
import long from "../images/Long_Charcoal.png"
import cube from "../images/Cube_Charcoal.png"
import question from "../images/question_mark.png"

function Carousel() {
  const cek = () => {
    console.log("a");
  }
  return (
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
                <button onClick={() => cek()} className='bg-orange-600 hover:bg-orange-400 text-white  rounded-md py-2 px-4 '>Specification</button>
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
                <button className='bg-orange-600 hover:bg-orange-400 text-white  rounded-md py-2 px-4 '>Specification</button>
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
              <div className='flex justify-center pb-5'>
                <button className='bg-orange-600 hover:bg-orange-400 text-white  rounded-md py-2 px-4 '>Specification</button>
              </div> 
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
    </div>
  )
}

export default Carousel