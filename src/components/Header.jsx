import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'
export default function Header() {
   const[toggleMenu,setToggleMenu]= useState(false); 

    return <header className="flex justify-between px-5 py-2 bg-secondary" >
        <a className="font-bold font-hero-font text-xl text-black hover:opacity-2 hover:text-white" href='/#' >Javidh Ahammed</a>
        <nav className="hidden md:block">
        <ul className="flex text-white">
            <li><a href="/" className="hover:opacity-2 hover:text-black">Home</a></li>
            <li><a href="#about" className="hover:opacity-2 hover:text-black">About</a></li>
            <li><a href="#projects" className="hover:opacity-2 hover:text-black">Projects</a></li>
            <li><a href="#resume" className="hover:opacity-2 hover:text-black">Resume</a></li>
            <li><a href="#contact" className="hover:opacity-2 hover:text-black">Contact</a></li>
        </ul>
        </nav>
        {toggleMenu && <nav className="block md:hidden">
            <ul onClick={()=> setToggleMenu(!toggleMenu)} className="flex flex-col text-white mobile-nav">
            <li><a href="/" className="hover:opacity-2 hover:text-black">Home</a></li>
            <li><a href="#about" className="hover:opacity-2 hover:text-black">About</a></li>
            <li><a href="#projects" className="hover:opacity-2 hover:text-black">Projects</a></li>
            <li><a href="#resume" className="hover:opacity-2 hover:text-black">Resume</a></li>
            <li><a href="#contact" className="hover:opacity-2 hover:text-black">Contact</a></li>
        </ul>
        </nav>
        }
        <button onClick={()=> setToggleMenu(!toggleMenu)} className='block md:hidden'><Bars3Icon className='text-white h-5'/></button>
    </header>
}