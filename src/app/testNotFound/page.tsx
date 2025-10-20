import React from 'react'
import { notFound } from 'next/navigation'
export default function testNodeFound() {
  notFound()
  return (
    <div>testNodeFound</div>
  )
}
