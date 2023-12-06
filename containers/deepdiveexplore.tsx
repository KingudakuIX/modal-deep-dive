import { callEvent } from '@/hooks/useeventlistener'
import React from 'react'
import ScrollContextManager from './scrollcontext'
import ScrollIndicator from '@/components/scrollindicator'
import Image from 'next/image'

function DeepdiveExplore() {
  return (
    <div className='w-full h-full relative'>
      <ScrollContextManager>
        <div className='h-screen w-full grid place-content-center bg-zinc-900 text-white'>
          <div className='flex flex-col gap-4'>
            <h2>EXPLORE</h2>
            <Image width={800} height={600} alt='scroll' src="/scroll.gif" className='w-20 h-auto mx-auto'></Image>
          </div>
        </div>
        <div className='h-screen w-full grid place-content-center bg-zinc-900 text-white'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 text-white p-4'>
            <div className='bg-zinc-800 max-w-full w-96 h-60 rounded-lg border-t border-r border-white overflow-hidden'>
              <Image width={384} height={240} alt='lorem picsum' src="https://picsum.photos/384/240" />
            </div>
            <div className='bg-zinc-800 max-w-full w-96 h-60 rounded-lg border-t border-r border-white overflow-hidden'>
              <Image width={384} height={240} alt='lorem picsum' src="https://picsum.photos/384/240" />
            </div>
            <div className='bg-zinc-800 md:col-span-2 w-full h-60 rounded-lg border-t border-r border-white p-4 flex flex-col gap-2'>
              <h2>SUBTITLE</h2>
              <span className='max-w-3xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mi sapien, faucibus porttitor leo sit amet, tempor scelerisque nisi. Curabitur tellus massa, porttitor et turpis eget, suscipit dictum mi.</span>
              <span className='max-w-3xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mi sapien, faucibus porttitor leo sit amet, tempor scelerisque nisi. Curabitur tellus massa, porttitor et turpis eget, suscipit dictum mi.</span>
            </div>
          </div>
        </div>
        <ScrollIndicator />
      </ScrollContextManager>
    </div>
  )
}

export default DeepdiveExplore