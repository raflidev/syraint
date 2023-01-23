import React from 'react'
import Navbar from '../components/Navbar'
import jumbotron from "../images/jumbotron.jpg"

const provide = ['Product', 'Service'];

function Home() {
  return (
    <div className='font-montserrat'>
        <Navbar/>
        <section id="home" className='bg-black h-[35rem] bg-cover bg-center' style={{backgroundImage: `url(${jumbotron})`}}>
            <div className='flex h-full text-white bg-black/40'>
                <div className='m-auto'>
                    <div className='flex justify-center'>
                        <div className='w-4/6 text-center space-y-2'>
                            <div className='font-bold text-4xl'>
                                Syra International
                            </div>
                            <div className='text-lg'>
                            Syra International is a distributor company that specializes in a wide range of products and services, including Agriculture, Teak Root Furniture, Iron, Biodiesel, and Coal, as well as freight forwarding services such as Inland, Air, and Sea Freight Service. We have a large sales capacity and export their products to various countries. We are dedicated to providing the best service and fulfilling the needs of clients.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Provide Section */}
        <section className='px-16 py-10'>
            <div className='uppercase text-gold font-bold text-2xl text-center'>we provide your needs</div>
                <div className='flex justify-center mt-20'>
                    <div className='w-4/6 grid grid-cols-1 gap-4'>
                        {provide.map((item, index) => (
                            <div key={index} id={item}>
                                <div className='bg-black w-full h-[20rem] bg-cover rounded-lg bg-center' style={{backgroundImage: `url(${jumbotron})`}}>
                                    <div className='flex h-full text-white bg-black/40'>
                                        <div className='m-auto'>
                                            <div className='flex justify-center'>
                                                <div className='w-4/6 text-center space-y-2'>
                                                    <div className='font-bold text-lg'>
                                                        {item}
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
        <section id="why-us" className='px-16 py-10'>
            <div className='uppercase text-gold font-bold text-2xl text-center'>Why Choose Syra?</div>
            <div className='grid grid-cols-3 gap-4'>
                <div className='flex justify-center'>
                    <div>
                        <div>Logo</div>
                        <div>Bla</div>
                        <div>asd</div>
                    </div>
                </div>
            </div>
        </section>
        {/* End Choose Section */}
    </div>
  )
}

export default Home
