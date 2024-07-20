import { useState, useEffect } from 'react';

const useIsSmallScreen = (breakpoint = 640) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= breakpoint);
    };

    handleResize(); // Check the screen size on initial render
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [breakpoint]);

  return isSmallScreen;
};

export default useIsSmallScreen;
