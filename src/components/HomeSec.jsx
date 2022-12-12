import React from 'react'
import Typed from 'react-typed';

const HomeSec = () => {
    return (
        <>  <div className="flex justify-center items-center h-screen w-full text-white px-12 flex-wrap">
            <div className="flex justify-center items-center flex-col gap-2 w-full">
                <h2 className="text-green-400 font-semibold lg:text-lg xl:text-lg  uppercase ">Growing With Data Analytics</h2>
                <h1 className="text-white font-bold text-5xl pt-1 pb-2">Grow With Data.</h1>

                <div className="flex items-center">
                    <h5 className="text-white font-bold text-3xl pb-3">Faster , Flexable Financing For
                    </h5><Typed
                        className="text-gray-500 font-bold text-3xl pb-3 pl-2"
                        strings={[
                            'BTB',
                            'BTC',
                            'FCC']}
                        typeSpeed={120}
                        backSpeed={140}
                        loop />
                </div>
                <p className="text-gray-500 font-semibold capitalize  text-lg text-center">Monitor Your Data Analytics to increase revenue for BTC, BTB & SASS platforms. </p>
                <button className="bg-green-400 text-black font-medium text-lg px-8 rounded py-2 my-2 hover:bg-green-500 hover:text-white duration-200">Get Started</button>
            </div>
        </div>
        </>
    )
}

export default HomeSec