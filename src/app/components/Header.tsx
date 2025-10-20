"use client"
import React from 'react'
import logo from '@/assets/logo.webp'
import Link from 'next/link'
import {usePathname} from 'next/navigation'
import Image from 'next/image'
type ItemLink = {
  label: string
  href: string
}
const itemLinks =[
  {
    label: 'Home',
    href: '/home',
  },
  {
    label: 'Performance',
    href: '/performance',
  },
  {
    label: 'Reliability',
    href: '/reliability',
  },
  {
    label: 'Scale',
    href: '/scale',
  },
]
const accessLink = ['/home','/performance','/reliability','/scale']
export default function Header() {
  const pathname = usePathname()
  if(!accessLink.includes(pathname))return null
  return (
    <div className='flex flex-row gap-4 justify-between items-center absolute top-5 left-0 right-0 w-full'>
      <Image src={logo} alt="" width={80} height={80}  loading="lazy" className='ml-10' />
      <div className='flex flex-row gap-4 mr-20'>
        {itemLinks.map((el:ItemLink,index:number)=>{
          return (
            <Link key={index} className={[pathname === el.href ? 'text-purple-400 ' : 'text-white','font-bold'].join(' ')}  href={el.href}>{el.label}</Link>
          )
        })}
      </div>
    </div>
  )
}
