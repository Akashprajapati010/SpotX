import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <>
    <nav className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-xl z-20 border-b border-gray-800/90">        
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

            {/* Logo */}
            <Link href={"/"} className="flex items-center ">
            <Image
                src="/logo1.png"
                alt="SpottX Logo"
                width={1000}
                height={500}
                className="w-full h-10"
                priority
            />
            </Link>


            {/* Search & Location - Desktop Only */}

            {/* Right Side Action */}

        </div>
        {/* Mobile Search & Location */}
    </nav>
    {/* Modals */}

    </>
  )
}

export default Header