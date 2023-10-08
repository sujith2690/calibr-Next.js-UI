import Image from 'next/image'
import React from 'react'
import { BsArrowRight } from 'react-icons/bs';


const Caring = () => {

    const data = [
        {
            image: '/caring-1.png',
            content: 'Creating Streamlined Safeguarding Processes with OneRen',
        },
        {
            image: '/caring-2.png',
            content: 'What are your safeguarding responsibilities and how can you manage them?',
        }
        ,
        {
            image: '/caring-3.png',
            content: 'Revamping the Membership Model with Triathlon Australia',
        }
    ]
    return (
        <div>
            <div className='flex flex-col items-center mt-10 text-center'>
                <h1 className='text-xl sm:text-3xl md:text-4xl lg:text-4xl font-semibold text-[#4D4D4D] p-2'>Caring is the new marketing</h1>
                <div className='w-full sm:w-[75%] md:w-[60%] lg:w-[45%] xl:w-[35%] text-[#717171] mt-3'>
                    <p>The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community is increasing their membership income and lots more.</p>
                </div>
            </div>
            <div className='flex flex-wrap justify-center gap-5 mt-5'>
                {data.map((item, i) => (
                    <div key={i} className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 relative flex items-center justify-center'>
                        <Image src={item.image} alt={item.content} width={300} height={24} />
                        <div className='absolute top-2 left-0 h-full flex flex-col justify-center items-center mt-16 p-2 w-full'>
                            <div className='text-center w-48 h-32 sm:w-64 bg-[#F5F7FA] p-2 rounded-md shadow-md flex  flex-col justify-between'>
                                <p className='text-md text-[#717171]'>{item.content}</p>
                                <div className='flex text-[#4CAF4F] items-center gap-2 justify-center'>
                                    <p className='text-md'>Read more</p>
                                    <BsArrowRight />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default Caring