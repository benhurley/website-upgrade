import { useState, useEffect } from 'react';

type FadeInComponentProps = {
  children: React.ReactNode;
  timeout?: number;
};

export const FadeInComponent = ({ children, timeout = 100 }: FadeInComponentProps) => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      requestAnimationFrame(() => setFadeIn(true)); // Forces transition recognition
    }, timeout);

    return () => clearTimeout(timer);
  }, [timeout]);

  return (
    <span
      style={{
        opacity: fadeIn ? 1 : 0,
        transition: 'opacity 1s ease-in-out',
        visibility: fadeIn ? 'visible' : 'hidden',
        transform: fadeIn ? 'translateZ(0)' : 'translateZ(0)', // Forces GPU rendering
      }}
    >
      {children}
    </span>
  );
};
