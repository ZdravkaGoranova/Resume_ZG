import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Footer from './Components/Footer/Footer.jsx';
import Header from './Components/Header/Header.jsx';
import Home from './Components/Home/Home.jsx';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/about" element={<Home></Home>} />
        </Routes>

        <Header />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
