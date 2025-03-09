import { useState, useEffect } from 'react';

const useAnim = (delay=100, duration=3000) => {
  const [isAnim, setIsAnim] = useState(false);

  useEffect(() => {
    let firstTimer: NodeJS.Timeout | null = null;
    let lastTimer: NodeJS.Timeout | null = null;

    if (!isAnim) {
      firstTimer = setTimeout(() => {
        setIsAnim(true);
      }, delay);
    } else {
      lastTimer = setTimeout(() => {
        setIsAnim(false);
      }, duration);
    }

    return () => {
      clearInterval(firstTimer as unknown as NodeJS.Timeout);
      clearInterval(lastTimer as unknown as NodeJS.Timeout);
    }
  }, [isAnim, delay, duration]);

  return isAnim;
};

export default useAnim;
