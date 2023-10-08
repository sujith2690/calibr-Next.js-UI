import React from 'react'
import { BsArrowRight } from 'react-icons/bs';

const FooterHead = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-4 p-10 bg-[#F5F7FA] mt-10'>
            <div className='text-center'>
                <h1 className='text-6xl font-semibold text-[#4D4D4D]'>
                    Pellentesque suscipit <br /> <span> fringilla libero eu.</span>
                </h1>
            </div>
            <div className='w-40'>
                <button className='flex items-center gap-3 justify-center bg-[#4CAF4F] p-3 rounded-md text-white'>
                    Get a Demo <BsArrowRight />
                </button>
            </div>
        </div>

    )
}

export default FooterHead