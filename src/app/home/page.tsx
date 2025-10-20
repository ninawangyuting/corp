import React from 'react'
import Hero from '@/app/components/Hero'
import  { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Home',
}
export default function Home() {
  return (
    <Hero title="Home" color="from-pink-300" />
    // <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-300 to-blue-300">
    //   <h1 className="text-5xl font-bold text-white">Home 🎉</h1>
    // </div>

  )
}
