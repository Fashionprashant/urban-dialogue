
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface TransitionContextType {
  isTransitioning: boolean;
  prevPath: string | null;
}

const TransitionContext = createContext<TransitionContextType>({
  isTransitioning: false,
  prevPath: null,
});

export const useTransition = () => useContext(TransitionContext);

export const TransitionProvider: React.FC<{ children: React.ReactNode }> = ({ 
  children 
}) => {
  const location = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [prevPath, setPrevPath] = useState<string | null>(null);

  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => {
      setIsTransitioning(false);
      setPrevPath(location.pathname);
    }, 300); // This should match the transition duration in CSS

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <TransitionContext.Provider value={{ isTransitioning, prevPath }}>
      {children}
    </TransitionContext.Provider>
  );
};
