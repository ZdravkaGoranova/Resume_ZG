import './App.css';

import { Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer.jsx';
import Header from './Components/Header/Header.jsx';
import Home from './Components/Home/Home.jsx';
import About from './Components/About/About.jsx';
import Projects from './Components/Projects/Projects.jsx';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<Home />} />
      </Routes>

      <Header />
      <Footer />
    </>
  );
}

export default App;
