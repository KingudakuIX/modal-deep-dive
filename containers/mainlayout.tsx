"use client"
import useEventListener from '@/hooks/useeventlistener';
import React, { ReactNode, useState } from 'react'

/**
 * MainLayout - A React component that is used to wrap the main part of the website excluding the modal deep dive's contents
 *
 * @component
 * @example
 * // Usage example:
 * <MainLayout>
 *   ...
 * </MainLayout>
 *
 * @returns {JSX.Element} React component.
 */
function MainLayout({ children }: { children: ReactNode }) {
  const [hide, setHide] = useState(false);

  useEventListener("showDeepDive", (e: CustomEvent<ReactNode>) => {
    setHide(true);
  })

  useEventListener("closeDeepDive", (e: CustomEvent<ReactNode>) => {
    setHide(false);
  })

  return (
    <main className={`w-full h-full transition-transform duration-500 ease-out will-change-transform ${hide ? "-translate-x-full overflow-hidden" : "translate-x-0 overflow-auto"}`}>
      {children}
    </main>
  )
}

export default MainLayout