'use client'
import Link from 'next/link';
import React, { useState } from 'react';
function SecondNavbar() {
    const [activeLink, setActiveLink] = useState('blank'); // Initial active link is empty

    const handleClick = () => {

    };
    return (
        <div className="w-full border-2 mb-5 bg-white text-black p-2 shadow-md">

            <ul className="flex items-center justify-around font-bold ">

                <li><Link className='text-[#0C7203]' href="/myaccount">My Account</Link></li>
                <li><Link href="/mypet">My Pet </Link></li>
                <li><Link href="/sitter">Sitter </Link></li>
                <li><Link href="/walker">Walker </Link></li>
                <li><Link href="/trainer">Trainer </Link></li>
                <li><Link href="/groomer">Groomer </Link></li>
                <li><Link href="/veterinary">Veterinary </Link></li>

            </ul>

        </div>
    )
}

export default SecondNavbar
