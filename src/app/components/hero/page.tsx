import React from 'react'
import Image from 'next/image'

const Hero = () => {
    return (
        <div className="bg-[#F5F7FA] px-10">
            <div className="grid grid-cols-[6fr,3fr] p-10 items-center bg-[#F5F7FA] ">
                <div className='flex flex-col gap-5' >
                    <h1 className='text-6xl font-semibold'>
                        Lessons and insights <br />
                    </h1>
                    <h1 className='text-[#4CAF4F] text-6xl font-semibold'>from 8 years</h1>
                    <p>Where to grow your business as a photographer: site or social media?</p>
                    <div className="w-32">
                        <button
                            className='px-5 py-2 text-white bg-[#4CAF4F] rounded-sm text-sm'>
                            Register
                        </button>
                    </div>
                </div>
                <div>
                    <Image src="/Illustration.png" alt="User Logo" width={300} height={24} />
                </div>
            </div>
            <div className=" flex items-center justify-center gap-1 p-5">
                <div className="w-2 h-2 bg-[#4CAF4F] rounded"></div>
                <div className="w-2 h-2 bg-[#93d195] rounded"></div>
                <div className="w-2 h-2 bg-[#93d195] rounded"></div>
            </div>
        </div>
    )
}

export default Hero