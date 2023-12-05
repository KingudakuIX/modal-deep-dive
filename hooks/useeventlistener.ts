"use client";
import { useEffect, useRef } from "react";

/**
 * useEventListener - A React hook used for listening custom events
 *
 * @hook
 * @example
 * // Usage example:
 * useEventListener("myEvent", (e: CustomEvent<IProps>) => {
 *   ...
 * })
 */
function useEventListener(eventName: string, handler: Function, element = typeof window !== "undefined" ? window : undefined, props: any[] = []) {
  // Create a ref that stores handler
  const savedHandler = useRef<Function>();
  // Update ref.current value if handler changes.
  // This allows our effect below to always get latest handler ...
  // ... without us needing to pass it in effect deps array ...
  // ... and potentially cause effect to re-run every render.
  useEffect(() => {
    savedHandler.current = handler;
  }, [handler, ...props]);

  useEffect(
    () => {
      // Make sure element supports addEventListener
      const isSupported = element && element.addEventListener;
      if (!isSupported) return;
      // Create event listener that calls handler function stored in ref
      const eventListener = (event: any) => {
        if (savedHandler.current) savedHandler.current(event);
      };
      // Add event listener
      element.addEventListener(eventName, eventListener);
      // Remove event listener on cleanup
      return () => {
        element.removeEventListener(eventName, eventListener);
      };
    },
    [eventName, element] // Re-run if eventName or element changes
  );
}

export default useEventListener;

/**
 * callEvent - Function used to call custom events
 *
 * @hook
 * @example
 * // Usage example:
 * callEvent("myEvent", myProps);
 */
export function callEvent(eventName: string, params: any = null) {
  window.dispatchEvent(new CustomEvent(eventName, { detail: params }));
}
