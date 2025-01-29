import './App.css';

import { Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer.jsx';
import Header from './Components/Header/Header.jsx';
import Home from './Components/Home/Home.jsx';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Home />} />
        <Route path="/projects" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>

      <Header />
      <Footer />
    </>
  );
}

export default App;
