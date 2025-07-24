import { useEffect } from 'react';

const useBodyScrollLock = (isLocked) => {
  useEffect(() => {
    const body = document.querySelector('body');
    if (isLocked) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'auto';
    }
    return () => {
      body.style.overflow = 'auto';
    };
  }, [isLocked]);
};

export default useBodyScrollLock; 