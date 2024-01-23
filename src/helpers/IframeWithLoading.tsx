import React, { useState } from 'react';
import { PuffLoader } from 'react-spinners';
import styled from 'styled-components';

interface IframeWithLoadingProps {
  title: string;
  src: string;
}

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
  padding-bottom: 50px;
`

const Container = styled.div`
margin: 10px;
`

const IframeWithLoading: React.FC<IframeWithLoadingProps> = ({ title, src }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <Container>
      {isLoading && (
        <LoadingContainer>
          <PuffLoader color="white" speedMultiplier={0.6}/>
        </LoadingContainer>
      )}
      <iframe loading="lazy" title={title} src={src} onLoad={handleLoad} style={{ position: 'relative', width: '300px', height: '400px', border: 'none', display: isLoading ? 'none' : 'block'}} />
    </Container>
  );
};

export default IframeWithLoading;
