import { useState, useEffect, lazy, Suspense } from 'react';
import 'winbox/dist/css/winbox.min.css'; // required
// import 'winbox/dist/css/themes/modern.min.css'; // optional
import "./Window.css"
import WinBox from 'react-winbox';
// import DesktopCanvas from './canvas/Desktop';

const DesktopCanvas = lazy(()=> import('./canvas/Desktop'))

const Window = ({ showWindow, windowContent, closeWindow }) => {
  const [theme, setTheme] = useState('modern');
  const [dimensions, setDimensions] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      const widthInPx = window.innerWidth * (80 / 100); // Convert 50vw to px
      const heightInPx = window.innerHeight * (80 / 100); // Convert 50vh to px
      setWindowSize({ width: widthInPx, height: heightInPx });
    };

    handleResize(); // Set initial size
    window.addEventListener('resize', handleResize); // Update size on resize

    return () => {
      window.removeEventListener('resize', handleResize); // Clean up
    };
  }, []);

  useEffect(() => {
    const updateDimensions = () => {
      
      const isMobile = window.matchMedia("(max-width: 768px)").matches;
      if (isMobile) {
        setDimensions(true)
      } else {
        setDimensions(false)
      }
    };

    updateDimensions(); // Set initial dimensions on mount
    window.addEventListener('resize', updateDimensions); // Update on resize

    return () => {
      window.removeEventListener('resize', updateDimensions); // Cleanup listener
    };
  }, []);

  return (
    <>
      <div style={{zIndex:"1000"}} className='win' >
        {showWindow && (
        <WinBox
          title="Customize PC"
          width={windowSize.width}
          height={windowSize.height}
          className={theme ? theme : ''}
          x="center"
          y={150}
          max={dimensions}
          noFull={true}
          onclose={closeWindow}
        >
          <div>
            <h1>Customize Your PC{windowContent}</h1>
            <hr />
            <Suspense >
              <DesktopCanvas/>
            </Suspense>
          </div>
        </WinBox>
      )}         
      </div>
    </>
  )

}

export default Window;