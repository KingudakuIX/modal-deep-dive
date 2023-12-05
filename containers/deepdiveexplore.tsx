import { callEvent } from '@/hooks/useeventlistener'
import React from 'react'

function DeepdiveExplore() {
  return (
    <div className='w-full h-full relative'>
      <div className='h-screen w-full grid place-content-center bg-zinc-900 text-white'><h2>EXPLORE</h2></div>
      <div className='absolute bottom-6 left-6 w-full max-w-[calc(100%_-_4rem)] md:max-w-2xl flex gap-2'>
        <button className='shrink-0 w-fit mr-auto p-2 bg-zinc-200 hover:bg-zinc-50 transition-colors text-black font-bold rounded-md text-sm' onClick={() => callEvent("closeDeepDive")}>BACK</button>
      </div>
    </div>
  )
}

export default DeepdiveExplore