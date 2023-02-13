import React, { useState } from 'react'
import {Link} from 'react-scroll';


export default function Navbar() {
    const [colorchange, setColorchange] = useState(false);
    const [show, setShow] = useState(false);
    const changeNavbarColor = () =>{
        if(window.scrollY >= 80){
            setColorchange(true);
        } else{
            setColorchange(false);
        }
    };
    window.addEventListener('scroll', changeNavbarColor);
  return (
    <div className='fixed top-0 w-full text-white z-20'> 
        <div className={`flex justify-between items-center uppercase py-5 px-10 lg:px-16 duration-300 ${colorchange ? 'bg-black' : 'bg-transparent'}`}>
            <div className='font-bold'>Syra International</div>
            <div className='hidden md:inline space-x-10 text-xs font-medium'>
                <Link to="home" className='cursor-pointer hover:text-gold' activeClass="text-gold font-bold" spy={true} smooth={true} duration={200} offset={-100}>Home</Link>
                <Link to="Products" className='cursor-pointer hover:text-gold' activeClass="text-gold font-bold" spy={true} smooth={true} duration={200} offset={-300}>Products</Link>
                <Link to="Services" className='cursor-pointer hover:text-gold' activeClass="text-gold font-bold" spy={true} smooth={true} duration={200} offset={-300}>Services</Link>
                <Link to="why-us" className='cursor-pointer hover:text-gold' activeClass="text-gold font-bold" spy={true} smooth={true} duration={200} offset={-100}>Why Choose Us</Link>
                <Link to="team" className='cursor-pointer hover:text-gold' activeClass="text-gold font-bold" spy={true} smooth={true} duration={200} offset={100}>Team</Link>
                <Link to="contact" className='cursor-pointer hover:text-gold' activeClass="text-gold font-bold" spy={true} smooth={true} duration={200} offset={-100}>Contact Us</Link>
                <Link to="order" className='bg-gold p-2 rounded cursor-pointer text-black hover:bg-yellow-500' activeClass="text-gold font-bold" spy={true} smooth={true} duration={200} offset={0}>Manual Order</Link>
            </div>
            <div className='inline md:hidden' onClick={() => setShow(!show)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </div>
        </div>
            {
                show &&
                <div className='inline md:hidden'>
                  <div className={`absolute left-0 top-16 w-full bg-black`}>
                      <div className='grid grid-cols-1 space-y-3 py-3 text-center uppercase'>
                        <Link to="home" className='cursor-pointer hover:text-gold' activeClass="text-gold font-bold" spy={true} smooth={true} duration={200} offset={-100}>Home</Link>
                        <Link to="Products" className='cursor-pointer hover:text-gold' activeClass="text-gold font-bold" spy={true} smooth={true} duration={200} offset={-300}>Products</Link>
                        <Link to="Services" className='cursor-pointer hover:text-gold' activeClass="text-gold font-bold" spy={true} smooth={true} duration={200} offset={-300}>Services</Link>
                        <Link to="why-us" className='cursor-pointer hover:text-gold' activeClass="text-gold font-bold" spy={true} smooth={true} duration={200} offset={-100}>Why Choose Us</Link>
                        <Link to="team" className='cursor-pointer hover:text-gold' activeClass="text-gold font-bold" spy={true} smooth={true} duration={200} offset={100}>Team</Link>
                        <Link to="contact" className='cursor-pointer hover:text-gold' activeClass="text-gold font-bold" spy={true} smooth={true} duration={200} offset={100}>Contact Us</Link>
                        <Link to="order" className='cursor-pointer hover:text-gold' activeClass="text-gold font-bold" spy={true} smooth={true} duration={200} offset={0}>Manual Order</Link>
                      </div>
                  </div>
                </div>
            }
    </div>
  )
}
