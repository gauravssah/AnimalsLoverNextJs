'use client'
import React from 'react'
import Image from 'next/image'

function Myinfo() {
    return (
        <div className='w-full  mt-6 text-black'>

            <div className='flex w-[90%] m-auto shadow-[#0000007D]  shadow-[0px_2px_0px_1px] '>

                {/* dog image container */}
                <div className='w-[40%] '>
                    <Image
                        src="/pngimages/infodog.png"
                        width={500}
                        height={500}
                        alt="Dog" />
                </div>

                {/* infocontainer */}

                <div className=' w-[60%] flex flex-col items-center justify-evenly  py-5 '>

                    <div className='w-[80%] m-auto font-bold md:text-2xl flex flex-col gap-7'>

                        <div className='flex items-center justify-between'>
                            <p className=' uppercase text-[#0C7203] '>CITY-</p>
                            <p>Margao (Goa)</p>
                        </div>
                        <div className='flex items-center justify-between'>
                            <p className=' uppercase text-[#0C7203] '>Contact-</p>
                            <p>8256359756</p>
                        </div>
                        <div className='flex items-center justify-between'>
                            <p className=' uppercase text-[#0C7203] '>Email id- </p>
                            <p>sd1230@Gmail.com</p>
                        </div>

                    </div>

                    <button className='bg-[#0C7203] text-white py-2 px-7 md:text-xl font-bold rounded-[22px]'>Logout</button>

                </div>

            </div>
        </div>
    )
}

export default Myinfo
