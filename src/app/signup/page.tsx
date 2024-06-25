'use client'

import Image from 'next/image'

function signup() {
    return (

        // main conatainer with full width = 80%
        <div className=" w-full mt-4 h-auto p-5">

            {/* Dog And Form Container */}
            <div className=" sm:w-[100%] md:w-[100%] lg:w-[60%] w-full sm:h-[600px] bg-white flex sm:flex-row box-border m-auto flex-col">

                {/* Dog And Logo */}
                <div className='w-full sm:w-1/2 bg-black flex flex-col items-center justify-center p-4 sm:p-0'>

                    {/* logo */}
                    <div className=" h-[20%] flex flex-col items-center justify-center">
                        <Image className='w-52'
                            src="/images/animalsloverlogo.svg"
                            width={200}
                            height={128}
                            alt="Animals lover logo"
                        />
                    </div>

                    <div className=" h-[79%] flex flex-col items-center justify-center">
                        <div className="relative ">
                            <Image className='w-56'
                                src="/images/dogimg.svg"
                                width={500}
                                height={400}
                                alt="Dog and Cat"
                            />
                            <Image className='absolute top-[-22px] right-[-24px] w-[83px]'
                                src="/images/dogthumb.svg"
                                width={130}
                                height={130}
                                alt="Dog and Cat"
                            />

                        </div>
                    </div>



                </div>


                {/* form container */}
                <div className=' sm:w-1/2 text-black'>
                    <h1 className='text-[#0C7203] text-center mt-3 mb-3 font-bold'>Create an Account</h1>
                    {/* form */}
                    <div className=''>
                        <form action="#" className='flex flex-col gap-4  w-4/5 m-auto mt-1'>
                            <input className='bg-[#D9D9D9] rounded-[10px] p-3 text-xs tracking-wide font-bold' type="text" name='name' placeholder='Full Name' />

                            <input className='bg-[#D9D9D9] rounded-[10px] p-3 text-xs tracking-wide font-bold' type="text" name='phone number' placeholder='Phone Number' />

                            <input className='bg-[#D9D9D9] rounded-[10px] p-3 text-xs tracking-wide font-bold' type="email" name='email' placeholder='Email' />

                            <input className='bg-[#D9D9D9] rounded-[10px] p-3 text-xs tracking-wide font-bold' type="password" name='password' placeholder='Create Password' />

                            <input className='bg-[#D9D9D9] rounded-[10px] p-3 text-xs tracking-wide font-bold' type="text" name='city' placeholder='City' />

                            <button className='bg-[#0C7203] text-white rounded-[10px] p-3 text-xs tracking-wide font-bold' type='submit'>Create Account</button>
                        </form>
                    </div>

                    {/* or section */}
                    <div className=" w-4/5 m-auto flex flex-row items-center justify-center gap-2  ">
                        <div className='w-[40%] h-[2px] bg-black'></div>
                        <div className='text-[#0C7203] font-bold'>Or</div>
                        <div className='w-[40%] h-[2px] bg-black'></div>
                    </div>

                    {/* google and facebook section  */}
                    <div className=" w-4/5 m-auto flex align-center justify-center gap-3 ">

                        <a href='https://www.google.com'>
                            <Image className=' cursor-pointer '
                                src={"/images/google.svg"}
                                width={37}
                                height={37}
                                alt="google logo"
                            />
                        </a>

                        <a href='https://www.facebook.com'>
                            <Image className=' cursor-pointer '
                                src={"/images/facebook.svg"}
                                width={37}
                                height={37}
                                alt="google logo"
                            />
                        </a>

                    </div>

                    {/* agreement section */}
                    <div className="w-4/5 m-auto mt-2 mb-2 pb-3 ">

                        <p className='text-[12px] text-center '>
                            <span>
                                <input className=' cursor-pointer mr-[3px] ' type="checkbox" name="agree" />
                            </span>
                            By clicking Create account, I agree that I have read and accepted the Terms of Use and Privacy Policy.</p>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default signup
