import React, { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation"; 
import {product} from '../data';
import { Link, useParams } from 'react-router-dom';

function ProductId() {
  const [spek, setSpek] = useState(0);
  const { id } = useParams();
  const data = product.find((item) => item.id === id);
  return (
    <div>
      <div className='py-3 mb-10 bg-gold px-10'>
        <Link to={`/product/${data['slug']}`} className="flex space-x-2 items-center hover:underline">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </div>
          <div>
            Back to Product
          </div>
        </Link>
      </div>
      <div className="flex">
        <div className="w-7/12">
          <div>
            <Swiper
              pagination={{
                type: "fraction",
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="text-gold"
            >
            {
              data['gambar'].map((item, index) => (
                <SwiperSlide key={index}>
                  <div className='flex h-full'>
                    <div className="m-auto">
                      <div className='w-full'>
                        <div className="flex justify-center">
                          <img src={item} className="w-full px-10" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))
            }
            </Swiper>
          </div>
        </div>
        <div className="w-5/12 px-10 space-y-3">
          <div className='text-2xl'>{data['nama']}</div>
          <div className='font-bold text-3xl'>${data['harga'][spek]}</div>
          <div className="w-full grid grid-cols-2 gap-4" onChange={(e) => console.log(e.target.value)}>
            {
              data['spek'].map((item, index) => (
                <div key={index} className='w-full flex' onClick={() => setSpek(index)}>
                  <button className={`w-full border border-black text-black px-5 py-2 rounded-md ${spek === index ? 'bg-gold' : ''}`}>{item}</button>
                </div>
              ))
            }
          </div>

          <div>
            <button className='bg-gold py-2 px-5 text-center w-full rounded-full hover:bg-yellow-400 font-bold '>Contact Us</button>
          </div>

          <div className='space-y-4'>
            <div className='font-bold text-xl'>Description</div>
            <div className='whitespace-pre-wrap'>
              Our nature has it’s own art
              This star teak stump table is combination of wood working and natural art, no two star table are alike, making this truly one-of-a-kind art. Look carefully at the picture, you will know where the human touch and the touch of nature are. Please be aware that most of the items are vintage/antique and may have small defects or signs of age.

              This star table is made of teak stumps, that are dug up, cleaned, sanded and finished with a lacquer. It’s brings a unique look and feel to your home.

              This teak stump table is made by a professional craftsman or artisans in Indonesia. Each stump table is specially handpicked and is totally unique with its own characteristics and individuality. Therefore, each root table is a little bit different, but all will look stunning for you.

              CUSTOMIZATION available, please message your desired size and shape.
              You can ask any information before add to cart, I'm ready to assist.
            </div>
            <div className='space-y-4'>
              <div>
                <span className='font-bold'>SHIPPING PROCESS:</span>
                <br/>
                <ul className='list-decimal'>
                  <li>
                    Free shipping (port to port)
                  </li>
                  <li>
                    LCL Cargo service. So you must pick it up directly from you nearest port/shipping agent warehouse.
                  </li>
                  <li>
                    All items are packed in secure wooden crates.
                  </li>
                  <li>
                    All items are shipped directly from Indonesia. Import duties, taxes and charges are not included in the item price.
                  These charges are the buyer's responsibility and to be paid by the customer separately. We are not responsible for any of those charges. Please check with your local customs office to determine what these additional charges will be prior to buying. These charges are normally collected by the delivering freight (shipping) company or when you pick up the item. Please do not confuse them for additional shipping charges.
                  </li>
                  <li>
                    Shipping time to USA is 30 - 90 days.
                  </li>
                </ul> 
                If you're living in the USA, be prepared to filling ISF form. As it's required by the US Government.
                <br/>
              </div>
              <div>
                <div className='font-bold'>RETURNS & EXCHANGE:</div>
                I gladly accept cancellations, Request a cancellation within 24 hours of purchase
                <br/>
                I don't accept returns or exchanges, but please contact me if you have any problems with your order.
                <br/>
              </div>

              CUSTOMS & IMPORT TAXES:
              <br/>
              Buyers are responsible for any customs and import taxes that may apply. I'm not responsible for delays due to customs.
              <br/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductId