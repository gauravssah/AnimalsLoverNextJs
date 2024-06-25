'use client';


import Image from 'next/image'
export default function signin() {
    return (
        // main conatainer with full width = 80%
        <div className=" w-full mt-4 h-auto p-5">

            {/* Dog And Welcome Back Container */}
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


                {/* Welcome Back */}
                <div className=' sm:w-1/2 text-black'>

                    {/* Welcome Back */}
                    <div className='flex justify-center items-center flex-col gap-4  w-4/5 m-auto mt-8 mb-8'>
                        <div className='text-[#0C7203] text-3xl font-bold'>Welcome Back</div>
                        <div className='text-[black] text-xs font-bold'>Don't have an account? <a className='text-[#0C7203]' href="/signup">Sign Up.</a></div>

                        <button className='bg-[#D9D9D9] text-[#0C7203] rounded-[10px] p-3 text-xs  font-bold w-full'>Continue with Google</button>

                    </div>

                    {/* or section */}
                    <div className=" w-4/5 m-auto flex flex-row items-center justify-center gap-2  ">
                        <div className='w-[10%] h-[2px] bg-[#0C7203]'></div>
                        <div className='text-[black] text-xs '>Or continue whith username/email</div>
                        <div className='w-[10%] h-[2px] bg-[#0C7203]'></div>
                    </div>

                    {/* form */}
                    <div className=''>
                        <form action="#" className='flex flex-col gap-4  w-4/5 m-auto mt-8'>
                            <input className='bg-[#D9D9D9] rounded-[10px] p-3 text-xs tracking-wide font-bold' type="text" name='name' placeholder='Username or email address
' />
                            <input className='bg-[#D9D9D9] rounded-[10px] p-3 text-xs tracking-wide font-bold' type="password" name='password' placeholder='Enter Password' />

                            {/* Forgot Password */}
                            <div>
                                <p><a className='text-[#0C7203] text-sm hover:underline ' href="#"> Forgot Password </a></p>
                            </div>

                            <button className='bg-[#0C7203] text-white rounded-[10px] p-3 text-xs tracking-wide font-bold' type='submit'>Create Account</button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}
