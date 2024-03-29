import React, { useEffect, useState } from 'react'
import { Link, useParams  } from 'react-router-dom'
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

import { product, provide } from '../data';

function Product() {
  const [search, setSearch] = useState('');
  const { slug } = useParams();

  const filteredProduct = product.filter((item) => {
    return item.nama.toLowerCase().includes(search.toLowerCase()) || item.slug.toLowerCase().includes(search.toLowerCase());
  });

  useEffect(() => {
    if(slug !== null && slug !== undefined) {
      setSearch(slug);
    }
  }, [slug]);

  return (
    <div className='bg-white min-h-screen font-montserrat'>
      <div className={`space-y-2 md:space-y-0 flex-col md:flex-row flex items-center uppercase py-5 px-10 lg:px-16 duration-300 bg-gold`}>
        <Link to="/" className='font-bold w-full  md:w-1/6'>Syra International</Link>
          <div className='w-full md:w-5/6'>
            <input type="text" name="" value={search} onChange={(e) => setSearch(e.target.value)} className='w-full py-2 px-5 rounded' placeholder='Search a Product' id="" />
          </div>
        </div>
      
      <div className="text-black px-3 md:px-28">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 divide-y-2 divide-x-0 md:divide-y-0 md:divide-x-2 divide-black mt-2">
          { 
            provide.map((item, index) => (
              <div key={index} onClick={() => setSearch(item.slug)} className="text-center pt-2 md:pt-0 font-medium hover:underline hover:text-gold hover:cursor-pointer">
                {item.nama}
              </div>
            ))
          }
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 duration-300'>
          {
            filteredProduct.map((item, index) => (
              <div>
                {
                  item.slug == 'wood-furniture' && (
                    <Link to={`/product/${item.slug}/${item.id}`} key={index} className=" pb-2 rounded duration-500 hover:cursor-pointer">
                      <LazyLoadImage src={item.gambar[0]}
                        alt={`Image ${item.nama}`}
                        effect="blur"
                        className='w-full rounded'
                      />
                      <div className='p-2 space-y-1'>
                        <div className='text-xs font-medium'>
                          Category: <span className='underline'>{item.tipe}</span>
                        </div>
                        <div className='text-sm font-semibold'>
                          {item.nama}
                        </div>
                        <div className='font-bold text-lg'>
                          ${item.harga[0]}
                        </div>
                        <span className='bg-green-300/70 font-medium text-xs rounded py-1 px-2'>
                          free shipping
                        </span>
                      </div>
                    </Link>
                  )
                }

                {
                  item.slug != 'wood-furniture' && (
                    <Link to={`/product/${item.slug}/${item.id}`} key={index} className=" pb-2 rounded duration-500 hover:cursor-pointer hover:underline">
                      <LazyLoadImage src={item.gambar}
                          alt={`Image ${item.nama}`}
                          effect="blur"
                          className='w-full rounded'
                      />
                      <div className='p-2 space-y-1'>
                        <div className='text-sm font-semibold'>
                          {item.nama}
                        </div>
                      </div>
                    </Link>
                  )
                }
              </div>
            ))
          }
          {
            filteredProduct.length === 0 && (
              <div className='text-center font-medium text-2xl'>
                No Product Found
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Product