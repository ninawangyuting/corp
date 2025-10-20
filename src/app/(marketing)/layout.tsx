"use client"
import React from 'react'
export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col gap-4 ">
      666777
      <div className='flex flex-col w-full'>
        {children}
      </div>
    </div>
  )
}
