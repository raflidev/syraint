import React, { useState } from 'react'
import {Link} from 'react-scroll';


export default function Navbar() {
    const [colorchange, setColorchange] = useState(false);
    const changeNavbarColor = () =>{
        if(window.scrollY >= 80){
            setColorchange(true);
        } else{
            setColorchange(false);
        }
    };
    window.addEventListener('scroll', changeNavbarColor);
  return (
    <div className='fixed top-0 w-full text-white'> 
        <div className={`flex justify-between items-center uppercase py-5 px-16 duration-300 ${colorchange ? 'bg-black' : 'bg-transparent'}`}>
            <div className='font-bold'>Syra International</div>
            <div className='space-x-16 text-xs font-medium'>
                <Link to="home" activeClass="text-gold font-bold" spy={true} smooth={true} duration={200} offset={-100}>Home</Link>
                <Link to="Product" activeClass="text-gold font-bold" spy={true} smooth={true} duration={200} offset={-300}>Products</Link>
                <Link to="Service" activeClass="text-gold font-bold" spy={true} smooth={true} duration={200} offset={-300}>Services</Link>
                <Link to="why-us" activeClass="text-gold font-bold" spy={true} smooth={true} duration={200} offset={-100}>Why Choose Us</Link>
            </div>
        </div>
    </div>
  )
}
