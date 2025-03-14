import { useState, useEffect } from 'react';

type FadeInComponentProps = {
  children: React.ReactNode;
  timeout?: number;
};

export const FadeInComponent = ({ children, timeout = 100 }: FadeInComponentProps) => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeIn(true), timeout);
    return () => clearTimeout(timer);
  }, [timeout]);

  return (
    <span
      style={{
        opacity: fadeIn ? 1 : 0,
        transition: 'opacity 1s ease-in-out',
        visibility: fadeIn ? 'visible' : 'hidden', // Ensures proper hiding initially
      }}
    >
      {children}
    </span>
  );
};
