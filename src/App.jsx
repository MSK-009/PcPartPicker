import './App.css';
import { useState, useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Navbar from './components/Header';
import Home from './pages/Landing';
import Footer from './components/Footer';
import Window from './components/Window';
import Contact from './pages/Contact';

function App() {
  const [showWindow, setShowWindow] = useState(false);
    const [windowContent, setWindowContent] = useState('');
    useEffect(() => {
        const savedContent = localStorage.getItem('windowContent');
        if (savedContent) {
          setWindowContent(savedContent);
        }
      }, []);
    
      const openWindow = () => {
        setShowWindow(true);
      };
    
      const closeWindow = () => {
        setShowWindow(false);
      };
    
      const updateContent = () => {
        const content = "";
        setWindowContent(content);
        localStorage.setItem('windowContent', content);
      };
  return (
    <>
        <Window showWindow={showWindow} windowContent={windowContent} closeWindow={closeWindow}/>
        <BrowserRouter>
          <Navbar openWindow={openWindow} updateContent={updateContent}/>
          <div className='container'>
            <Routes>
              <Route exact path="/" element={ <Home openWindow={openWindow} updateContent={updateContent}/> } />
              <Route exact path="/about" element={ <Contact/>}/>
            </Routes>
          </div>
          <Footer/>
        </BrowserRouter>
    </>
  )
}

export default App;