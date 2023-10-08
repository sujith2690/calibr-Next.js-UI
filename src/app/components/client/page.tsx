import React from 'react'
import Image from 'next/image'

const Client = () => {
    return (
        <div className='flex  flex-col items-center gap-5 mt-5'>
            <h1 className='text-4xl font-bold text-[#4D4D4D]'>Our Clients</h1>
            <p className='text-[#717171]'>We have been working with some Fortune 500+ clients</p>
            <div className='flex justify-around w-full mb-5'>
                <Image src="/logo-1.png" alt="" width={40} height={24} />
                <Image src="/logo-2.png" alt="" width={40} height={24} />
                <Image src="/logo-3.png" alt="" width={40} height={24} />
                <Image src="/logo-4.png" alt="" width={40} height={24} />
                <Image src="/logo-5.png" alt="" width={40} height={24} />
                <Image src="/logo-7.png" alt="" width={40} height={24} />
            </div>
        </div>


    )
}

export default Client