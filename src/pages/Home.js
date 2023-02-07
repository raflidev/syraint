import React from 'react'
import Navbar from '../components/Navbar'
import jumbotron from "../images/jumbotron.jpg"
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination, Navigation } from "swiper";
import {Link} from "react-router-dom"

import {people} from "../data"

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation"; 

import coal1 from "../images/coal/1.png";
import coal2 from "../images/coal/2.png";
import coal3 from "../images/coal/3.png";
import coal4 from "../images/coal/4.png";
import coal5 from "../images/coal/5.png";


import wood1 from "../images/wood/1.jpeg"
import wood2 from "../images/wood/2.jpeg"
import wood3 from "../images/wood/3.jpeg"
import wood4 from "../images/wood/4.jpeg"
import wood5 from "../images/wood/5.jpeg"
import wood6 from "../images/wood/6.jpeg"
import wood7 from "../images/wood/7.jpeg"
import wood8 from "../images/wood/8.jpeg"
import wood9 from "../images/wood/9.jpeg"
import wood10 from "../images/wood/10.jpeg"
import wood11 from "../images/wood/11.jpeg"
import wood12 from "../images/wood/12.jpeg"
import wood13 from "../images/wood/13.jpeg"

const gambar = [coal1, coal2, coal3, coal4, coal5, wood1, wood2, wood3, wood4, wood5, wood6, wood7, wood8, wood9, wood10, wood11, wood12, wood13];

const provide = [
  {
    nama: "Product",
    sub:[
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
    ]
  },
  {
    nama: "Service",
    sub: [
      {
        nama: "Air Freight",
        slug: "air-feight"
      },
      {
        nama: "Sea Freight",
        slug: "sea-freight"
      },
      {
        nama: "Custom Brokerage",
        slug: "custom-brokerage"
      },
      {
        nama: "Inland Service",
        slug: "inland-service"
      },
    ]
  } 
];

function Home() {
  return (
    <div className='font-montserrat'>
        <Navbar/>
        <section id="home" className='bg-black h-[35rem] bg-cover bg-center' style={{backgroundImage: `url(${jumbotron})`}}>
            <div className='flex h-full text-white bg-black/40'>
                <div className='m-auto'>
                    <div className='flex justify-center'>
                        <div className='w-4/6 text-center space-y-10'>
                            <div className='font-bold text-5xl'>
                                Syra International
                            </div>
                            <div className='text-sm lg:text-lg'>
                            Syra International is a distributor company that specializes in a wide range of products and services, including Agriculture, Teak Root Furniture, Iron, Biodiesel, and Coal, as well as freight forwarding services such as Inland, Air, and Sea Freight Service. We have a large sales capacity and export their products to various countries. We are dedicated to providing the best service and fulfilling the needs of clients.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Provide Section */}
        <section className='px-2 lg:px-16 py-10 my-32'>
            <div className='uppercase text-gold font-bold text-3xl text-center'>we provide your needs</div>
                <div className='flex justify-center mt-20'>
                    <div className='w-full lg:w-4/6 grid grid-cols-1 gap-10 space-y-10'>
                        {provide.map((item, index) => (
                            <div key={index} className="w-full" id={`${item.nama}s`}>
                                <div className='bg-black w-full h-[20rem] bg-cover rounded-lg bg-center' style={{backgroundImage: `url(${jumbotron})`}}>
                                    <div className='flex h-full text-white bg-black/40'>
                                        <div className='m-auto w-full'>
                                            <div className='flex w-full justify-center'>
                                                <div className='w-5/6 text-center space-y-2'>
                                                    <div className='font-bold text-3xl'>
                                                        {item.nama}s
                                                    </div>
                                                    <div className={`w-full grid grid-cols-2 md:grid-cols-${item.sub.length} font-medium justify-center gap-4 pt-6`}>
                                                      {item.sub.map((sub, index) => (
                                                        <Link to={`/${item.nama}/${sub.slug}`} className='bg-gold px-2 h-16 bg-cover bg-center text-black hover:cursor-pointer duration-200 rounded-md hover:bg-black hover:text-gold' key={index}>
                                                          <div className='flex h-full'>
                                                            <div className="m-auto">
                                                              {sub.nama} 
                                                            </div>
                                                          </div>
                                                        </Link>
                                                      ))
                                                      }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
        </section>
        {/* End Provide Section */}

        {/* Choose Section */}
        <section id="why-us" className='px-3 md:px-16 py-28 text-black bg-gold'>
            <div className='uppercase font-bold text-3xl text-center'>Why Choose Syra?</div>
            <div className='grid grid-cols-1 space-y-10 lg:space-y-0 lg:grid-cols-3 gap-4 my-16'>
                <div className='flex justify-center'>
                    <div className='text-center space-y-3'>
                        <div className='font-bold text-xl'>Innovation</div>
                        <div>We keep working on the ideas of discovering, creating and developing products and services with high appeal in the marketplace / We also try our best to make Syra as the customers first choice.</div>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div className='text-center space-y-3'>
                        <div className='font-bold text-xl'>Quality</div>
                        <div>We define quality as the action of providing products and services that satisfy customers, good work environments, maximize the delivery of financial result as investors are expected.</div>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div className='text-center space-y-3'>
                        <div className='font-bold text-xl'>Integrity</div>
                        <div>Integrity is one of the most valuable assets we value the most. We see integrity as an honest act by telling the truth and sticking to what has been agreed</div>
                    </div>
                </div>
            </div>
        </section>
        {/* End Choose Section */}

        {/* Our Client Section */}
        <section className='px-3 md:px-16 py-28'>
          <div className='uppercase font-bold text-3xl text-center mb-20'>Our Client</div>
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
            gambar.map((item, index) => (
              <SwiperSlide key={index}>
                <div className='flex h-full'>
                  <div className="m-auto">
                    <div className='w-full'>
                      <div className="flex justify-center">
                        <img src={item} className="w-full md:w-1/2" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))
          }
          </Swiper>
          </div>
        </section>
        {/* End Our Client Section */}

        {/* Our Team */}
        <section id="team" className='bg-gold px-3 md:px-16 py-28'>
        <div className=' text-black'>
        <h1 className='text-center uppercase text-3xl font-bold py-3'>Our Team</h1>
        <div className="w-5/6 mx-auto py-10">
          <div className="grid grid-cols-1 space-y-4 lg:space-y-0 lg:grid-cols-3 gap-5 items-start">
            { people.map((item, index) => (
              <div>
                <img src={item.gambar} className='mx-auto w-48 h-48 bg-red-100 rounded-full mb-5' alt="" srcset="" />
                <div className='space-y-3 text-center'>
                  <div className='font-bold text-xl uppercase'>{item.nama}</div>
                  <div className='text-lg'>{item.jabatan}</div>
                  <div className='italic'>{item.quotes}</div>
                  <div className='flex justify-center space-x-5 pt-2 pb-8'>
                    {
                      item.links.map((sub, index) => (
                        <a href={sub.url} target="_blank" rel="noreferrer">
                          <img src={sub.icon} className="text-black hover:bg-orange-700 p-1 hover:rounded hover:cursor-pointer" alt="" />
                        </a>
                      ))
                    }
{/*                     
                    <a href="https://www.facebook.com/yudyhadiwibowo/" target="_blank" rel="noreferrer">
                      <img src={facebook} className="text-white hover:bg-orange-700 p-1 hover:rounded hover:cursor-pointer" alt="" />
                    </a>
                    <a href="http://www.instagram.com/yudyhadi" target="_blank" rel="noreferrer">
                      <img src={instagram} className="text-white hover:bg-orange-700 p-1 hover:rounded hover:cursor-pointer" alt="" />
                    </a> */}
                  </div>
                </div>
              </div>
            ))}

            
          </div>
        </div>
      </div>
        </section>
        {/* End Our Team */}

        {/* Footer Section */}
        <footer id="contact" className='bg-black text-white'>
            <div className='flex justify-center'>
                <div className='px-5 lg:px-0 w-full lg:w-5/6 py-10'>
                    <div className='block lg:flex justify-between space-y-5 lg:space-y-0'>
                        <div className='w-full lg:w-6/12 space-y-3'>
                            <div className='font-bold text-xl'>Syra International</div>
                            <div className='text-sm text-justify'>Syra International is a distributor company that specializes in a wide range of products and services, including Agriculture, Teak Root Furniture, Iron, Biodiesel, and Coal, as well as freight forwarding services such as Inland, Air, and Sea Freight Service. We have a large sales capacity and export their products to various countries. We are dedicated to providing the best service and fulfilling the needs of clients.</div>
                        </div>
                        <div className='w-full lg:w-3/12 space-y-3'>
                            <div className='font-bold text-xl'>Contact Us</div>
                            <div className='text-sm'>Indonesia, Bekasi. Medan Satria, Pejuang Jaya. Komando Raya Street.</div>
                            <div className='text-sm'>+62 812-9710-8565</div>
                            <div className='text-sm'>syra.ind@gmail.com</div>
                            <div className='text-sm'>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

        {/* End Footer Section */}
    </div>
  )
}

export default Home
