
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";

const SpinningCube = () => {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    
    // Slow rotation
    meshRef.current.rotation.x += 0.005;
    meshRef.current.rotation.y += 0.008;
    meshRef.current.rotation.z += 0.003;
    
    // Subtle floating motion
    meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
  });

  return (
    <mesh ref={meshRef} position={[0, 0, -2]}>
      <boxGeometry args={[2, 2, 2]} />
      <meshPhongMaterial 
        color="#a855f7" 
        transparent 
        opacity={0.3}
        wireframe={true}
      />
    </mesh>
  );
};

export default SpinningCube;
