import Image from 'next/image';
import React from 'react';

const Manage = () => {
    const data = [
        {
            image: '/mem.png',
            heading: 'Membership Organizations',
            content: 'Our membership management software provides full automation of membership renewal and payments',
        },
        {
            image: '/nat.png',
            heading: 'National Association',
            content: 'Our membership management software provides full automation of membership renewal and payments',
        },
        {
            image: '/club.png',
            heading: 'Clubs And Groups',
            content: 'Our membership management software provides full automation of membership renewal and payments',
        },
    ];

    return (
        <div className='p-5'>
            <div className=' text-center'>
                <h1 className='text-4xl font-bold text-[#4D4D4D]'>
                    Manage Your Entire Community <br /> <span>In a single system</span>
                </h1>
                <p className='mt-3 text-sm text-[#717171]'>Who is Nextcent Suitable for?</p>
            </div>
            <div className='flex justify-around mt-5'>
                {data.map((item, i) => (
                    <div key={i} className='shadow-md flex flex-col gap-2 text-center items-center w-60 p-5'>
                        <div className=' flex  justify-center '>
                            <Image src={item.image} alt={item.heading} width={60} height={24} />
                        </div>
                        <p className='text-2xl text-[#4D4D4D] font-semibold'>{item.heading}</p>
                        <p className='text-sm text-[#717171]'>{item.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Manage;
