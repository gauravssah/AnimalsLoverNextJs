'use client'

import AreYouBreeder from "@/components/AreYouBreeder"
import Footer from "@/components/Footer"
import Myinfo from "@/components/Myinfo"
import MyinfoBox from "@/components/MyinfoBox"

function page() {
    return (
        <div>
            <Myinfo />
            <AreYouBreeder />
            <MyinfoBox />


            {/* join us */}

            <div className="w-full mt-10 mb-5">

                <div className="w-[90%] m-auto">

                    <p className="font-bold md:text-3xl mb-5">JOIN US</p>

                    {/* join Boxes */}

                    <div className="flex gap-5 flex-wrap items-center justify-between w-full ">

                        <p className="bg-black text-[#15FF00] uppercase font-bold md:text-xl py-3 px-9 rounded-xl text-center shadow-lg cursor-pointer w-[32%]">join as a Breeder</p>

                        <p className="bg-black text-[#15FF00] uppercase font-bold md:text-xl py-3 px-9 rounded-xl text-center shadow-lg cursor-pointer w-[32%]">join as a Dog Walker</p>

                        <p className="bg-black text-[#15FF00] uppercase font-bold md:text-xl py-3 px-9 rounded-xl text-center shadow-lg cursor-pointer w-[32%]">join as a sitter</p>

                        <p className="bg-black text-[#15FF00] uppercase font-bold md:text-xl py-3 px-9 rounded-xl text-center shadow-lg cursor-pointer w-[32%]">join as a Dog Groomer</p>

                        <p className="bg-black text-[#15FF00] uppercase font-bold md:text-xl py-3 px-9 rounded-xl text-center shadow-lg cursor-pointer w-[32%]">join as a Dog Trainer</p>

                        <p className="bg-black text-[#15FF00] uppercase font-bold md:text-xl py-3 px-9 rounded-xl text-center shadow-lg cursor-pointer w-[32%]">join as a Veterinarian</p>


                    </div>


                </div>
            </div>

            <Footer />

        </div>
    )
}

export default page
