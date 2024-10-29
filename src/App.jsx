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
import Processors from './components/Parts/Processors';
import Graphics from './components/Parts/Graphics';


import ListState from './context/list/ListState';
import ProcessorState from './context/processors/ProcessorState';
import GPUState from './context/gpu/GPUState';
import PSUState from './context/psus/PSUState';
import Power from './components/Parts/Power';


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
      <ListState>
        <ProcessorState>
          <GPUState>
            <PSUState>
              <Window showWindow={showWindow} windowContent={windowContent} closeWindow={closeWindow} />
              <BrowserRouter>
                <Navbar openWindow={openWindow} updateContent={updateContent} />
                <div>
                  <Routes>
                    <Route exact path="/" element={<Home openWindow={openWindow} updateContent={updateContent} />} />
                    <Route exact path="/about" element={<Contact />} />
                    <Route exact path="/processors" element={<Processors />} />
                    <Route exact path="/gpu" element={<Graphics />} />
                    <Route exact path="/psu" element={<Power />} />
                  </Routes>
                </div>
                <Footer />
              </BrowserRouter>
            </PSUState>
          </GPUState>
        </ProcessorState>
      </ListState>
    </>
  )
}

export default App;