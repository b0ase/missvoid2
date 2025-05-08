import { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

// Basic 3D models for different product types
const CorsetModel = () => {
  const mesh = useRef<THREE.Mesh>(null!);
  
  // Animation effect
  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.005;
    }
  });
  
  return (
    <group>
      {/* Main corset body */}
      <mesh ref={mesh} position={[0, 0, 0]}>
        <cylinderGeometry args={[1, 0.8, 2, 32, 1, true]} />
        <meshStandardMaterial color="black" roughness={0.5} metalness={0.2} side={THREE.DoubleSide} />
      </mesh>
      
      {/* Straps */}
      <mesh position={[0, 1, 0]}>
        <torusGeometry args={[1.05, 0.05, 16, 32, Math.PI]} />
        <meshStandardMaterial color="black" roughness={0.5} metalness={0.3} />
      </mesh>
    </group>
  );
};

const HarnessModel = () => {
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
        <meshStandardMaterial color="black" roughness={0.7} metalness={0.2} />
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

const BodysuitModel = () => {
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
        <meshStandardMaterial color="black" roughness={0.5} metalness={0.1} />
      </mesh>
    </group>
  );
};

const DressModel = () => {
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
        <meshStandardMaterial color="black" roughness={0.6} metalness={0.1} />
      </mesh>
      
      {/* Skirt */}
      <mesh position={[0, -0.5, 0]}>
        <coneGeometry args={[1.5, 2, 32, 1, true]} />
        <meshStandardMaterial color="black" roughness={0.6} metalness={0.1} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
};

const MaskModel = () => {
  const mesh = useRef<THREE.Mesh>(null!);
  
  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.005;
    }
  });
  
  return (
    <mesh ref={mesh} position={[0, 0, 0]}>
      <sphereGeometry args={[0.7, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2]} />
      <meshStandardMaterial color="black" roughness={0.5} metalness={0.3} side={THREE.DoubleSide} />
    </mesh>
  );
};

const SkirtModel = () => {
  const mesh = useRef<THREE.Mesh>(null!);
  
  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.005;
    }
  });
  
  return (
    <mesh ref={mesh} position={[0, 0, 0]}>
      <coneGeometry args={[1.5, 2, 32, 1, true]} />
      <meshStandardMaterial color="black" roughness={0.6} metalness={0.1} side={THREE.DoubleSide} />
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
        setTexture(loadedTexture);
      });
    }
  }, [designImage]);

  // Map product type to the corresponding model component
  const getModelComponent = () => {
    switch(productType) {
      case 'corset':
        return <CorsetModel />;
      case 'harness':
        return <HarnessModel />;
      case 'bodysuit':
        return <BodysuitModel />;
      case 'dress':
        return <DressModel />;
      case 'mask':
        return <MaskModel />;
      case 'skirt':
        return <SkirtModel />;
      default:
        return <CorsetModel />;
    }
  };
  
  return (
    <div className="w-full h-[400px] bg-gray-900 rounded">
      <Canvas shadows>
        <SceneSetup />
        <PerspectiveCamera makeDefault />
        {getModelComponent()}
      </Canvas>
    </div>
  );
};

export default ThreeDModelViewer; 