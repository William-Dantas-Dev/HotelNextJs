"use client";
import NavLink from './NavLink';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from 'react';
import MenuOverlay from './MenuOverlay';

const navLinks = [
  {
    title: "Como Reservar",
    path: "#",
  },
  {
    title: "Sobre Nós",
    path: "#",
  },
  {
    title: "Informações",
    path: "#",
  },  
  {
    title: "Contato",
    path: "#",
  },
]
const NavMenu = ({ }: {
}) => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className='z-10 bg-opacity-90 bg-white'>
      <div className='flex flex-wrap items-center justify-between mx-auto px-8 md:px-20 py-4 h-24'>
        <Link href={"/"} className='text-2xl md:text-3xl text-gray-600 font-semibold'>
          LOGO
        </Link>
        <div className='mobile-menu block md:hidden'>
        {
          navbarOpen ? (
            <button onClick={() => setNavbarOpen(false)} className='flex items-center px-3 py-2 border rounded border-gray-800 text-gray-800 hover:text-gray-600 hover:border-gray-600'>
              <XMarkIcon className='h-5 w-5'/>
            </button>
          ) : (
            <button onClick={() => setNavbarOpen(true)} className='flex items-center px-3 py-2 border rounded border-gray-800 text-gray-800 hover:text-gray-600 hover:border-gray-600'>
              <Bars3Icon className='h-5 w-5'/>
            </button>
          )
        }
        </div>
        <div className='menu hidden md:block md:w-auto' id='navbar'>
          <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen && <MenuOverlay links={navLinks} />}
    </nav>
  )
  
}

export default NavMenu;