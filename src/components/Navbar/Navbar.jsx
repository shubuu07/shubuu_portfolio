import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const [toggle, setToggle] = useState(true)
  return (
    <>
      <div className="">
        <div className="h-20 w-screen flex justify-between items-center px-10 fixed top-0 left-0 z-10 bg-black  md:px-12 sm:px-10">
          <div className="logos">
            <NavLink to="/" className="text-2xl md:text-xl font-bold  text-green-400">CodeDev</NavLink>
          </div>
          <button onClick={() => setToggle(!toggle)} className="block md:hidden lg:hidden xl:hidden">
            {
              toggle ?  <i className='bx bx-menu-alt-right text-white text-4xl'></i>
            :<i className='bx bx-x text-white text-4xl'></i>}

          </button>
          <ul className={` ${toggle ? "justify-between items-center gap-10 hidden  md:flex lg:flex xl:flex fixed top-6 right-5" : " items-center gap-10 h-full pt-10 w-64  fixed top-20 bg-green-400 right-0  flex flex-col  md:hidden lg:hidden xl:hidden"}` }>
            <NavLink to="/" className="cursor-pointer font-semibold text-lg text-white hover:text-green-400 duration-300 " onClick={() => setToggle(!toggle)}>Home</NavLink>
            <NavLink to="/about" className="cursor-pointer font-semibold text-lg text-white hover:text-green-400 duration-300" onClick={() => setToggle(!toggle)}>About</NavLink>
            <NavLink to="/about" className="cursor-pointer font-semibold text-lg text-white hover:text-green-400 duration-300" onClick={() => setToggle(!toggle)}>Services</NavLink>
            <NavLink to="/about" className="cursor-pointer font-semibold text-lg text-white hover:text-green-400 duration-300" onClick={() => setToggle(!toggle)}>Blog</NavLink>
            <NavLink to="/contact" className="cursor-pointer font-semibold text-lg  hover:bg-white hover:text-green-400 duration-300  border  bg-black text-green-400 border-none  px-2 py-1 rounded" onClick={() => setToggle(!toggle)}>Contact</NavLink>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar