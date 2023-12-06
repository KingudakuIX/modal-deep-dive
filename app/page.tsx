import ExploreButton from '@/components/explorebutton'
import ViewNowButton from '@/components/viewnowbutton'
import DeepDiveSection from '@/containers/deepdivesection'
import { callEvent } from '@/hooks/useeventlistener'
import Image from 'next/image'
import { CSSProperties } from 'react'

export default function Home() {
  return (
    <div className='relative w-full background'>
      <div className='landing -z-10 h-full w-full absolute top-0 left-0'></div>
      {/* <div className='background grid -z-10 h-full w-full absolute top-0 left-0'></div> */}
      <div className='h-screen grid place-items-center'>
        <div className='flex flex-col justify-center'>
          {/* Glitch effect from: https://codepen.io/aldrie/pen/PojGYLo */}
          <h1 className='text-center text-glitch text-white' style={{ "--stacks": 3 } as CSSProperties}>
            <span style={{ "--index": 0 } as CSSProperties}>HELLO EVERYONE</span>
            <span style={{ "--index": 1 } as CSSProperties}>HELLO EVERYONE</span>
            <span style={{ "--index": 2 } as CSSProperties}>HELLO EVERYONE</span>
          </h1>
          <h2 className='text-center mt-4 text-white'>explore the deep dive capabilities</h2>
        </div>
      </div>
      <div className='h-full md:h-screen grid place-content-center'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 text-white p-4'>
          <div className='bg-zinc-900 max-w-full w-96 h-60 rounded-lg border-t border-r border-white overflow-hidden'>
            <Image width={384} height={240} alt='lorem picsum' src="https://picsum.photos/384/240" />
          </div>
          <div className='bg-zinc-900 max-w-full w-96 h-60 rounded-lg border-t border-r border-white p-4 flex flex-col'>
            <span className='my-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mi sapien, faucibus porttitor leo sit amet, tempor scelerisque nisi. Curabitur tellus massa, porttitor et turpis eget, suscipit dictum mi.</span>
            <ViewNowButton />
          </div>
          <div className='bg-zinc-900 md:col-span-2 w-full h-60 rounded-lg border-t border-r border-white p-4 flex flex-col gap-2'>
            <h2>SUBTITLE</h2>
            <span className='max-w-3xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mi sapien, faucibus porttitor leo sit amet, tempor scelerisque nisi. Curabitur tellus massa, porttitor et turpis eget, suscipit dictum mi.</span>
            <span className='max-w-3xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mi sapien, faucibus porttitor leo sit amet, tempor scelerisque nisi. Curabitur tellus massa, porttitor et turpis eget, suscipit dictum mi.</span>
          </div>
        </div>
      </div>
      <div className='h-screen flex'>
        <div className='flex flex-col justify-center w-full bg-zinc-900 my-auto pt-4 pb-8'>
          <h2 className='text-center mt-4 text-white mb-4'>ANOTHER SECTION</h2>
          <h3 className='text-white text-center mb-8 max-w-3xl mx-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mi sapien, faucibus porttitor leo sit amet, tempor scelerisque nisi.</h3>
          <Image width={384} height={240} alt='lorem picsum' src="https://picsum.photos/384/240" className='w-96 h-60 mx-auto rounded-lg border-t border-r border-white' />
          <ExploreButton />
        </div>
      </div>
    </div>
  )
}
