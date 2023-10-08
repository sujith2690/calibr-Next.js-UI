import Image from 'next/image';
import React from 'react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { BsSend } from 'react-icons/bs';
import { CiBasketball } from 'react-icons/ci';

const Footer = () => {
    const icons = [<FaInstagram />, <FaTwitter />, <FaYoutube />, <CiBasketball/>];
    const content = [
        {
            heading: 'Company',
            text1: 'About us',
            text2: 'Blog',
            text3: 'Contact us',
            text4: 'Pricing us',
            text5: 'Testimonials',
        },
        {
            heading: 'Support',
            text1: 'Help Center',
            text2: 'Terms of Service',
            text3: 'Legal',
            text4: 'Privacy Policy',
            text5: 'Status',
        },
    ]
    return (
        <div className='bg-[#263238] p-4 text-white flex justify-around'>
            <div className='flex gap-4 flex-col'>
                <div className='div'>
                    <Image src='/Logo.png' alt='User Logo' width={150} height={24} />
                </div>
                <p>All right reserved</p>

                <div className='flex justify-around'>
                    {icons.map((item, i) => (
                        <p key={i} className="flex items-center justify-center w-5 h-5 rounded-full sm:w-8 sm:h-8 bg-[#7e7d7d] text-gray-50">
                            {item}
                        </p>
                    ))}
                </div>
            </div>
            <div className='grid grid-cols-3'>
                {content.map((item, i) => {
                    return (
                        <div>
                            <p className='text-md mb-4'>{item.heading}</p>
                            <p className='text-sm text-[#f5f7fac2] mb-3'>{item.text1}</p>
                            <p className='text-sm text-[#f5f7fac2] mb-3'>{item.text2}</p>
                            <p className='text-sm text-[#f5f7fac2] mb-3'>{item.text3}</p>
                            <p className='text-sm text-[#f5f7fac2] mb-3'>{item.text4}</p>
                            <p className='text-sm text-[#f5f7fac2] mb-3'>{item.text5}</p>
                        </div>
                    )
                })}
                <div>
                    <p className='text-md'>Stay Upto date</p>
                    <div className="relative mt-5">
                        <input type="search" name="Search" placeholder="Search..." className="w-32 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none bg-gray-600 text-gray-800" />
                        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                            <button type="submit" title="Search" className="p-1 focus:outline-none focus:ring">
                                <BsSend />
                            </button>
                        </span>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Footer;
