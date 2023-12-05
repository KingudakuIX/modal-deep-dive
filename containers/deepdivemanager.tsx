"use client"
import useEventListener from "@/hooks/useeventlistener";
import React, { ReactNode, useCallback, useState } from "react";

/**
 * DeepDiveManager - A React component that is used to manage modal deep dive sections in a similar way that Apple did with the landing page of the IPhone 14 Pro Max.
 *
 * @component
 * @example
 * // Usage example:
 * <DeepDiveManager />
 *
 * @returns {JSX.Element} React component.
 */
function DeepDiveManager() {
  const [show, setShow] = useState(false);
  const [children, setChildren] = useState<ReactNode>();

  useEventListener("showDeepDive", (e: CustomEvent<ReactNode>) => {
    setShow(true);
    setChildren(e.detail);
  })

  useEventListener("closeDeepDive", (e: CustomEvent<ReactNode>) => {
    setShow(false);
  })

  const handleTransitionEnd = useCallback(() => {
    // After the transition is finished, if the modal deep dive is closed the children are then removed from the manager.
    if (!show) {
      setChildren(undefined);
    }
  }, [show])

  return <div onTransitionEnd={handleTransitionEnd}
    className={`w-full h-full flex fixed top-0 left-0 transition-transform duration-500 ease-out will-change-transform overflow-auto ${show ? "translate-x-0" : "translate-x-full"}`}>
    {children}
  </div>;
}

export default DeepDiveManager;
