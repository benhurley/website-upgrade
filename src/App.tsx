import { NavBar } from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from './pages/Home';
import { Portfolio } from './pages/Portfolio';
import { Domains } from './pages/Domains';
import { Footer } from './components/Footer';
import styled, { createGlobalStyle } from "styled-components";
import backgroundImg from "./img/background.png";
import { preloadImages } from './helpers/preloadImages';
import { useEffect } from 'react';
import { GPTs } from './pages/GPTs';

const GlobalStyles = createGlobalStyle`
  body {
    background-image: url(${backgroundImg});
    background-size: auto;
    background-color: #000;
  }
`;

const AppContainer = styled.div`
  text-align: center;
  font-family: 'Kdam Thmor Pro', sans-serif;
  color: white;
  overflow-x: hidden;
  color: white;
  padding: 4em 10px 4em 10px;
  line-height: 2;
`;

function App() {
  useEffect(() => {
    preloadImages();
  }, [])

  return (
    <>
      <GlobalStyles />
      <AppContainer>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/domains" element={<Domains />} />
            <Route path="/gpts" element={<GPTs />} />
            <Route path='*' element={<Home />} />
          </Routes>
        </Router>
        <Footer />
      </AppContainer>
    </>
  );
}

export default App;

