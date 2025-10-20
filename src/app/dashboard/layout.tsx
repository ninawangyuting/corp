"use client"
import React from 'react'
import Header from '@/app/components/Header'
export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col gap-4 ">
      <Header />
      <div className='flex flex-col w-full'>
        {children}
      </div>
    </div>
  )
}
