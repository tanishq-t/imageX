import { Collection } from '@/components/shared/Collection'
import { navLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Home = ({searchParams} : SearchParamProps) => {
  const page = Number(searchParams?.page) || 1;
  const earchQuery = (searchParams?.query as string) || "";

  return (
    <div>
      <section className='home'>
        <h1 className='home-heading'>
          Unleash the power of every pixel.
        </h1>
        <ul className='flex-center w-full gap-20'>
          {navLinks.slice(1,5).map((link)=>(
            <Link key={link.route} href={link.route} className='flex-center flex-col gap-2'>
              <li className='flex-center w-fit rounded-full bg-white p-4'>
                <Image src={link.icon} alt='Image' width={24} height={24}/>
              </li>
              <p className='p-14-medium text-center text-white'>{link.label}</p>
            </Link>
          ))}
        </ul>
      </section>

      <section className='sm:mt-12'>
        <Collection></Collection>
      </section>
    </div>
  )
}

export default Home  