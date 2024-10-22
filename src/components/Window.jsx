import { useState, useEffect } from 'react';
import 'winbox/dist/css/winbox.min.css'; // required
// import 'winbox/dist/css/themes/modern.min.css'; // optional
import "./Window.css"
import WinBox from 'react-winbox';
import DesktopCanvas from './canvas/Desktop';

const Window = ({ showWindow, windowContent, closeWindow }) => {
  const [theme, setTheme] = useState('modern');
  return (
    <>
      <div style={{zIndex:"1000"}} className='win' >
        {showWindow && (
        <WinBox
          title="Persistent Window"
          width={800}
          height={600}
          className={theme ? theme : ''}
          x="center"
          y={150}
          onclose={closeWindow}
        >
          <div>
            <h1>Customize Your PC{windowContent}</h1>
            <DesktopCanvas/>
          </div>
        </WinBox>
      )}         
      </div>
    </>
  )

}

export default Window;