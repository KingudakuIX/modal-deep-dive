"use client"
import DeepdiveExplore from '@/containers/deepdiveexplore'
import { callEvent } from '@/hooks/useeventlistener'
import React from 'react'

/**
 * ExploreButton - A simple React component used to open the deep dive modal
 *
 * @component
 * @example
 * // Usage example:
 * <ViewNowButton />
 *
 * @returns {JSX.Element} React component.
 */
function ExploreButton() {
  return (
    <button onClick={() => callEvent("showDeepDive", <DeepdiveExplore />)}
      className='w-fit mx-auto mt-8 p-2 bg-zinc-300 hover:bg-zinc-100 transition-colors text-black font-bold rounded-md text-sm'>EXPLORE</button>
  )
}

export default ExploreButton