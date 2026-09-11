"use client";

import { useRef, Suspense } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Sphere, Html } from "@react-three/drei";
import * as THREE from "three";

// Bangalore coordinates: 12.9716° N, 77.5946° E
const BANGALORE_LAT = 12.9716;
const BANGALORE_LON = 77.5946;

// Convert lat/lon to 3D coordinates on sphere
function latLonToVector3(lat: number, lon: number, radius: number) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);

  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const y = radius * Math.cos(phi);
  const z = radius * Math.sin(phi) * Math.sin(theta);

  return new THREE.Vector3(x, y, z);
}

function LocationMarker({ position }: { position: THREE.Vector3 }) {
  return (
    <group position={position}>
      {/* Marker pin */}
      <mesh>
        <sphereGeometry args={[0.06, 16, 16]} />
        <meshStandardMaterial color="#fbbf24" emissive="#fbbf24" emissiveIntensity={1} />
      </mesh>
      {/* Pulsing ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.08, 0.13, 32]} />
        <meshBasicMaterial color="#fbbf24" transparent opacity={0.7} side={THREE.DoubleSide} />
      </mesh>
      {/* Outer glow ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.13, 0.18, 32]} />
        <meshBasicMaterial color="#fbbf24" transparent opacity={0.3} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
}

function EarthSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  const markerGroupRef = useRef<THREE.Group>(null);

  // Load the Earth texture
  const earthTexture = useLoader(THREE.TextureLoader, "/textures/earth.jpg");

  // Calculate Bangalore position on sphere
  const bangalorePosition = latLonToVector3(BANGALORE_LAT, BANGALORE_LON, 2);

  // Auto-rotate the globe
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002;
    }
    if (markerGroupRef.current) {
      markerGroupRef.current.rotation.y += 0.002;
    }
  });

  return (
    <>
      <Sphere ref={meshRef} args={[2, 64, 64]}>
        <meshStandardMaterial
          map={earthTexture}
          roughness={0.7}
          metalness={0.1}
        />
      </Sphere>
      <group ref={markerGroupRef}>
        <LocationMarker position={bangalorePosition} />
      </group>
    </>
  );
}

function LoadingFallback() {
  return (
    <Sphere args={[2, 32, 32]}>
      <meshStandardMaterial color="#1a4d6f" wireframe />
    </Sphere>
  );
}

export function Globe() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={2} />
        <directionalLight position={[10, 10, 5]} intensity={3} />
        <directionalLight position={[-10, -10, -5]} intensity={2} />
        <directionalLight position={[0, 10, 0]} intensity={1.5} />
        <pointLight position={[5, 5, 5]} intensity={1.5} color="#ffffff" />
        <pointLight position={[-5, -5, -5]} intensity={1} color="#ffffff" />

        <Suspense fallback={<LoadingFallback />}>
          <EarthSphere />
        </Suspense>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          minPolarAngle={Math.PI / 2.5}
          maxPolarAngle={Math.PI / 1.5}
        />
      </Canvas>
    </div>
  );
}
