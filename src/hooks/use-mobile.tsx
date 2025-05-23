import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)
  const [isReady, setIsReady] = React.useState(false)

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    
    // Check on first render
    checkMobile()
    setIsReady(true)
    
    // Add event listener for window resize
    window.addEventListener('resize', checkMobile)
    
    // Clean up event listener
    return () => {
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  // Return both the object for backwards compatibility and the boolean for direct use
  const result = { isMobile, isReady } as const
  // Allow the hook to also be used as a boolean directly
  Object.defineProperty(result, "valueOf", {
    value: function() {
      return !!isMobile;
    }
  })

  return result as { 
    isMobile: boolean | undefined; 
    isReady: boolean; 
    valueOf: () => boolean;
  } & boolean
}

// Keep the rest of the hooks unchanged
export const useIsTablet = () => {
  const [isTablet, setIsTablet] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const checkTablet = () => {
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024)
    }
    
    checkTablet()
    window.addEventListener('resize', checkTablet)
    
    return () => {
      window.removeEventListener('resize', checkTablet)
    }
  }, [])

  return isTablet
}

export const useIsDesktop = () => {
  const [isDesktop, setIsDesktop] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024)
    }
    
    checkDesktop()
    window.addEventListener('resize', checkDesktop)
    
    return () => {
      window.removeEventListener('resize', checkDesktop)
    }
  }, [])

  return isDesktop
}
