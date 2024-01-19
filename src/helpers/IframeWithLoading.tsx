import React, { useState } from 'react';
import { RingLoader } from 'react-spinners';
import styled from 'styled-components';

interface IframeWithLoadingProps {
  title: string;
  src: string;
}

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const IframeWithLoading: React.FC<IframeWithLoadingProps> = ({ title, src }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <div>
      {isLoading && (
        <LoadingContainer>
          <RingLoader color="white" />
        </LoadingContainer>
      )}
      <iframe title={title} src={src} onLoad={handleLoad} style={{ position: 'relative', width: '300px', height: '400px', border: 'none', display: isLoading ? 'none' : 'block'}} />
    </div>
  );
};

export default IframeWithLoading;
