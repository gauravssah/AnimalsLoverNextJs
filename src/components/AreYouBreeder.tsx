'use client'

import Image from "next/image"

function AreYouBreeder() {
    return (
        <div className=" w-full  ">

            <div className="flex  items-center  w-[90%] m-auto p-4 my-4">
                {/* icon */}
                <div>
                    <Image src="/images/usericons.svg" width={50} height={50} alt="Are you breeder" />
                </div>

                {/* text content */}
                <div className="ml-4">
                    <p className="font-bold md:text-3xl mb-1">Are You A Breeder?</p>
                    <p className="">It takes only a few clicks to connect with  genuine  pet lover . <span className="text-[#0C7203] font-bold">Register Now!</span></p>
                </div>
            </div>
        </div>
    )
}

export default AreYouBreeder
