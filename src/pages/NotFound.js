import React from 'react'

function NotFound() {
  return (
    <div className='flex h-screen bg-gold/70'>
      <div className='m-auto font-bold'>
        <div>
          <h1 className='text-center text-5xl'>404</h1>
          <h2 className='text-center text-2xl'>Page Not Found</h2>
        </div>
        <div className='pt-10'>
          <div className='flex space-x-4 items-center hover:underline'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
            </svg>
            <a href="/" className='text-xl text-center font-normal'>Back to home</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound