import Link from 'next/link'
import React from 'react'
import DesktopNavbar from './DesktopNavbar'
import MobileNavbar from './MobileNavbar'
import { currentUser } from '@clerk/nextjs/server'
import { syncUser } from '@/actions/user.action'
import Image from 'next/image'

async function Navbar() {
    const user = await currentUser();
    if (user) await syncUser();
    return (
        <nav className="sticky top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                        <Link href="/" className="inline-flex items-center mt-3 mb-3">
                            <Image
                                src="/logo.png"
                                alt="MediaMojo logo"
                                width={120}
                                height={120}
                                className="mr-2 filter invert dark:invert-0"    
                               
                            />
                        
                    </Link>
                </div>

                <DesktopNavbar></DesktopNavbar>
                <MobileNavbar></MobileNavbar>
                </div>
            </div>
        </nav>
    )
}

export default Navbar