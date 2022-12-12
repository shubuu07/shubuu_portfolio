import React from 'react'

const Footer = () => {
  return (
    <>
        <div className="flex justify-between items-center flex-wrap text-white py-20 px-24 gap-10 ">
            <div className="w-96">
                <h2 className="text-3xl text-green-400 font-semibold py-1 hover:text-white duration-500 animate-pulse">CodeDev.</h2>
                <p className="text-lg text-gray-400 font-medium">Lorem ipsum dolor sit consectetur adipisicing elit. Aliquid sint molestias itaque?</p>
                <div className="flex items-center gap-4 pt-1 text-center">
                <i class='bx bxl-facebook text-3xl w-10 text-white hover:text-black hover:bg-green-400 duration-500 border-2 rounded-full border-green-400 cursor-pointer' ></i>
                <i className='bx bxl-instagram-alt  text-3xl w-10 text-white hover:text-black hover:bg-green-400 duration-500 border-2 rounded-full border-green-400 cursor-pointer' ></i>
                <i className='bx bxl-twitter  text-3xl w-10 text-white hover:text-black hover:bg-green-400 duration-500 border-2 rounded-full border-green-400 cursor-pointer' ></i>
                <i className='bx bxl-youtube  text-3xl w-10 text-white hover:text-black hover:bg-green-400 duration-500 border-2 rounded-full border-green-400 cursor-pointer'></i>
                </div>
            </div>
            <ul className="flex flex-col gap-3 capitalize ">
                <li className="text-medium text-gray-200 hover:underline hover:text-green-400  duration-300  font-medium cursor-pointer">API Documentation</li>
                <li className="text-medium text-gray-200 hover:underline hover:text-green-400  duration-300  font-medium cursor-pointer">Individuals</li>
                <li className="text-medium text-gray-200 hover:underline hover:text-green-400  duration-300  font-medium cursor-pointer">Photographers</li>
                <li className="text-medium text-gray-200 hover:underline hover:text-green-400  duration-300  font-medium cursor-pointer">Marketing</li>
            </ul>
            <ul className="flex flex-col gap-3 capitalize ">
                <li className="text-medium text-gray-200 hover:underline hover:text-green-400  duration-300  font-medium cursor-pointer">tools & appse</li>
                <li className="text-medium text-gray-200 hover:underline hover:text-green-400  duration-300  font-medium cursor-pointer">Photoshop</li>
                <li className="text-medium text-gray-200 hover:underline hover:text-green-400  duration-300  font-medium cursor-pointer">Android App</li>
                <li className="text-medium text-gray-200 hover:underline hover:text-green-400  duration-300  font-medium cursor-pointer">Design Templates</li>
            </ul>
            <ul className="flex flex-col gap-3 capitalize ">
                <li className="text-medium text-gray-200 hover:underline hover:text-green-400  duration-300  font-medium cursor-pointer">Help & FAQs</li>
                <li className="text-medium text-gray-200 hover:underline hover:text-green-400  duration-300  font-medium cursor-pointer">Contact us</li>
                <li className="text-medium text-gray-200 hover:underline hover:text-green-400  duration-300  font-medium cursor-pointer">Refunds</li>
                <li className="text-medium text-gray-200 hover:underline hover:text-green-400  duration-300  font-medium cursor-pointer">Platform Status</li>
            </ul>
        </div>
    </>
  )
}

export default Footer