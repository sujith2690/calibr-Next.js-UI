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
        <div className="grid grid-cols-[4fr,6fr] p-10 items-center ">
            <div>
                <Image src={data.image} alt={data.heading} width={500} height={24} />
            </div>
            <div className=''>
                <div className='flex flex-col gap-5 ' >
                    <h1 className='text-2xl font-semibold text-[#4D4D4D]'>{data.heading}</h1>
                    <p className='text-xs text-[#717171]'>{data.content}</p>
                </div>
                <div className="mt-5">
                    <Button value='Learn More' />
                </div>
            </div>
        </div>
    )
}

export default UserLogin