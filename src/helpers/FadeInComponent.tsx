import { useState, useEffect } from 'react';

type FadeInComponentProps = {
  children: any,
  timeout?: number,
}

export const FadeInComponent = ({ children, timeout = 100 } : FadeInComponentProps) => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFadeIn(true);
    }, timeout);
  }, [timeout]);

  return (
    <div
      style={{
        opacity: fadeIn ? 1 : 0,
        transition: 'opacity 1s',
      }}
    >
      {children}
    </div>
  );
};
