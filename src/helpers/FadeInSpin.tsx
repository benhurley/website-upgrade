import React, { useState, useEffect } from 'react';

type FadeInSpinProps = {
  children: React.ReactNode;
  timeout?: number;
  startDegrees?: string,
};

export const FadeInSpin: React.FC<FadeInSpinProps> = ({ children, timeout = 100, startDegrees = "-90" }) => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFadeIn(true);
    }, timeout);
  }, [timeout]);

  return (
    <span
      style={{
        opacity: fadeIn ? 1 : 0,
        transform: fadeIn ? 'rotate(0deg)' : `rotate(${startDegrees}deg)`,
        transition: 'opacity 1.5s, transform 1s',
        display: 'inline-block',
      }}
    >
      {children}
    </span>
  );
};
