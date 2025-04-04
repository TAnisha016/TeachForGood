import { useEffect } from 'react';

const useScrollToTop = () => {
  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };

    // Trigger the scroll to top when the component mounts
    scrollToTop();

    // No cleanup needed as we're only scrolling on mount
  }, []); // Empty dependency array ensures this effect runs only once on mount
};

export default useScrollToTop;