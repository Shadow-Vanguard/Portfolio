import { useEffect, useRef } from "react";

export default function useInViewAnimation(className) {
  const ref = useRef();

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const handleAnimation = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          node.classList.add(className);
        } else {
          node.classList.remove(className);
        }
      });
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(className);
        } else {
          entry.target.classList.remove(className);
        }
      },
      {
        root: null,
        threshold: 0.2,
      }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [className]);

  return ref;
}
