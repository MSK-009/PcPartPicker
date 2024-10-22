import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computer = ({ isMobile }) => {
  const computer = useGLTF("./computer/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={1} groundColor='black' />
      <spotLight
        position={[0, -10, 0]}
        color="#FF0000"
        // power={10}
        angle={0.12}
        penumbra={1}
        intensity={100}
        castShadow
        shadow-mapSize={1024}
        target={computer.scene}
      />
      <pointLight intensity={10} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 10}
        position={isMobile ? [0, -3, -2.2] : [0, -10, 0]}
        rotation={[0, 0, 0]}
      />
    </mesh>
  );
};

const ComputerCanvas = () => {
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
      style={{height:"400px"}}
      shadows
      dpr={[1, 2]}
      camera={{ position: [25, 5, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computer isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputerCanvas;
