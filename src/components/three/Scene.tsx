import { useRef, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import FloatingShapes from "./FloatingShapes";
import SpinningCube from "./SpinningCube";

// Fallback component for Three.js loading
const CanvasLoader = () => (
  <div className="absolute inset-0 bg-luxurious-black">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-red-900/10" />
  </div>
);

// Mobile fallback with static gradient
const StaticBackground = () => (
  <div className="absolute inset-0 bg-luxurious-black">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-red-900/20 animate-pulse" />
  </div>
);

interface SceneProps {
  isMobile?: boolean;
  reduceMotion?: boolean;
  showSpinningCube?: boolean;
}

const Scene = ({ isMobile = false, reduceMotion = false, showSpinningCube = false }: SceneProps) => {
  // Use static background for mobile or reduced motion preference
  if (isMobile || reduceMotion) {
    return <StaticBackground />;
  }

  return (
    <div className="absolute inset-0">
      <Suspense fallback={<CanvasLoader />}>
        <Canvas
          // Performance optimizations
          frameloop="demand" // Only render when needed
          dpr={[1, 1.5]} // Limit pixel ratio for performance
          camera={{
            position: [0, 0, 10],
            fov: 60,
            near: 0.1,
            far: 100
          }}
          gl={{
            antialias: false, // Disable for mobile performance
            alpha: true,
            powerPreference: "high-performance"
          }}
          style={{ pointerEvents: "none" }} // Prevent Three.js from blocking scroll
        >
          {/* Ambient lighting */}
          <ambientLight intensity={0.3} />
          
          {/* Directional light for depth */}
          <directionalLight
            position={[10, 10, 5]}
            intensity={0.7}
            castShadow={false} // Disable shadows for performance
          />
          
          {/* Point light for highlights */}
          <pointLight
            position={[-10, -10, -10]}
            intensity={0.5}
            color="#8b5cf6"
          />

          {/* Conditional spinning cube for hero */}
          {showSpinningCube && <SpinningCube />}

          {/* Floating shapes component */}
          <FloatingShapes />
        </Canvas>
      </Suspense>
    </div>
  );
};

export default Scene;
