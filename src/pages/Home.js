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
        <section id="why-us" className='px-16 py-20'>
            <div className='uppercase text-gold font-bold text-2xl text-center'>Why Choose Syra?</div>
            <div className='grid grid-cols-3 gap-4 my-16'>
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

        {/* Footer Section */}
        <footer className='bg-black text-white'>
            <div className='flex justify-center'>
                <div className='w-5/6 py-10'>
                    <div className='flex justify-between'>
                        <div className='w-4/12 space-y-3'>
                            <div className='font-bold text-xl'>Syra International</div>
                            <div className='text-sm text-justify'>Syra International is a distributor company that specializes in a wide range of products and services, including Agriculture, Teak Root Furniture, Iron, Biodiesel, and Coal, as well as freight forwarding services such as Inland, Air, and Sea Freight Service. We have a large sales capacity and export their products to various countries. We are dedicated to providing the best service and fulfilling the needs of clients.</div>
                        </div>
                        <div className='w-2/12 space-y-3'>
                            <div className='font-bold text-xl'>Contact Us</div>
                            <div className='text-sm'>Jl. Raya Cikarang Barat No. 1, Cikarang Barat, Bekasi, Jawa Barat 17530</div>
                            <div className='text-sm'>+62 21 8999 9999</div>
                            <div className='text-sm'>
                            </div>
                        </div>
                        <div className='w-2/12 space-y-3'>
                            <div className='font-bold text-xl'>Contact Us</div>
                            <div className='text-sm'>Jl. Raya Cikarang Barat No. 1, Cikarang Barat, Bekasi, Jawa Barat 17530</div>
                            <div className='text-sm'>+62 21 8999 9999</div>
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
