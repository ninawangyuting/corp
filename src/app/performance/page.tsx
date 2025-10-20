import React from 'react'
import Hero from '@/app/components/Hero'
import  { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Performance',
}
export default function Performance() {
  return (
     <Hero title="Performance" color="from-yellow-300" />
  )
}
