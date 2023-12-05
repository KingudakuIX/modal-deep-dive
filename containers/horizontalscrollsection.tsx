import React, { ReactNode, useEffect, useRef } from 'react'
import { useScrollContext } from './scrollcontext';

function HorizontalScrollSection({ children }: { children: ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null!);
  const horizontalScrollRef = useRef<HTMLDivElement>(null!);
  const { scrollPercentage } = useScrollContext();

  useEffect(() => {
    containerRef.current.style.height = `${horizontalScrollRef.current.scrollWidth}px`;
  }, [])

  useEffect(() => {
    horizontalScrollRef.current.scrollLeft = (scrollPercentage / 100) * (horizontalScrollRef.current.scrollWidth - window.innerWidth);
  }, [scrollPercentage])

  return (
    <div ref={containerRef} className='w-full'>
      <div ref={horizontalScrollRef}
        className='sticky left-0 top-0 flex [&>*]:shrink-0 overflow-hidden'>
        {children}
      </div>
    </div>
  )
}

export default HorizontalScrollSection