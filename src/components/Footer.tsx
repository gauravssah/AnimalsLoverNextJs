'use client'

import Image from "next/image"

function Footer() {
    return (
        <div >


            {/* footer */}
            <div className="w-full bg-black text-white">

                {/* logo  */}
                <div>
                    <Image src="/images/animalsloverlogo.svg"
                        width={350}
                        height={350}
                        alt="logo" />
                </div>

                {/* contents */}

                <div>
                    footer contents
                </div>

                {/* social media */}

            </div>

            <div className="w-full bg-[#15FF00] text-white">
                social medias
            </div>

        </div>
    )
}

export default Footer
