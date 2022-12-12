import React from 'react'
import user2 from '../../assets/double.png';
import user1 from '../../assets/single.png';
import user3 from '../../assets/triple.png';


const Cards = () => {
  return (
    <>
      <div className="bg-white flex justify-around items-center w-full py-20 px-24 flex-wrap">
        <div className="flex justify-between items-center flex-col gap-3 px-14 rounded-lg py-4 shadow-xl  bg-white hover:scale-105 duration-700 cursor-pointer ">
          <div className="w-24 mx-auto ">
            <img src={user1} alt="" className="w-full h-full object-contain" />
          </div>
          <h2 className="font-semibold text-xl">Single User</h2>
          <h1 className="font-bold text-green-400 text-4xl">$49</h1>
          <h6 className="font-medium text-black text-lg border-b px-8">128gb Storage</h6>
          <h6 className="font-medium text-black text-lg  border-b px-8">1 Granted User</h6>
          <h6 className="font-medium text-black text-lg  border-b px-8">Send Up to 2 GB </h6>
          <button className="bg-green-400 text-black font-medium text-lg px-8 rounded py-2 my-2 hover:bg-black hover:text-green-400 duration-200">Get Started</button>
        </div>
        <div className="flex justify-between items-center flex-col gap-3 px-14 rounded-lg py-4 shadow-xl  bg-white hover:scale-105 duration-700 cursor-pointer border-t-4 border-green-400">
          <div className="w-24 mx-auto ">
            <img src={user2} alt="" className="w-full h-full object-contain" />
          </div>
          <h2 className="font-semibold text-xl">Double User</h2>
          <h1 className="font-bold text-green-400 text-4xl">$99</h1>
          <h6 className="font-medium text-black text-lg  border-b px-8">256gb Storage</h6>
          <h6 className="font-medium text-black text-lg  border-b px-8">2 Granted User</h6>
          <h6 className="font-medium text-black text-lg  border-b px-8">Send Up to 4 GB </h6>
          <button className="text-green-400 bg-black font-medium text-lg px-8 rounded py-2 my-2 hover:bg-green-400 hover:text-black duration-200">Get Started</button>
        </div>
        <div className="flex justify-between items-center flex-col gap-3 px-14 rounded-lg py-4 shadow-xl  bg-white hover:scale-105 duration-700 cursor-pointer ">
          <div className="w-24 mx-auto ">
            <img src={user3} alt="" className="w-full h-full object-contain" />
          </div>
          <h2 className="font-semibold text-xl">Triple User</h2>
          <h1 className="font-bold text-green-400 text-4xl">$149</h1>
          <h6 className="font-medium text-black text-lg  border-b px-8">500gb Storage</h6>
          <h6 className="font-medium text-black text-lg  border-b px-8">3 Granted User</h6>
          <h6 className="font-medium text-black text-lg  border-b px-8">Send Up to 16 GB </h6>
          <button className="bg-green-400 text-black font-medium text-lg px-8 rounded py-2 my-2 hover:bg-black hover:text-green-400 duration-200">Get Started</button>
        </div>
      </div>
    </>
  )
}

export default Cards