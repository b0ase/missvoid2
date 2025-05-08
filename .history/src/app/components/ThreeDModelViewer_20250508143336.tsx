import { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment, useTexture } from '@react-three/drei';
import * as THREE from 'three';

// Basic 3D models for different product types
const CorsetModel: React.FC<{texture: THREE.Texture | null}> = ({ texture }) => {
  const mesh = useRef<THREE.Mesh>(null!);
  const frontPanel = useRef<THREE.Mesh>(null!);
  const backPanel = useRef<THREE.Mesh>(null!);
  
  // Animation effect
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.2;
    }
  });
  
  return (
    <group>
      {/* Main corset body - using a more sculptural approach for better realism */}
      <mesh ref={mesh} position={[0, 0, 0]}>
        <cylinderGeometry args={[1, 0.7, 2, 32, 8, true]} />
        {texture ? (
          <meshPhysicalMaterial 
            map={texture} 
            roughness={0.5} 
            metalness={0.1} 
            clearcoat={0.4}
            clearcoatRoughness={0.2}
            side={THREE.DoubleSide} 
          />
        ) : (
          <meshPhysicalMaterial 
            color="black" 
            roughness={0.5} 
            metalness={0.1} 
            clearcoat={0.4} 
            clearcoatRoughness={0.2}
            side={THREE.DoubleSide} 
          />
        )}
      </mesh>
      
      {/* Boning details */}
      {[...Array(8)].map((_, index) => {
        const angle = (index / 8) * Math.PI * 2;
        return (
          <mesh 
            key={index} 
            position={[
              Math.sin(angle) * 0.85, 
              0, 
              Math.cos(angle) * 0.85
            ]}
            rotation={[0, angle, 0]}
          >
            <boxGeometry args={[0.05, 1.8, 0.02]} />
            <meshStandardMaterial color="#333" roughness={0.3} metalness={0.8} />
          </mesh>
        );
      })}
      
      {/* Lacing details */}
      <mesh position={[-0.9, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
        <cylinderGeometry args={[0.01, 0.01, 1.6, 8]} />
        <meshStandardMaterial color="#888" roughness={0.3} metalness={0.8} />
      </mesh>
      
      {/* Front and back panels with different texture mapping */}
      <mesh ref={frontPanel} position={[0, 0, -0.9]} rotation={[0, 0, 0]}>
        <planeGeometry args={[1.8, 1.8]} />
        {texture ? (
          <meshPhysicalMaterial 
            map={texture}
            roughness={0.5}
            metalness={0.2}
            side={THREE.DoubleSide}
          />
        ) : (
          <meshStandardMaterial 
            color="black" 
            roughness={0.5} 
            metalness={0.2}
            side={THREE.DoubleSide}
          />
        )}
      </mesh>
    </group>
  );
};

const HarnessModel: React.FC<{texture: THREE.Texture | null}> = ({ texture }) => {
  const mesh = useRef<THREE.Mesh>(null!);
  
  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.005;
    }
  });
  
  return (
    <group ref={mesh}>
      {/* Main chest harness */}
      <mesh position={[0, 0, 0]}>
        <torusGeometry args={[1, 0.05, 16, 32]} />
        {texture ? (
          <meshStandardMaterial map={texture} roughness={0.7} metalness={0.2} />
        ) : (
          <meshStandardMaterial color="black" roughness={0.7} metalness={0.2} />
        )}
      </mesh>
      
      {/* Shoulder straps */}
      <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.7, 0.03, 16, 32, Math.PI]} />
        <meshStandardMaterial color="black" roughness={0.7} metalness={0.2} />
      </mesh>
      
      {/* Vertical strap */}
      <mesh position={[0, -0.5, 0]}>
        <boxGeometry args={[0.05, 1, 0.02]} />
        <meshStandardMaterial color="black" roughness={0.7} metalness={0.2} />
      </mesh>
    </group>
  );
};

const BodysuitModel: React.FC<{texture: THREE.Texture | null}> = ({ texture }) => {
  const mesh = useRef<THREE.Mesh>(null!);
  
  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.005;
    }
  });
  
  return (
    <group ref={mesh}>
      {/* Main bodysuit */}
      <mesh position={[0, 0, 0]}>
        <capsuleGeometry args={[0.8, 2, 16, 32]} />
        {texture ? (
          <meshStandardMaterial map={texture} roughness={0.5} metalness={0.1} />
        ) : (
          <meshStandardMaterial color="black" roughness={0.5} metalness={0.1} />
        )}
      </mesh>
    </group>
  );
};

const DressModel: React.FC<{texture: THREE.Texture | null}> = ({ texture }) => {
  const mesh = useRef<THREE.Mesh>(null!);
  
  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.005;
    }
  });
  
  return (
    <group ref={mesh}>
      {/* Torso */}
      <mesh position={[0, 0.5, 0]}>
        <cylinderGeometry args={[0.8, 0.7, 1.5, 32]} />
        {texture ? (
          <meshStandardMaterial map={texture} roughness={0.6} metalness={0.1} />
        ) : (
          <meshStandardMaterial color="black" roughness={0.6} metalness={0.1} />
        )}
      </mesh>
      
      {/* Skirt */}
      <mesh position={[0, -0.5, 0]}>
        <coneGeometry args={[1.5, 2, 32, 1, true]} />
        {texture ? (
          <meshStandardMaterial map={texture} roughness={0.6} metalness={0.1} side={THREE.DoubleSide} />
        ) : (
          <meshStandardMaterial color="black" roughness={0.6} metalness={0.1} side={THREE.DoubleSide} />
        )}
      </mesh>
    </group>
  );
};

const MaskModel: React.FC<{texture: THREE.Texture | null}> = ({ texture }) => {
  const mesh = useRef<THREE.Mesh>(null!);
  
  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.005;
    }
  });
  
  return (
    <mesh ref={mesh} position={[0, 0, 0]}>
      <sphereGeometry args={[0.7, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2]} />
      {texture ? (
        <meshStandardMaterial map={texture} roughness={0.5} metalness={0.3} side={THREE.DoubleSide} />
      ) : (
        <meshStandardMaterial color="black" roughness={0.5} metalness={0.3} side={THREE.DoubleSide} />
      )}
    </mesh>
  );
};

const SkirtModel: React.FC<{texture: THREE.Texture | null}> = ({ texture }) => {
  const mesh = useRef<THREE.Mesh>(null!);
  
  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.005;
    }
  });
  
  return (
    <mesh ref={mesh} position={[0, 0, 0]}>
      <coneGeometry args={[1.5, 2, 32, 1, true]} />
      {texture ? (
        <meshStandardMaterial map={texture} roughness={0.6} metalness={0.1} side={THREE.DoubleSide} />
      ) : (
        <meshStandardMaterial color="black" roughness={0.6} metalness={0.1} side={THREE.DoubleSide} />
      )}
    </mesh>
  );
};

// Scene setup with lighting
const SceneSetup: React.FC = () => {
  const { camera } = useThree();
  
  useEffect(() => {
    camera.position.z = 4;
  }, [camera]);
  
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
      <directionalLight position={[-10, -10, -5]} intensity={0.5} />
      <OrbitControls enableZoom={true} />
    </>
  );
};

interface ThreeDModelViewerProps {
  productType: string;
  designImage?: string;
  measurements?: {
    bust: number;
    waist: number;
    hips: number;
    [key: string]: number;
  };
}

const ThreeDModelViewer: React.FC<ThreeDModelViewerProps> = ({ productType, designImage, measurements }) => {
  const textureLoader = new THREE.TextureLoader();
  const [texture, setTexture] = useState<THREE.Texture | null>(null);
  
  useEffect(() => {
    if (designImage) {
      textureLoader.load(designImage, (loadedTexture) => {
        loadedTexture.wrapS = THREE.RepeatWrapping;
        loadedTexture.wrapT = THREE.RepeatWrapping;
        // Adjust UV mapping to make the texture cover the model appropriately
        loadedTexture.repeat.set(1, 1);
        loadedTexture.offset.set(0, 0);
        // Improve texture appearance
        loadedTexture.anisotropy = 16;
        setTexture(loadedTexture);
      });
    }
  }, [designImage]);

  // Map product type to the corresponding model component
  const getModelComponent = () => {
    switch(productType) {
      case 'corset':
        return <CorsetModel texture={texture} />;
      case 'harness':
        return <HarnessModel texture={texture} />;
      case 'bodysuit':
        return <BodysuitModel texture={texture} />;
      case 'dress':
        return <DressModel texture={texture} />;
      case 'mask':
        return <MaskModel texture={texture} />;
      case 'skirt':
        return <SkirtModel texture={texture} />;
      default:
        return <CorsetModel texture={texture} />;
    }
  };
  
  return (
    <div className="w-full h-[400px] bg-gray-900 rounded">
      <Canvas shadows>
        <SceneSetup />
        <PerspectiveCamera makeDefault />
        <Environment preset="studio" />
        {getModelComponent()}
      </Canvas>
    </div>
  );
};

export default ThreeDModelViewer; 