
import React, { useState } from "react";
import Head from 'next/head'
//import Collapsible from '../components/Collapsible'
import { Collapsible } from '../components/index'
import { components } from '../components'

export default function Home() {
  const [filter, setFilter] = useState('')
  const [complete, setComplete] = useState(false)

  return (
    <div className='flex justify-center'>
      <Head>
        <title>Algorithms</title>
        <meta name="description" content="Testing cool algorithms" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='max-w-7xl w-full'>
        <h1 className='flex items-center justify-center text-3xl font-helvetica h-20 bg-green-600'>Algorithms</h1>

        <div
          className={`flex w-full p-1 mt-1  rounded-sm cursor-pointer ${complete ? 'text-blue-600' : 'text-green-600'}`}
          onClick={() => setComplete(!complete)}
        >
          <p className="ml-auto">{complete ? 'Show All' : 'Show Completed'}</p>
        </div>

        {/* Search */}
        <div className="relative mt-1 mb-5 rounded-md">
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
                <svg  className="cursor-pointer h-10 w-10 text-gray-500 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>     
            </div>
            <input  
                className="bg-gray-50 block w-full pl-16 py-5 text-3xl border-2 border-gray-300 outline-green-600 rounded-md"
                onChange={(e) => setFilter(e.target.value.toLowerCase())}
                value={filter}
                type="text"
                placeholder="Search"
            />
        </div>



        {[...components]
          .filter(item => complete ? item.completed == true : 'do nothing')
          .filter(item => item.name.toLowerCase().includes(filter))
          .map((item, index) => {
            console.log(item.name)
          return(
            <Collapsible key={index} title={`${item.id}. ${item.name}`}>
              {item.component}
            </Collapsible>
          )
        })}
      </main>
    </div>
  )
}
