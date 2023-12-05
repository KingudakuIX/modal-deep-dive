import React, { useCallback, UIEvent, createContext, useContext, useState, ReactNode } from 'react'

const ScrollContext = createContext({
  scrollPercentage: 0
})

function ScrollContextManager({ children }: { children: ReactNode }) {
  const [scrollPercentage, setScrollPercentage] = useState(0)

  const handleOnScroll = useCallback((e: UIEvent) => {
    const scrollHeight = (e.target as HTMLDivElement).scrollHeight;
    console.log("scrollHeight", scrollHeight);
    const scrollTop = (e.target as HTMLDivElement).scrollTop;
    console.log("scrollTop", scrollTop);
    setScrollPercentage(Math.round(scrollTop / (scrollHeight - window.innerHeight) * 10000) / 100);
  }, [])

  return (
    <ScrollContext.Provider value={{ scrollPercentage }}>
      <div className='w-full h-full overflow-auto' onScroll={handleOnScroll}>
        {children}
      </div>
    </ScrollContext.Provider>
  )
}

export function useScrollContext() {
  return useContext(ScrollContext);
}

export default ScrollContextManager