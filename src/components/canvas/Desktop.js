import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Desktop = ({ isMobile }) => {
  const desktop = useGLTF("./pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={1} groundColor='white' color='blue' />
      <spotLight
        color="white"
        position={[10, 3, -5]}
        angle={0.5}
        power={100}
        penumbra={1}
        intensity={100}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={desktop.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [-6.5, 1, -1]}
        rotation={[0, 0, 0]}
      />
    </mesh>
  );
};

const DesktopCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      style={{ height: "400px", width: "400px", margin: "auto" }}
      shadows dpr={[1, 2]} camera={{ position: [20, 5, 5], fov: 15 }}
      gl={{ preserveDrawingBuffer: true }} >
      <Suspense fallback={<CanvasLoader />}>
        <Environment preset="forest" environmentIntensity={0.7} />
        <OrbitControls enableZoom={true} autoRotate={true} enableRotate={true} enablePan={true} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2}/>
        <Desktop isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default DesktopCanvas;