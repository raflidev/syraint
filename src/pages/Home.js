import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import jumbotron from "../images/jumbotron.jpg"
import servicebg from "../images/service.jpg"
import servicebg2 from "../images/service2.jpg"
import {Link} from "react-router-dom"

import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

import {people} from "../data"

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
    bg: jumbotron,
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
        nama: "Mining, Oil and Gas",
        slug: "mining-oil-and-gas"
      },
      {
        nama: "Wood Furniture",
        slug: "wood-furniture"
      },
      {
        nama: "Briquette",
        slug: "briquette"
      },
      {
        nama: "Herbs and Spices",
        slug: "herbs-and-spices"
      }
    ]
  },
  {
    nama: "Service",
    bg: servicebg2,
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
      {
        nama: "Heavy Equipment and Oversized",
        slug: "heavy-equipment-and-oversized"
      },
      {
        nama: 'Service Local Transportation',
        slug: "service-local-transportation"
      },
      {
        nama: "Service Household Removal",
        slug: "service-household-removal"
      }
    ]
  } 
];

function Home() {
  const [nama, setNama] = useState("");
  const [company, setCompany] = useState("");
  const [id, setId] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState("");
  const [spec, setSpec] = useState("");
  const [destination, setDestination] = useState("")
  const [payment, setPayment] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      nama,
      company,
      id,
      phone,
      address,
      product,
      quantity,
      spec,
      destination,
      payment
    }
    if(payment === ""){
      alert("Please choose payment method")
    }else{
      console.log(data);
      var url = `https://api.whatsapp.com/send/?phone=6281297108565&text=Name: ${data.nama} | Company: ${data.company} | ID: ${data.id} | Phone: ${data.phone} | Address: ${data.address} | Product: ${data.product} | Quantity: ${data.quantity} | Specification: ${data.spec} | Destination: ${data.destination} | Payment: ${data.payment}`;
      window.open(url, '_blank', 'noreferrer')
    }
  }

  return (
    <div className='font-montserrat'>
        <Navbar/>
        <section id="home" className='bg-black h-[35rem] bg-cover bg-center' style={{backgroundImage: `url(${servicebg})`}}>
            <div className='flex h-full text-white bg-black/40'>
                <div className='m-auto'>
                    <div className='flex justify-center'>
                        <div className='w-4/6 text-center space-y-10'>
                            <h1 className='font-bold text-3xl lg:text-5xl pt-7 lg:pt-0'>
                                Syra International
                            </h1>
                            <h2 className='text-sm lg:text-lg'>
                            Syra International is a distributor company that specializes in a wide range of products and services, including Agriculture, Teak Root Furniture, Iron, Biodiesel, and Coal, as well as freight forwarding services such as Inland, Air, and Sea Freight Service. We have a large sales capacity and export their products to various countries. We are dedicated to providing the best service and fulfilling the needs of clients.
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Provide Section */}
        <section className='px-2 lg:px-16 py-10 my-32'>
            <h1 className='uppercase text-gold font-bold text-3xl text-center'>we provide your needs</h1>
            <div className='flex justify-center mt-20'>
                <div className='w-full xl:w-4/6 grid grid-cols-1 gap-10 space-y-10'>
                    {provide.map((item, index) => (
                        <div key={index} className="w-full" id={`${item.nama}s`}>
                            <div className='bg-black w-full h-full py-5 lg:py-0 lg:h-[20rem] bg-cover rounded-lg bg-center' style={{backgroundImage: `url(${item.bg})`}}>
                                <div className='flex h-full text-white bg-black/40'>
                                    <div className='m-auto w-full'>
                                        <div className='flex w-full justify-center'>
                                            <div className='w-5/6 text-center space-y-2'>
                                                <div className='font-bold text-3xl'>
                                                    {item.nama}s
                                                </div>
                                                <div className={`w-full grid grid-cols-1 lg:grid-cols-4 font-medium justify-center gap-4 pt-6`}>
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
            <h1 className='uppercase font-bold text-3xl text-center'>Why Choose Syra?</h1>
            <div className='grid grid-cols-1 space-y-10 lg:space-y-0 lg:grid-cols-3 gap-4 my-16'>
                <div className='flex justify-center'>
                    <div className='text-center space-y-3'>
                        <div className='flex justify-center'>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div className='font-bold text-xl'>Innovation</div>
                        <div>We keep working on the ideas of discovering, creating and developing products and services with high appeal in the marketplace / We also try our best to make Syra as the customers first choice.</div>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div className='text-center space-y-3'>
                        <div className='flex justify-center'>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                          </svg>
                        </div>
                        <div className='font-bold text-xl'>Quality</div>
                        <div>We define quality as the action of providing products and services that satisfy customers, good work environments, maximize the delivery of financial result as investors are expected.</div>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div className='text-center space-y-3'>
                        <div className='flex justify-center'>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                          </svg>
                        </div>
                        <div className='font-bold text-xl'>Integrity</div>
                        <div>Integrity is one of the most valuable assets we value the most. We see integrity as an honest act by telling the truth and sticking to what has been agreed</div>
                    </div>
                </div>
            </div>
        </section>
        {/* End Choose Section */}

        {/* Our Client Section */}
        <section className='px-3 md:px-16 py-28'>
          <h1 className='uppercase font-bold text-3xl text-center mb-20'>Our Client</h1>
          <div className='flex justify-center'>
            <Carousel dynamicHeight={true} emulateTouch={true} infiniteLoop={true} centerMode={true} autoPlay={true} className="w-full lg:w-1/2">
              {
                gambar.map((item, index) => (
                      <img src={item} key={index} className="w-full lg:w-1/2" alt="" />
                ))
              }
            </Carousel>
          </div>
        </section>
        {/* End Our Client Section */}

        {/* Our Team */}
        <section id="team" className='bg-gold px-3 md:px-16 py-28'>
        <div className=' text-black'>
          <h1 className='text-center uppercase text-3xl font-bold py-3'>Our Team</h1>
          <div className="w-5/6 mx-auto py-10">
            <div className="grid grid-cols-1 space-y-8 lg:space-y-0 lg:grid-cols-3 gap-5 items-start">
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
                    </div>
                  </div>
                </div>
              ))}

              
            </div>
          </div>
        </div>
        </section>
        {/* End Our Team */}

        {/* FAQ Section */}
        <section id="faq" className='min-h-screen bg-white px-3 md:px-16 py-28'>
          <div>
            <h1 className='text-center uppercase text-3xl font-bold py-3'>FAQ</h1>
            <div className='flex justify-center'>
              <div className='w-full px-3 lg:px-0 lg:w-4/6 space-y-5'>
                <div>
                  <div className='border-2 border-gold py-2 px-3 font-bold rounded-none lg:rounded-r-full'>
                    Q: What are your main products? 
                  </div>
                  <div className='px-3 border-l-2 border-black py-2'>
                    A: We are mainly producing furniture and home decoration products. We mostly use teak wood as our core material because of its flexible nature which would give a wider space to express your imagination.
                  </div>
                </div>
                <div>
                  <div className='border-2 border-gold py-2 px-3 font-bold rounded-none lg:rounded-r-full'>
                    Q: Can you help me customize my own products?
                  </div>
                  <div className='px-3 border-l-2 border-black py-2'>
                    A: We couldn’t be happier to help you create your own products! We believe that it would be a wonderful journey for us. Please give us some notes about your product and the measurements when you contact us.
                  </div>
                </div>
                
                <div>
                  <div className='border-2 border-gold py-2 px-3 font-bold rounded-none lg:rounded-r-full'>
                    Q: How much is the minimum order needed to collaborate with you?
                  </div>
                  <div className='px-3 border-l-2 border-black py-2'>
                    A: We could take as a minimum a 1*20 feet container with the mixed item for your order.
                  </div>
                </div>
                
                <div>
                  <div className='border-2 border-gold py-2 px-3 font-bold rounded-none lg:rounded-r-full'>
                    Q: If I’m about to collaborate with you, what is the lead time needed to complete my order?
                  </div>
                  <div className='px-3 border-l-2 border-black py-2'>
                    A: Our lead time for the first order or new items ordered would be longer due to the preparation. It would take 60-75 days for a 1*40 feet container, and up to 14-30 days for a 1*40 feet container for repeated orders. 
                  </div>
                </div>

                <div>
                  <div className='border-2 border-gold py-2 px-3 font-bold rounded-none lg:rounded-r-full'>
                    Q: I need several certifications for my order, can you help me with it?
                  </div>
                  <div className='px-3 border-l-2 border-black py-2'>
                    A: Surely! We could help you with the certifications needed. Leave us a note about it.
                  </div>
                </div>

                <div>
                  <div className='border-2 border-gold py-2 px-3 font-bold rounded-none lg:rounded-r-full'>
                    Q: I need packaging that is safe for my products, how do you pack it?
                  </div>
                  <div className='px-3 border-l-2 border-black py-2'>
                    A: We will discuss with you the packaging needed for your products, we have a range of single-face, master, and inner cartons, foam, and many more.
                  </div>
                </div>

                <div>
                  <div className='border-2 border-gold py-2 px-3 font-bold rounded-none lg:rounded-r-full'>
                    Q: What payment method do you accept?
                  </div>
                  <div className='px-3 border-l-2 border-black py-2'>
                    A: Our standard payment terms are a 50% down payment and a balance against documents or LC at Sight Irrevocable.
                  </div>
                </div>

                <div>
                  <div className='border-2 border-gold py-2 px-3 font-bold rounded-none lg:rounded-r-full'>
                    Q: About the shipping method, what do you usually do?
                  </div>
                  <div className='px-3 border-l-2 border-black py-2'>
                    A: We usually do Freight on Board (FOB) at Tanjung Priok Port, Jakarta, and Freight on Board (FOB) at Tanjung Mas, Semarang. If you have any special request about it, please leave us a note when you contact us.
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
        {/* End FAQ Section */}

        {/* Order Section */}
        <section id="order" className='min-h-screen bg-white px-3 md:px-16 py-28'>
          <form onSubmit={submitHandler}>
            <h1 className='text-center uppercase text-3xl font-bold py-3'>Form Manual Order</h1>
            <div className='flex justify-center mt-10'>
              <div className='w-full px-3 lg:px-0 lg:w-4/6 space-y-8'>
                <div className='block lg:flex space-x-0 space-y-8 lg:space-y-0 lg:space-x-5'>
                  <div className='w-full lg:w-1/2'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='name'>
                      Order Name*
                    </label>
                    <input
                      className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                      id='name'
                      value={nama}
                      onChange={(e) => setNama(e.target.value)}
                      type='text'
                      placeholder='Order Name'
                      required
                    />
                  </div>
                  <div className='w-full lg:w-1/2'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='company'>
                      Company Name*
                    </label>
                    <input
                      className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                      id='name'
                      value={company}
                      type='text'
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder='Company Name'
                      required
                    />
                  </div>
                </div>

                <div className='block lg:flex space-x-0 space-y-8 lg:space-y-0 lg:space-x-5'>
                  <div className='w-full lg:w-1/2'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='passportID'>
                      ID Passport Number / NIK*
                    </label>
                    <input
                      className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                      id='name'
                      value={id}
                      onChange={(e) => setId(e.target.value)}
                      type='text'
                      placeholder='ID Passport Number / NIK'
                      required
                    />
                  </div>
                  <div className='w-full lg:w-1/2'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='name'>
                      Phone / Whatsapp Number*
                    </label>
                    <input
                      className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                      id='name'
                      value={phone}
                      type='text'
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder='Phone / Whatsapp Number'
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='address'>
                      Full Address*
                  </label>
                  <textarea value={address} onChange={(e) => setAddress(e.target.value)}  name="address" id="address" className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'  rows="10" />
                </div>

                <div className='block lg:flex space-x-0 space-y-8 lg:space-y-0 lg:space-x-5'>
                  <div className='w-full lg:w-1/2'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='passportID'>
                      Product Category*
                    </label>
                    <input
                      className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                      id='name'
                      value={product}
                      onChange={(e) => setProduct(e.target.value)}
                      type='text'
                      placeholder='Product Category'
                      required
                    />
                  </div>
                  <div className='w-full lg:w-1/2'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='name'>
                      Product Quantity (Ton)*
                    </label>
                    <input
                      className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                      id='name'
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                      type='text'
                      placeholder='Product Quantity'
                      required
                    />
                  </div>
                </div>

                <div className='block lg:flex space-x-0 space-y-8 lg:space-y-0 lg:space-x-5'>
                  <div className='w-full lg:w-1/2'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='passportID'>
                      Spesification*
                    </label>
                    <input
                      className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                      id='name'
                      value={spec}
                      onChange={(e) => setSpec(e.target.value)}
                      type='text'
                      placeholder='Spesification'
                      required
                    />
                  </div>
                  <div className='w-full lg:w-1/2'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='name'>
                      Destination / Port*
                    </label>
                    <input
                      className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                      id='name'
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      type='text'
                      placeholder='Destination / Port'
                      required
                    />
                  </div>
                </div>

                <div className='flex justify-center'>
                  <div className='w-full lg:w-auto'>
                      <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='name'>
                        Payment Method*
                      </label>
                      <div className='space-x-4'>
                        <input type="radio" name="payment" value="L/C" onClick={() => setPayment("L/C")} />
                        <label>L/C</label>
                      </div>
                      <div className='space-x-4'>
                        <input type="radio" name="payment" value="TT/CC" onClick={() => setPayment("TT/CC")} />
                        <label>TT/CC</label>
                      </div>
                  </div>

                </div>

                <div className='flex justify-center'>
                  <button type='submit' className='py-2 px-10 font-medium rounded border border-gold hover:bg-gold hover:text-black'>Submit</button>
                </div>
              </div>
            </div>
          </form>
        </section>
        {/* End Order Section */}

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
