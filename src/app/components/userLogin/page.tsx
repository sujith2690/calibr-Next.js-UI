import Image from 'next/image'
import React from 'react'
import Button from '../button/page'

const UserLogin = () => {
    return (
        <div className="grid grid-cols-[4fr,6fr] p-10 items-center bg-[#F5F7FA] ">
            <div>
                <Image src='/userLogin.png' alt='' width={500} height={24} />
            </div>
            <div className=''>
                <div className='flex flex-col gap-5 ' >
                    <h1 className='text-4xl font-semibold text-[#4D4D4D]'>The unseen of spending three years at Pixelgrade</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
                </div>
                <div className="mt-5">
                    <Button value='Learn More' />
                </div>
            </div>
        </div>
    )
}

export default UserLogin