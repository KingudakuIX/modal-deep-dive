import ScrollIndicator from '@/components/scrollindicator'
import React from 'react'
import ScrollContextManager from './scrollcontext'
import HorizontalScrollSection from './horizontalscrollsection'

function DeepDiveSection() {
  return (
    <div className='w-full h-full relative'>
      <ScrollContextManager>
        <HorizontalScrollSection>
          <div className='w-full h-screen bg-amber-500 grid place-content-center'>
            <h3>SECTION 1</h3>
          </div>
          <div className='w-full h-screen bg-orange-500 grid place-content-center'>
            <h3 className='text-white'>SECTION 2</h3>
          </div>
          <div className='w-full h-screen bg-fuchsia-500 grid place-content-center'>
            <h3 className='text-white'>SECTION 3</h3>
          </div>
        </HorizontalScrollSection>
        <ScrollIndicator />
      </ScrollContextManager>
    </div>
  )
}

export default DeepDiveSection