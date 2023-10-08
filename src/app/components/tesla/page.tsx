import Image from 'next/image'
import React from 'react'
import { BsArrowRight } from 'react-icons/bs';



const Tesla = () => {
    const icons = [, "/logo-2.png", "/logo-3.png", "/logo-4.png", "/logo-5.png", "/logo-7.png"]
    return (
        <div className="flex flex-col   md:flex-row p-4 md:p-10  bg-[#F5F7FA] md:gap-5">
            <div className='w-full md:w-2/5 lg:w-1/3 xl:w-1/4 flex justify-center items-center'>
                <Image src='/tesla.png' alt='' width={300} height={50} />
            </div>

            <div className='w-full md:w-3/5 lg:w-2/3 xl:w-3/4'>
                <p className='text-xs md:text-sm lg:text-base text-[#717171]'>
                    Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
                </p>
                <p className='text-[#4CAF4F] text-sm md:text-base font-semibold mt-2'>Tim Smith</p>
                <p className='text-sm md:text-base text-[#89939E] mt-2'>British Dragon Boat Racing Association</p>
                <div className="flex  justify-between items-center w-full mt-5 cursor-pointer">
                    <Image src="/logo-1.png" alt='' width={40} height={24} />
                    <Image src="/logo-2.png" alt='' width={40} height={24} />
                    <Image src="/logo-3.png" alt='' width={40} height={24} />
                    <Image src="/logo-4.png" alt='' width={40} height={24} />
                    <Image src="/logo-5.png" alt='' width={40} height={24} />
                    <Image src="/logo-7.png" alt='' width={40} height={24} />
                    <p className='text-[#4CAF4F] text-sm md:text-base ml-2 flex items-center gap-2' >Meet All Customers <BsArrowRight /></p>
                    
                </div>
            </div>
        </div>
    )
}

export default Tesla