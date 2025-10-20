import React from 'react'
interface IProps {
  title: string
  color: string
  className?: string
}

export default function Hero(props:IProps) {
  return (
    <div className={["min-h-screen flex items-center justify-center bg-gradient-to-r to-blue-300",props.color].join(' ')}>
      <h1 className="text-5xl font-bold text-white">{props.title} 🎉</h1>
    </div>

  )
}
