import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import HeaderSwitch from './HeaderSwitch';

const slideInFromLeft = keyframes`
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0%);
    opacity: 1;
  }
`;

const SlideInTextWrapper = styled.div<{ isVisible: boolean }>`
  position: relative;
  animation-name: ${({ isVisible }) => (isVisible ? slideInFromLeft : null)};
  animation-duration: 1.25s;
  animation-fill-mode: forwards;
  opacity: 0;
`;

type SlideInTextProps = {
  text: string;
  size: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  delay?: number;
}

export const SlideInText: React.FC<SlideInTextProps> = ({ size, text, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (delay > 0) {
      setTimeout(() => {
        setIsVisible(true);
      }, delay);
    } else {
      setIsVisible(true);
    }
  }, [delay]);

  return (
    <SlideInTextWrapper isVisible={isVisible}>
      <HeaderSwitch 
        text={text}
        size={size}
      />
    </SlideInTextWrapper>
  );
};
