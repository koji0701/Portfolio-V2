
import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { InstancedMesh, Object3D, Color } from "three";
import * as THREE from "three";

// Performance-optimized floating shapes using InstancedMesh
const FloatingShapes = () => {
  const meshRef = useRef<InstancedMesh>(null);
  const count = 50; // Reduced count for mobile performance
  
  // Create temporary object for transformations
  const tempObject = useMemo(() => new Object3D(), []);
  
  // Generate random positions and properties for each instance
  const dummy = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      temp.push({
        position: [
          (Math.random() - 0.5) * 40,
          (Math.random() - 0.5) * 40,
          (Math.random() - 0.5) * 20
        ],
        rotation: [
          Math.random() * Math.PI,
          Math.random() * Math.PI,
          Math.random() * Math.PI
        ],
        scale: Math.random() * 0.5 + 0.1,
        speed: Math.random() * 0.02 + 0.005
      });
    }
    return temp;
  }, []);

  // Animation loop
  useFrame((state) => {
    if (!meshRef.current) return;

    const time = state.clock.getElapsedTime();

    for (let i = 0; i < count; i++) {
      const { position, rotation, scale, speed } = dummy[i];
      
      // Apply floating animation
      tempObject.position.set(
        position[0] + Math.sin(time * speed + i) * 2,
        position[1] + Math.cos(time * speed * 0.5 + i) * 1.5,
        position[2] + Math.sin(time * speed * 0.3 + i) * 1
      );
      
      // Apply rotation
      tempObject.rotation.set(
        rotation[0] + time * speed,
        rotation[1] + time * speed * 0.7,
        rotation[2] + time * speed * 0.5
      );
      
      // Apply scale with breathing effect
      const breathingScale = scale * (1 + Math.sin(time * 2 + i) * 0.1);
      tempObject.scale.setScalar(breathingScale);
      
      // Update matrix
      tempObject.updateMatrix();
      meshRef.current.setMatrixAt(i, tempObject.matrix);
    }
    
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh
      ref={meshRef}
      args={[undefined, undefined, count]}
      frustumCulled={true} // Enable frustum culling for performance
    >
      {/* Use simple geometry for performance */}
      <octahedronGeometry args={[1, 0]} />
      <meshPhongMaterial
        color={new Color(0.5, 0.3, 0.8)}
        transparent
        opacity={0.6}
        shininess={100}
        specular={new Color(0.8, 0.5, 1)}
      />
    </instancedMesh>
  );
};

export default FloatingShapes;
