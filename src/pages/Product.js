import React, { useEffect, useState } from 'react'
import { Link, useParams  } from 'react-router-dom'
import jumbotron from "../images/jumbotron.jpg"

const product = [
  {
    nama: "Kayu Jati",
    slug: "wood-furniture",
  },
  {
    nama: "Bacang",
    slug: "wood-furniture",
  },
  {
    nama: "Keyboard",
    slug: "wood-furniture",
  },
  {
    nama: "Ketoprak",
    slug: "wood-furniture",
  },
];

const provide = [
  {
    nama: "Agriculture",
    slug: "agriculture"
  },
  {
    nama: "Steel",
    slug: "steel"
  },
  {
    nama: "Coal",
    slug: "coal"
  },
  {
    nama: "Biodiesel",
    slug: "biodiesel"
  },
  {
    nama: "Wood Furniture",
    slug: "wood-furniture"
  },
];

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
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 divide-y-2 divide-x-0 md:divide-y-0 md:divide-x-2 divide-black mt-2">
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
              <div key={index} className="border-2 border-black pb-2 rounded duration-300">
                <img src={jumbotron} className='h-[10rem] w-full rounded' alt="asd"/>
                <div className='p-2'>
                  <div className='text-xs'>
                    category: {item.slug}
                  </div>
                  <div className='font-medium text-lg'>
                    {item.nama}
                  </div>
                </div>
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