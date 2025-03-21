"use client";  //This is a nextjs specific function used to specify that this file is a client side component since nextjs by default assumes it to be a server side component.
import { navLinks } from '@/constants'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { Button } from "@/components/ui/button"


const Sidebar = () => {
  const pathname = usePathname();
  return (
    <aside className='sidebar'>
      <div className='flex size-full flex-col gap-8'>
        <Link href="/" className='sidebar-logo'>
          <Image src="/assets/images/logo-text.svg" alt="logo" width={180} height={28 }/>
        </Link>
        <nav className='sidebar-nav'>
          <SignedIn>
              <ul className='sidebar-nav_elements'>
                {navLinks.slice(0,6).map((link)=>{
                  const isActive=link.route===pathname
                  return(
                    <li key={link.route} className={`sidebar-nav_element group ${isActive? 'bg-purple-gradient text-white' : 'text-gray-700'}`}>
                      <Link className='sidebar-link' href={link.route}>
                        <Image src={link.icon} alt='logo' width={24} height={24} className={`${isActive && 'brightness-200'}`}/>
                        {link.label}
                      </Link>
                    </li>
                  )
                })}
              </ul>
              <ul className='sidebar-nav_elements'>
                {navLinks.slice(6,8).map((link)=>{
                    const isActive=link.route===pathname
                    return(
                      <li key={link.route} className={`sidebar-nav_element group ${isActive? 'bg-purple-gradient text-white' : 'text-gray-700'}`}>
                        <Link className='sidebar-link' href={link.route}>
                          <Image src={link.icon} alt='logo' width={24} height={24} className={`${isActive && 'brightness-200'}`}/>
                          {link.label}
                        </Link>
                      </li>
                    )
                })}
                <li className='flex-start cursor-pointergap-2 gap-2 p-4'>
                  <UserButton afterSignOutUrl='/' showName/>
                </li>
              </ul>
          </SignedIn>
          <SignedOut>
            <Button asChild className='button bg-purple-gradient bg-cover'>
              <Link href="/sign-in">LogIn</Link>
            </Button>
          </SignedOut>
        </nav>
      </div>
    </aside>
  )
}

export default Sidebar