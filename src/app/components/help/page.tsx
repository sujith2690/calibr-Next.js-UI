import React from 'react'
import Image from 'next/image'

const Help = ({ }) => {

    const localData = [
        {
            icon: '/user.png',
            value: '2,245,341',
            type: 'Members'
        },
        {
            icon: '/hand.png',
            value: '46,328',
            type: 'Clubs'
        },
        {
            icon: '/finger.png',
            value: '828,867',
            type: 'Event Booking'
        },
        {
            icon: '/payment.png',
            value: '1,926,436',
            type: 'Payments'
        },

    ]
    return (
        <div className="bg-[#F5F7FA] flex items-center justify-around p-5 py-10">
            <div className="div">
                <h1 className='text-4xl font-semibold text-[#4D4D4D]'>Helping a local</h1>
                <h1 className='text-4xl text-[#4CAF4F]'>business reinvent itself</h1>
                <p>We reached here with our hard work and dedication</p>
            </div>
            <div>
                <div className="grid grid-cols-2 gap-4 ">
                    {localData.map((item, i) => (
                        <div key={i} className='flex gap-2'>
                            <div className='text-xm'>
                                <Image src={item.icon} alt={item.value} width={50} height={10} />
                            </div>
                            <div>
                                <h1 className='text-xl font-semibold text-[#4D4D4D] '>{item.value}</h1>
                                <p className='text-sm'>{item.type}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Help