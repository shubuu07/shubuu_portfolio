import React from 'react'

const NewsEmail = () => {
  return (
    <>
        <div className="flex justify-center items-center py-16 px-8 md:px-14 lg:px-16 xl:px-16  flex-wrap gap-6 md:gap-5 lg:gap-0 xl:gap-0 lg:justify-center text-left md:text-center lg:text-center xl:text-left xl:justify-between">
            <div className="text-white pl-0  xl:pl-4">
                <h3 className="capitalize text-2xl font-medium md:font-semibold lg:font-semibold xl:font-semibold md: md:text-2xl lg:text-3xl xl:text-3xl">Want tips & tricks to optimize your flow 🚀</h3>
                <h6 className="text-2xl md:text-xl lg:text-xl xl:text-xl">sign up to our newsletter and stay up to date</h6>
            </div>
            <div className="">
                <input type="email" name="" id="" className="font-medium text-lg rounded py-2 px-2 my-2 mr-2 focus:outline-none focus:border-none w-72 md:w-80 lg:w-72" placeholder='Enter Email'/>
                <button className="bg-green-400 text-black font-medium text-lg px-7 rounded py-2 my-2 hover:bg-green-500 hover:text-white duration-200">Notify me</button>
                <h5 className="text-white">we care about the protection of your data. Read more</h5>
                <h6 className="text-green-400 underline cursor-pointer">Privacy Policy</h6>
            </div>
        </div>
    </>
  )
}

export default NewsEmail