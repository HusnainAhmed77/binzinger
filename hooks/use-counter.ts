import { useEffect, useState, useRef, useCallback } from "react";

interface UseCounterOptions {
  end: number;
  duration?: number;
  start?: number;
}

export function useCounter({ end, duration = 2000, start = 0 }: UseCounterOptions): {
  count: number;
  startAnimation: () => void;
  isAnimating: boolean;
} {
  const [count, setCount] = useState(start);
  const [isAnimating, setIsAnimating] = useState(false);
  const isAnimatingRef = useRef(false);
  const frameRef = useRef<number | null>(null);

  const startAnimation = useCallback((): void => {
    if (isAnimatingRef.current) return;

    isAnimatingRef.current = true;
    setIsAnimating(true);
    setCount(start); // Reset to start value

    const startTime = Date.now();
    const difference = end - start;

    const animate = (): void => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.round(start + difference * easeOutQuart);

      setCount(currentValue);

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      } else {
        setIsAnimating(false);
        isAnimatingRef.current = false;
      }
    };

    frameRef.current = requestAnimationFrame(animate);
  }, [end, duration, start]);


  useEffect(() => {
    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return { count, startAnimation, isAnimating };
}
