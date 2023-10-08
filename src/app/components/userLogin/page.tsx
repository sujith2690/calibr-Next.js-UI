import Image from 'next/image'
import React from 'react'
import Button from '../button/page'

interface UserData {
    image: string;
    heading: string;
    content: string;
}

const UserLogin: React.FC<{ data: UserData }> = ({ data }) => {
    return (
        <div className="flex flex-col   md:flex-row p-4 md:p-10  bg-[#F5F7FA] md:gap-5">
            <div className='w-full md:w-full lg:w-full xl:w-full flex justify-center items-center'>
                <Image src={data.image} alt={data.heading} width={500} height={24} />
            </div>
            <div className=''>
                <div className='flex flex-col gap-5 ' >
                    <h1 className='text-4xl font-semibold text-[#4D4D4D]'>{data.heading}</h1>
                    <p className='text-sm text-[#717171]'>{data.content}</p>
                </div>
                <div className="mt-5">
                    <Button value='Learn More' />
                </div>
            </div>
        </div>
    )
}

export default UserLogin