"use client"
import DeepDiveSection from '@/containers/deepdivesection'
import { callEvent } from '@/hooks/useeventlistener'
import React from 'react'

/**
 * ViewNowButton - A simple React component used to open the deep dive modal
 *
 * @component
 * @example
 * // Usage example:
 * <ViewNowButton />
 *
 * @returns {JSX.Element} React component.
 */
function ViewNowButton() {
  return (
    <button onClick={() => callEvent("showDeepDive", <DeepDiveSection />)}
      className='w-fit mr-auto p-2 bg-orange-400 hover:bg-orange-300 transition-colors text-black font-bold rounded-md text-sm'>VIEW NOW</button>
  )
}

export default ViewNowButton