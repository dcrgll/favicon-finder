'use client'

import { useState } from 'react'

export default function Home() {
  const [domain, setDomain] = useState('https://www.studentbeans.com')
  return (
    <main className='flex min-h-screen flex-col items-center p-24'>
      <div>
        <label
          htmlFor='price'
          className='block text-sm font-medium leading-6 text-gray-900'
        >
          Domain
        </label>
        <div className='relative mt-2 rounded-md shadow-sm'>
          <input
            type='text'
            name='price'
            id='price'
            className='block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
            placeholder='0.00'
            onChange={(e) => setDomain(e.target.value)}
          />
        </div>
      </div>
      <img
        src={`https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${domain}&size=64`}
        className='w-10 h-10 mt-2'
        loading='lazy'
      />
    </main>
  )
}
