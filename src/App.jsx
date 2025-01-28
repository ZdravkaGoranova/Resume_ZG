import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Header/Home.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Header from './Components/Header/Header.jsx';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/about" element={<Home />} />
        </Routes>
        <Header></Header>
        <Home></Home>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
