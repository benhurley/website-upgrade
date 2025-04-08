import { NavBar } from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from './pages/Home';
import { Websites } from './pages/Websites';
import { Footer } from './components/Footer';
import styled, { createGlobalStyle } from "styled-components";
import backgroundImg from "./img/background.webp";
import cursor from "./img/cursor.png";
import pointer from "./img/pointer.png";
import { preloadImages } from './helpers/preloadImages';
import { useEffect } from 'react';
import { Chatbots } from './pages/Chatbots';
import { Contact } from './pages/Contact';
import { About } from './pages/About';
import ScrollToTop from './helpers/ScrollToTop';
import { Health } from './pages/Health';

const GlobalStyles = createGlobalStyle`
  body {
    background-image: url(${backgroundImg});
    background-size: auto;
    background-color: #000;
    cursor: url(${cursor}) 16 16, auto;
  }

  a, button {
    cursor: url(${pointer}) 16 16, auto !important;
  }
`;

const AppContainer = styled.div`
  text-align: center;
  font-family: 'Orbitron', sans-serif;
  color: white;
  overflow-x: hidden;
  color: white;
  padding: 4em 1rem;
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
          <ScrollToTop />
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/websites" element={<Websites />} />
            <Route path="/chatbots" element={<Chatbots />} />
            <Route path="/saveyourballs" element={<Health />} />
            <Route path="/contact" element={<Contact />} />
            <Route path='*' element={<Home />} />
          </Routes>
        </Router>
        <Footer />
      </AppContainer>
    </>
  );
}

export default App;

