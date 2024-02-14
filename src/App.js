import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Menu from './components/Menu/Menu'; 
import Login from './pages/Login/Login';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
        <Router>
        {/* <header class="page-header"> */}
          <Menu />
          <Hero />
      {/*   </header> */}
          <Routes>
            <Route path="/about" element={<About/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="*" element={<h1>Not Found</h1>}/>
          </Routes>
          <Footer />
        </Router>
    </div>
  );
}

export default App;
