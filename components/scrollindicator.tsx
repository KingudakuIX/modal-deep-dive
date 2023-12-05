import { useScrollContext } from '@/containers/scrollcontext'
import { callEvent } from '@/hooks/useeventlistener'
import React from 'react'

function ScrollIndicator() {
  const { scrollPercentage } = useScrollContext();
  return (
    <div className='absolute bottom-6 left-6 w-full max-w-[calc(100%_-_4rem)] md:max-w-2xl flex gap-2'>
      <button className='shrink-0 w-fit mr-auto p-2 bg-zinc-200 hover:bg-zinc-50 transition-colors text-black font-bold rounded-md text-sm' onClick={() => callEvent("closeDeepDive")}>BACK</button>
      <div className='my-auto w-full shrink h-1 relative rounded-2xl bg-white overflow-hidden'>
        <div className='absolute top-0 left-0 h-full w-full bg-violet-400 origin-left' style={{ transform: `scalex(${scrollPercentage / 100})` }}></div>
      </div>
    </div>
  )
}

export default ScrollIndicator