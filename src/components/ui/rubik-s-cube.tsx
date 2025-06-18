import { Canvas } from "@react-three/fiber";
import { useFrame } from "@react-three/fiber";
import * as THREE from 'three';
import React, { Suspense, useRef, useState, useEffect, useMemo } from "react";
import { Vector3, Matrix4, Quaternion } from "three";
import { RoundedBox } from "@react-three/drei";

// Simple cube data interface
interface CubeData {
  position: Vector3;
  rotationMatrix: Matrix4;
  id: string;
}

function RubiksCubeModel() {
  const ANIMATION_DURATION = 1.2;
  const GAP = 0.01;
  const RADIUS = 0.04;
  const size = 0.45;
  
  const mainGroupRef = useRef<THREE.Group>(null);
  const isAnimatingRef = useRef(false);
  const currentRotationRef = useRef(0);
  const lastMoveAxisRef = useRef<string | null>(null);
  const currentMoveRef = useRef<any>(null);
  const isMountedRef = useRef(true); 
  
  const [cubes, setCubes] = useState<CubeData[]>([]);
  const [isVisible, setIsVisible] = useState(true);
  
  const reusableVec3 = useMemo(() => new Vector3(), []);
  const reusableMatrix4 = useMemo(() => new Matrix4(), []);
  const reusableQuaternion = useMemo(() => new Quaternion(), []);
  
  // Initialize cubes for 5x5x5
  const initializeCubes = () => {
    const initial: CubeData[] = [];
    const positions = [-2, -1, 0, 1, 2]; // 5x5x5 positions
    
    for (let x of positions) {
      for (let y of positions) {
        for (let z of positions) {
          initial.push({
            position: new Vector3(x, y, z),
            rotationMatrix: new Matrix4().identity(),
            id: `cube-${x}-${y}-${z}`,
          });
        }
      }
    }
    return initial;
  };

  useEffect(() => {
    setCubes(initializeCubes());
    
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (!isMountedRef.current) return;
      setIsVisible(document.visibilityState === "visible");
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  const possibleMoves = useMemo(() => {
    const moves = [];
    for (let axis of ['x', 'y', 'z']) {
      for (let layer of [-2, -1, 0, 1, 2]) { // 5x5x5 layers
        for (let direction of [1, -1]) {
          moves.push({ axis, layer, direction });
        }
      }
    }
    return moves;
  }, []);

  const isInLayer = (position: Vector3, axis: string, layer: number) => {
    const coord = axis === "x" ? position.x : axis === "y" ? position.y : position.z;
    return Math.abs(coord - layer) < 0.1;
  };

  const selectNextMove = () => {
    if (!isAnimatingRef.current && isVisible && isMountedRef.current) {
      const availableMoves = possibleMoves.filter(
        (move) => move.axis !== lastMoveAxisRef.current
      );
      
      const move = availableMoves[Math.floor(Math.random() * availableMoves.length)];
      const rotationAngle = Math.PI / 2;
            
      currentMoveRef.current = { ...move, rotationAngle };
      lastMoveAxisRef.current = move.axis;
      isAnimatingRef.current = true;
      currentRotationRef.current = 0;
    }
  };

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const scheduleNextMove = () => {
      if (isVisible && isMountedRef.current) {
        const delay = isAnimatingRef.current ? ANIMATION_DURATION * 1000 : 2000;
        
        timeoutId = setTimeout(() => {
            selectNextMove();
            if (isMountedRef.current) {
              scheduleNextMove();
            }
        }, delay);
      }
    };

    scheduleNextMove();

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [isVisible, possibleMoves]);

  const createRotationMatrix = (axis: string, angle: number) => {
    reusableMatrix4.identity();
    reusableQuaternion.identity();
    reusableVec3.set(0, 0, 0);
    
    (reusableVec3 as any)[axis] = 1;
    reusableQuaternion.setFromAxisAngle(reusableVec3, angle);
    return reusableMatrix4.makeRotationFromQuaternion(reusableQuaternion);
  };

  const easeInOutQuad = (t: number) => {
    return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
  };

  const matrixToQuaternion = (matrix: Matrix4) => {
    reusableQuaternion.setFromRotationMatrix(matrix);
    return reusableQuaternion.clone();
  };

  const normalizePositions = (cubes: CubeData[]) => {
    return cubes.map(cube => {
      const x = Math.round(cube.position.x);
      const y = Math.round(cube.position.y);
      const z = Math.round(cube.position.z);
      
      // Clamp to 5x5x5 range
      const clampedX = Math.max(-2, Math.min(2, x));
      const clampedY = Math.max(-2, Math.min(2, y));
      const clampedZ = Math.max(-2, Math.min(2, z));
      
      return {
        ...cube,
        position: new Vector3(clampedX, clampedY, clampedZ)
      };
    });
  };

  const updateCubes = (prevCubes: CubeData[], move: any, stepRotationMatrix: Matrix4) => {
    return prevCubes.map((cube) => {
      if (isInLayer(cube.position, move.axis, move.layer)) {
        const tempVec3 = new Vector3(
          cube.position.x,
          cube.position.y,
          cube.position.z
        );

        tempVec3.applyMatrix4(stepRotationMatrix);

        const newRotationMatrix = new Matrix4().multiplyMatrices(
          stepRotationMatrix,
          cube.rotationMatrix
        );

        return {
          ...cube,
          position: tempVec3,
          rotationMatrix: newRotationMatrix,
        };
      }
      return cube;
    });
  };

  useFrame((state, delta) => {
    if (!isVisible || !isMountedRef.current) return;

    // Slow rotation of the entire cube
    if (mainGroupRef.current) {
      mainGroupRef.current.rotation.x += delta * 0.1;
      mainGroupRef.current.rotation.y += delta * 0.15;
      mainGroupRef.current.rotation.z += delta * 0.05;
    }

    // Handle move animations
    if (isAnimatingRef.current && currentMoveRef.current) {
      const move = currentMoveRef.current;
      const targetRotation = move.rotationAngle;
      const rotation = delta / ANIMATION_DURATION;

      if (currentRotationRef.current < 1) {
        const newRotation = Math.min(currentRotationRef.current + rotation, 1);
        const prevRotation = currentRotationRef.current;
        currentRotationRef.current = newRotation;

        const easedProgress = easeInOutQuad(newRotation);
        const prevEasedProgress = easeInOutQuad(prevRotation);
        const currentAngle = easedProgress * targetRotation;
        const prevAngle = prevEasedProgress * targetRotation;
        const stepRotation = currentAngle - prevAngle;

        const stepRotationMatrix = createRotationMatrix(
          move.axis,
          stepRotation * move.direction
        );

        if (isMountedRef.current) {
          setCubes((prevCubes) => {
            const updatedCubes = updateCubes(prevCubes, move, stepRotationMatrix);
            
            if (newRotation >= 1) {
              const normalizedCubes = normalizePositions(updatedCubes);
              
              isAnimatingRef.current = false;
              currentRotationRef.current = 0;
              currentMoveRef.current = null;
              
              return normalizedCubes;
            }
            
            return updatedCubes;
          });
        }
      }
    }
  });

  const chromeMaterial = useMemo(() => ({
    color: '#dc2626', // red
    metalness: 1.2,  // Slightly less metallic for better color definition
    roughness: 0.15,  // Slightly more roughness for better light interaction
    envMapIntensity: 3 // high environment reflections
  }), []);

  return (
    <group ref={mainGroupRef}>
      {cubes.map((cube) => (
        <group
          key={cube.id}
          position={[
            cube.position.x * (size + GAP),
            cube.position.y * (size + GAP),
            cube.position.z * (size + GAP),
          ]}
          quaternion={matrixToQuaternion(cube.rotationMatrix)}
        >
          <RoundedBox
            args={[size, size, size]}
            radius={RADIUS}
            smoothness={4}
            castShadow
            receiveShadow
          >
            <meshStandardMaterial {...chromeMaterial} />
          </RoundedBox>
        </group>
      ))}
    </group>
  );
}

function CameraController() {
  useFrame(({ camera }) => {
    camera.lookAt(0, 0, 0);
  });
  
  return null;
}

function SceneContent() {
  return (
    <>
      {/* Enhanced lighting setup optimized for spotlight effect */}
      <ambientLight intensity={0.3} />
      
      {/* Main directional light for depth and form - reduced to work with spotlight */}
      <directionalLight
        position={[10, 10, 5]}
        intensity={0.7}
        color="#ffffff"
        castShadow={false}
      />
      
      {/* Subtle red-tinted point light for highlights - working with external spotlight */}
      <pointLight
        position={[5, 5, 5]}
        intensity={0.3}
        color="#dc2626" // Dark red
      />
      
      {/* Secondary dark red point light from opposite side */}
      <pointLight
        position={[-5, -5, -5]}
        intensity={0.2}
        color="#991b1b" // Darker red
      />
      
      {/* Spotlight-like effect from above to complement external spotlight */}
      <spotLight
        position={[0, 8, 0]}
        target-position={[0, 0, 0]}
        angle={0.6}
        penumbra={0.5}
        intensity={0.8}
        color="#dc2626"
        castShadow={false}
      />
      
      {/* Additional dramatic spotlight from the right side */}
      <spotLight
        position={[8, 2, 2]}
        target-position={[0, 0, 0]}
        angle={0.8}
        penumbra={0.4}
        intensity={1.0}
        color="#6b21a8"
        castShadow={false}
      />
      
      {/* Dramatic side lighting from left for cube illumination */}
      <spotLight
        position={[-6, 0, 4]}
        target-position={[0, 0, 0]}
        angle={0.7}
        penumbra={0.6}
        intensity={0.9}
        color="#dc2626"
        castShadow={false}
      />
      
      {/* Cool white light for contrast */}
      <pointLight
        position={[-10, 0, 10]}
        intensity={0.4}
        color="#e5e7eb" // Cool white
      />
      
      {/* Purple accent light for depth variation */}
      <pointLight
        position={[0, -10, 5]}
        intensity={0.2}
        color="#8b5cf6" // Purple accent
      />
      
      <CameraController />

      <Suspense fallback={null}>
        <RubiksCubeModel />
      </Suspense>
    </>
  );
}

export function Scene() {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    checkIsDesktop();
    window.addEventListener("resize", checkIsDesktop);
    return () => window.removeEventListener("resize", checkIsDesktop);
  }, []);

  return (
    <div className="h-svh w-screen relative">
      <Canvas
        shadows
        camera={{ position: [0, 0, 7], fov: 50 }}
        gl={{
          antialias: isDesktop,
          alpha: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1,
        }}
      >
        <SceneContent />
      </Canvas>
    </div>
  );
}