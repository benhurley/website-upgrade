import { NavBar } from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from './pages/Home';
import { Portfolio } from './pages/Portfolio';
import { Domains } from './pages/Domains';
import { Contact } from './pages/Contact';
import { Footer } from './components/Footer';
import styled, { createGlobalStyle } from "styled-components";

const backgroundImg = require('./img/background.png')

const GlobalStyles = createGlobalStyle`
  body {
    background-image: url(${backgroundImg});
    background-size: contain;
    background-color: #000;
    background-repeat: no-repeat;
    min-height: 100vh;
  }
`;

const AppContainer = styled.div`
  text-align: center;
  font-family: 'Kdam Thmor Pro', sans-serif;
  color: white;
  overflow-x: hidden;
  color: white;
  padding: 60px 10px 100px 10px;
  line-height: 2;
`;

function App() {
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

