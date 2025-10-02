import React from 'react'

interface DashboardWrapperProps {
    children: React.ReactNode,
    title: string,
    description: string,
}

export default function DashboardWrapper({children, title, description}:DashboardWrapperProps) {
  return (
    <div className='px-3'>
        <h1 className='text-3xl font-bold tracking-tight'>
            {title}
        </h1>
        <p className="text-muted-foreground text-sm leading-6">
            {description}
        </p>
        <div className="">
            {children}
        </div>
    </div>
  )
}
