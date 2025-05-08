import { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment, useTexture } from '@react-three/drei';
import * as THREE from 'three';

/*
 * Advanced 3D Reconstruction Implementation Plan:
 * 
 * 1. Image Analysis:
 *    - Use AI-based image segmentation to isolate the garment silhouette
 *    - Extract contours and identify key points (waistline, neckline, etc.)
 *    - Determine garment type and shape characteristics
 * 
 * 2. 3D Model Generation:
 *    - Use a base mesh template for the identified garment type
 *    - Deform the mesh based on the extracted contours
 *    - Apply transformations to match extracted measurements
 *    - Add details like boning, straps, closures based on detected features
 * 
 * 3. Texture Mapping:
 *    - Create proper UV unwrapping for the generated model
 *    - Map the original image strategically to different parts of the model
 *    - Generate normal and displacement maps from the image to add depth
 * 
 * Implementation Options:
 * 1. Integrate a specialized 3D generation API like Kaedim or NVIDIA GET3D
 * 2. Use TensorFlow.js with a custom model for mesh generation
 * 3. Employ server-side processing with Python using libraries like:
 *    - OpenCV for image processing
 *    - PyTorch3D for mesh generation
 *    - Blender's Python API for detailed modeling
 */

// Basic 3D models for different product types
const CorsetModel: React.FC<{texture: THREE.Texture | null, analysisData: any}> = ({ texture, analysisData }) => {
  const mesh = useRef<THREE.Mesh>(null!);
  const frontPanel = useRef<THREE.Mesh>(null!);
  const backPanel = useRef<THREE.Mesh>(null!);
  
  // Animation effect
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.2;
    }
  });
  
  // If we have analysis data, use it to customize the model
  const cinchRatio = analysisData?.cinchRatio || 0.8; // Waist cinching (lower = more dramatic)
  const height = analysisData?.dimensions?.height || 2;
  const width = analysisData?.dimensions?.width || 1;
  
  // Create silhouette points from contour data or use defaults
  const generateSilhouette = () => {
    if (analysisData?.contours && analysisData.contours.length > 0) {
      // Use extracted contours for a custom silhouette
      return analysisData.contours.map((point: [number, number]) => {
        // Scale contour points to 3D space
        return new THREE.Vector2(
          (point[0] - 0.5) * width,
          (point[1] - 0.5) * height
        );
      });
    } else {
      // Default hourglass silhouette
      return [
        new THREE.Vector2(-0.5, -1),    // Bottom left
        new THREE.Vector2(0.5, -1),     // Bottom right
        new THREE.Vector2(0.6, -0.5),   // Lower right curve
        new THREE.Vector2(0.5 * cinchRatio, 0),   // Waist right
        new THREE.Vector2(0.6, 0.5),    // Upper right curve
        new THREE.Vector2(0.5, 1),      // Top right
        new THREE.Vector2(-0.5, 1),     // Top left
        new THREE.Vector2(-0.6, 0.5),   // Upper left curve
        new THREE.Vector2(-0.5 * cinchRatio, 0),  // Waist left
        new THREE.Vector2(-0.6, -0.5),  // Lower left curve
      ];
    }
  };
  
  return (
    <group>
      {/* Main corset body - using custom silhouette */}
      <mesh ref={mesh} position={[0, 0, 0]}>
        {analysisData ? (
          // Use LatheGeometry for a more accurate shape
          <latheGeometry 
            args={[generateSilhouette(), 32, 0, Math.PI * 2]}
          />
        ) : (
          // Fallback to cylinder geometry
          <cylinderGeometry args={[1, 0.7, 2, 32, 8, true]} />
        )}
        
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
      
      {/* Front panel with texture mapping */}
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

const HarnessModel: React.FC<{texture: THREE.Texture | null, analysisData: any}> = ({ texture, analysisData }) => {
  const group = useRef<THREE.Group>(null!);
  
  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.2;
    }
  });
  
  return (
    <group ref={group}>
      {/* Main chest harness */}
      <mesh position={[0, 0.2, 0]}>
        <torusGeometry args={[1, 0.06, 16, 32]} />
        {texture ? (
          <meshPhysicalMaterial 
            map={texture} 
            roughness={0.7} 
            metalness={0.3}
            clearcoat={0.3}
            side={THREE.DoubleSide}
          />
        ) : (
          <meshPhysicalMaterial 
            color="black" 
            roughness={0.7} 
            metalness={0.3}
            clearcoat={0.3}
          />
        )}
      </mesh>
      
      {/* Secondary chest strap */}
      <mesh position={[0, -0.2, 0]}>
        <torusGeometry args={[0.9, 0.04, 16, 32]} />
        {texture ? (
          <meshPhysicalMaterial 
            map={texture} 
            roughness={0.7} 
            metalness={0.3}
            clearcoat={0.3}
          />
        ) : (
          <meshPhysicalMaterial 
            color="black" 
            roughness={0.7} 
            metalness={0.3}
            clearcoat={0.3}
          />
        )}
      </mesh>
      
      {/* Shoulder straps */}
      <mesh position={[0, 0.2, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.7, 0.05, 16, 32, Math.PI]} />
        <meshStandardMaterial color="#111" roughness={0.7} metalness={0.4} />
      </mesh>
      
      {/* Vertical connecting straps */}
      {[-0.7, 0, 0.7].map((x, index) => (
        <mesh key={index} position={[x, 0, 0]}>
          <cylinderGeometry args={[0.03, 0.03, 0.5, 8]} />
          <meshStandardMaterial color="#111" roughness={0.7} metalness={0.4} />
        </mesh>
      ))}
      
      {/* Hardware details */}
      {[-0.7, 0, 0.7].map((x, index) => (
        <mesh key={`ring-${index}`} position={[x, 0.25, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.06, 0.015, 8, 16]} />
          <meshStandardMaterial color="#555" roughness={0.2} metalness={0.9} />
        </mesh>
      ))}
      
      {/* Front panel with texture */}
      <mesh position={[0, 0, -0.9]} rotation={[0, 0, 0]}>
        <planeGeometry args={[1.5, 1.2]} />
        {texture ? (
          <meshPhysicalMaterial 
            map={texture}
            roughness={0.6}
            metalness={0.2}
            side={THREE.DoubleSide}
          />
        ) : (
          <meshStandardMaterial 
            color="black" 
            roughness={0.6} 
            metalness={0.2}
            side={THREE.DoubleSide}
          />
        )}
      </mesh>
    </group>
  );
};

const BodysuitModel: React.FC<{texture: THREE.Texture | null, analysisData: any}> = ({ texture, analysisData }) => {
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

const DressModel: React.FC<{texture: THREE.Texture | null, analysisData: any}> = ({ texture, analysisData }) => {
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

const MaskModel: React.FC<{texture: THREE.Texture | null, analysisData: any}> = ({ texture, analysisData }) => {
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

const SkirtModel: React.FC<{texture: THREE.Texture | null, analysisData: any}> = ({ texture, analysisData }) => {
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
    camera.position.y = 0.5;
  }, [camera]);
  
  return (
    <>
      <ambientLight intensity={0.7} />
      <spotLight 
        position={[5, 5, 5]} 
        angle={0.3} 
        penumbra={0.8} 
        intensity={1.5} 
        castShadow 
        shadow-mapSize-width={2048} 
        shadow-mapSize-height={2048}
      />
      <spotLight
        position={[-5, 5, -5]}
        angle={0.3}
        penumbra={0.8}
        intensity={0.8}
        castShadow
      />
      <directionalLight position={[0, 5, 0]} intensity={0.5} />
      <OrbitControls 
        enableZoom={true} 
        maxPolarAngle={Math.PI * 0.9}
        minPolarAngle={Math.PI * 0.1}
      />
      {/* Create a simple environment instead of loading external resources */}
      <mesh scale={100} receiveShadow>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial side={THREE.BackSide} color="#111111" />
      </mesh>
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
  isLoading?: boolean;
}

const ThreeDModelViewer: React.FC<ThreeDModelViewerProps> = ({ productType, designImage, measurements, isLoading }) => {
  const textureLoader = new THREE.TextureLoader();
  const [texture, setTexture] = useState<THREE.Texture | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisData, setAnalysisData] = useState<any>(null);
  
  // Load texture from image
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
      
      // Analyze the image to extract shape information
      analyzeImage(designImage);
    }
  }, [designImage]);
  
  // Function to analyze the image and get shape data
  const analyzeImage = async (imageUrl: string) => {
    try {
      setIsAnalyzing(true);
      
      const response = await fetch('/api/analyze-image', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          imageUrl,
          productType
        })
      });
      
      if (!response.ok) {
        throw new Error('Failed to analyze image');
      }
      
      const data = await response.json();
      setAnalysisData(data.analysisData);
      console.log('Image analysis data:', data.analysisData);
      
    } catch (error) {
      console.error('Error analyzing image:', error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  // Map product type to the corresponding model component
  const getModelComponent = () => {
    switch(productType) {
      case 'corset':
        return <CorsetModel texture={texture} analysisData={analysisData} />;
      case 'harness':
        return <HarnessModel texture={texture} analysisData={analysisData} />;
      case 'bodysuit':
        return <BodysuitModel texture={texture} analysisData={analysisData} />;
      case 'dress':
        return <DressModel texture={texture} analysisData={analysisData} />;
      case 'mask':
        return <MaskModel texture={texture} analysisData={analysisData} />;
      case 'skirt':
        return <SkirtModel texture={texture} analysisData={analysisData} />;
      default:
        return <CorsetModel texture={texture} analysisData={analysisData} />;
    }
  };
  
  return (
    <div className="w-full h-[400px] bg-gray-900 rounded">
      {(isAnalyzing || isLoading) && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 z-10 rounded">
          <div className="w-12 h-12 border-t-4 border-white rounded-full animate-spin"></div>
          <p className="mt-4 text-white font-semibold">
            {isLoading ? 'Converting to 3D model...' : 'Analyzing image...'}
          </p>
          <p className="text-sm text-gray-400 mt-2">
            {isLoading ? 'Please wait while we process your design' : 'Extracting garment shape'}
          </p>
        </div>
      )}
      <Canvas shadows>
        <SceneSetup />
        <PerspectiveCamera makeDefault />
        {getModelComponent()}
      </Canvas>
    </div>
  );
};

export default ThreeDModelViewer; 