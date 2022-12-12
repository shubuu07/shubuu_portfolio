import React from 'react'
import laptop from '../assets/laptop.jpeg'

const Hero = () => {
    return (
        <div className="bg-white w-full py-12 px-8 lg:px-24 xl:px-24  ">
            <div className="flex justify-center  items-center flex-wrap md:flex-nowrap lg:flex-nowrap xl:flex-nowrap">
                <div className="">
                    <img src={laptop} alt="laptop" className="w-full h-full object-contain " />
                </div>
                <div className="">
                    <h1 className="text-xl text-green-400 font-semibold py-1 md:text-2xl lg:text-2xl xl:text-2xl">DATA ANALYTICS DASHBOARD</h1>
                    <h4 className="text-2xl text-black font-medium pb-1 md:text-3xl lg:text-3xl xl:text-3xl">Manage Data Analytics Centrally</h4>
                    <p className="text-sm text-black md:text-base lg:text-base xl:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ab neque accusantium? Quaerat porro adipisci tempora natus quo suscipit voluptas delectus. Delectus, sunt unde ex nostrum possimus incidunt, vitae mollitia consequuntur accusantium eum magni doloribus quis.</p>
                    <button className="bg-green-400 text-black font-medium text-base md:text-lg lg:text-lg xl:text-lg px-8 rounded py-2 my-2 hover:bg-green-500 hover:text-white duration-200">Get Started</button>
                </div>
               
            </div>

        </div>
    )
}

export default Hero