"use client";

import { useRef, Suspense, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Html, RoundedBox } from "@react-three/drei";
import * as THREE from "three";

const cppCode = `#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

class RobotController {
private:
    vector<int> positions;
    int speed;

public:
    RobotController(int s) : speed(s) {
        positions.push_back(0);
    }

    void moveForward(int distance) {
        int current = positions.back();
        positions.push_back(current + distance);
        cout << "Robot moved to: " << positions.back() << endl;
    }

    void optimize() {
        sort(positions.begin(), positions.end());
        cout << "Path optimized!" << endl;
    }
};

int main() {
    RobotController bot(100);
    bot.moveForward(50);
    bot.moveForward(30);
    bot.optimize();

    return 0;
}`;

function TypingCode() {
  const [displayedCode, setDisplayedCode] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < cppCode.length) {
      const timeout = setTimeout(() => {
        setDisplayedCode(prev => prev + cppCode[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 30); // Typing speed

      return () => clearTimeout(timeout);
    } else {
      // Reset after a pause
      const resetTimeout = setTimeout(() => {
        setDisplayedCode("");
        setCurrentIndex(0);
      }, 3000);

      return () => clearTimeout(resetTimeout);
    }
  }, [currentIndex]);

  const lines = displayedCode.split('\n');

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#0d1117',
        color: '#c9d1d9',
        fontFamily: "'Fira Code', 'Consolas', monospace",
        fontSize: '11px',
        padding: '16px 20px',
        overflow: 'hidden',
        boxSizing: 'border-box',
      }}
    >
      {/* VS Code-like header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        marginBottom: '12px',
        paddingBottom: '10px',
        borderBottom: '1px solid #21262d'
      }}>
        <div style={{ display: 'flex', gap: '6px' }}>
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ff5f56' }} />
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ffbd2e' }} />
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#27c93f' }} />
        </div>
        <span style={{ color: '#8b949e', fontSize: '10px', fontWeight: '500' }}>main.cpp</span>
      </div>

      {/* Code content */}
      <pre style={{ margin: 0, lineHeight: '1.8', color: '#c9d1d9', fontFamily: 'inherit' }}>
        {lines.map((line, i) => (
          <div key={i} style={{ display: 'flex' }}>
            <span style={{
              color: '#484f58',
              marginRight: '16px',
              userSelect: 'none',
              minWidth: '28px',
              textAlign: 'right',
              fontSize: '10px'
            }}>
              {i + 1}
            </span>
            <span style={{
              color: line.includes('#include') ? '#ff7b72' :
                     line.includes('using') || line.includes('class') || line.includes('private') ||
                     line.includes('public') || line.includes('return') ? '#ff7b72' :
                     line.includes('int') || line.includes('void') || line.includes('vector') ? '#79c0ff' :
                     line.includes('cout') || line.includes('endl') || line.includes('sort') ? '#d2a8ff' :
                     line.includes('"') ? '#a5d6ff' :
                     line.includes('//') ? '#8b949e' :
                     '#c9d1d9',
              fontWeight: '400'
            }}>
              {line}
            </span>
          </div>
        ))}
        {currentIndex < cppCode.length && (
          <span style={{
            display: 'inline-block',
            width: '10px',
            height: '18px',
            backgroundColor: '#fbbf24',
            animation: 'blink 1s infinite',
            marginLeft: '2px'
          }} />
        )}
      </pre>
    </div>
  );
}

function MacBookPro() {
  const screenLightRef = useRef<THREE.PointLight>(null);

  useFrame((state) => {
    // Pulsing screen light
    if (screenLightRef.current) {
      screenLightRef.current.intensity = 2.5 + Math.sin(state.clock.elapsedTime * 2) * 0.4;
    }
  });

  return (
    <group position={[0, 1.2, 0]} rotation={[0, 0, 0]} scale={1.5}>
      {/* Laptop Base (Space Gray Aluminum) */}
      <RoundedBox args={[4, 0.12, 2.8]} radius={0.08} smoothness={4} position={[0, 0, 0]}>
        <meshStandardMaterial
          color="#9a9a9a"
          roughness={0.15}
          metalness={0.95}
          envMapIntensity={1.5}
        />
      </RoundedBox>

      {/* Bottom rubber feet */}
      <mesh position={[-1.5, -0.06, 1]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.08, 0.08, 0.01, 16]} />
        <meshStandardMaterial color="#3a3a3a" roughness={0.9} metalness={0.1} />
      </mesh>
      <mesh position={[1.5, -0.06, 1]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.08, 0.08, 0.01, 16]} />
        <meshStandardMaterial color="#3a3a3a" roughness={0.9} metalness={0.1} />
      </mesh>
      <mesh position={[-1.5, -0.06, -1]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.08, 0.08, 0.01, 16]} />
        <meshStandardMaterial color="#3a3a3a" roughness={0.9} metalness={0.1} />
      </mesh>
      <mesh position={[1.5, -0.06, -1]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.08, 0.08, 0.01, 16]} />
        <meshStandardMaterial color="#3a3a3a" roughness={0.9} metalness={0.1} />
      </mesh>

      {/* Keyboard area (black keys) */}
      <RoundedBox args={[3.6, 0.015, 2.2]} radius={0.02} smoothness={4} position={[0, 0.07, -0.2]}>
        <meshStandardMaterial
          color="#0a0a0a"
          roughness={0.8}
          metalness={0.1}
        />
      </RoundedBox>

      {/* Keyboard keys grid */}
      {Array.from({ length: 60 }).map((_, i) => {
        const row = Math.floor(i / 12);
        const col = i % 12;
        return (
          <RoundedBox
            key={`key-${i}`}
            args={[0.24, 0.02, 0.24]}
            radius={0.02}
            smoothness={2}
            position={[-1.6 + (col * 0.28), 0.08, -0.8 + (row * 0.28)]}
          >
            <meshStandardMaterial color="#2a2a2a" roughness={0.5} metalness={0.3} />
          </RoundedBox>
        );
      })}

      {/* Touch Bar (above keyboard) */}
      <RoundedBox args={[3.4, 0.01, 0.15]} radius={0.01} smoothness={4} position={[0, 0.075, -1.1]}>
        <meshStandardMaterial
          color="#1a1a1a"
          roughness={0.3}
          metalness={0.7}
          emissive="#3a3a3a"
          emissiveIntensity={0.8}
        />
      </RoundedBox>

      {/* Trackpad */}
      <RoundedBox args={[1.4, 0.005, 0.95]} radius={0.03} smoothness={4} position={[0, 0.065, 0.85]}>
        <meshStandardMaterial
          color="#5a5a5a"
          roughness={0.1}
          metalness={0.9}
        />
      </RoundedBox>

      {/* Speaker grills */}
      <RoundedBox args={[0.8, 0.01, 0.08]} radius={0.01} smoothness={2} position={[-1.5, 0.07, -1]}>
        <meshStandardMaterial color="#2a2a2a" roughness={0.7} metalness={0.3} />
      </RoundedBox>
      <RoundedBox args={[0.8, 0.01, 0.08]} radius={0.01} smoothness={2} position={[1.5, 0.07, -1]}>
        <meshStandardMaterial color="#2a2a2a" roughness={0.7} metalness={0.3} />
      </RoundedBox>

      {/* Hinge mechanism */}
      <mesh position={[0, 0.08, -1.38]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.05, 0.05, 4, 32]} />
        <meshStandardMaterial color="#7a7a7a" roughness={0.15} metalness={0.95} />
      </mesh>

      {/* Screen Lid Back (Space Gray Aluminum) */}
      <RoundedBox
        args={[4, 2.6, 0.12]}
        radius={0.08}
        smoothness={4}
        position={[0, 1.7, -1.5]}
        rotation={[-0.35, 0, 0]}
      >
        <meshStandardMaterial
          color="#9a9a9a"
          roughness={0.15}
          metalness={0.95}
          envMapIntensity={1.5}
        />
      </RoundedBox>

      {/* Apple Logo (glowing) */}
      <mesh position={[0, 1.7, -1.44]} rotation={[-0.35, 0, 0]}>
        <circleGeometry args={[0.15, 32]} />
        <meshStandardMaterial
          color="#c0c0c0"
          roughness={0.2}
          metalness={0.9}
          emissive="#ffffff"
          emissiveIntensity={0.4}
        />
      </mesh>

      {/* Screen Bezel (Black) - Ultra thin minimal bezel */}
      <RoundedBox
        args={[4, 2.6, 0.03]}
        radius={0.08}
        smoothness={4}
        position={[0, 1.7, -1.445]}
        rotation={[-0.35, 0, 0]}
      >
        <meshStandardMaterial
          color="#0a0a0a"
          roughness={0.6}
          metalness={0.1}
        />
      </RoundedBox>

      {/* Screen Display (Retina) - True Fullscreen */}
      <mesh position={[0, 1.7, -1.43]} rotation={[-0.35, 0, 0]}>
        <planeGeometry args={[3.95, 2.55]} />
        <meshBasicMaterial color="#0d1117" />
      </mesh>

      {/* Code overlay - True Fullscreen covering entire display */}
      <Html
        position={[0, 1.7, -1.425]}
        rotation={[-0.35, 0, 0]}
        transform
        distanceFactor={1.2}
        style={{
          width: '715px',
          height: '460px',
          pointerEvents: 'none',
        }}
      >
        <TypingCode />
        <style jsx>{`
          @keyframes blink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0; }
          }
        `}</style>
      </Html>

      {/* Screen reflection/glare */}
      <mesh position={[1.2, 2.2, -1.41]} rotation={[-0.35, 0, 0]}>
        <planeGeometry args={[1, 0.8]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.04} />
      </mesh>

      {/* Notch (camera area) */}
      <RoundedBox
        args={[0.25, 0.08, 0.04]}
        radius={0.01}
        smoothness={4}
        position={[0, 2.82, -1.44]}
        rotation={[-0.35, 0, 0]}
      >
        <meshStandardMaterial color="#000000" roughness={0.8} metalness={0.1} />
      </RoundedBox>

      {/* Camera lens */}
      <mesh position={[0, 2.82, -1.425]} rotation={[-0.35, 0, 0]}>
        <circleGeometry args={[0.02, 16]} />
        <meshStandardMaterial
          color="#0a0a0a"
          emissive="#00ff00"
          emissiveIntensity={0.8}
        />
      </mesh>

      {/* Screen glow light - Brighter */}
      <pointLight
        ref={screenLightRef}
        position={[0, 1.7, -1]}
        intensity={2.5}
        color="#6ab0ff"
        distance={5}
        decay={2}
      />

      {/* Keyboard backlight - Brighter */}
      <pointLight
        position={[0, 0.15, -0.2]}
        intensity={0.8}
        color="#ffffff"
        distance={2}
      />

      {/* Ambient light from Touch Bar */}
      <pointLight
        position={[0, 0.1, -1.1]}
        intensity={0.5}
        color="#ffffff"
        distance={0.8}
      />
    </group>
  );
}

function DeskSetup() {
  return (
    <group position={[0, -2.2, 0]} scale={1.1}>
      {/* Wooden desk - Brighter wood */}
      <RoundedBox args={[8, 0.15, 5]} radius={0.05} smoothness={4} position={[0, 0, 0]}>
        <meshStandardMaterial
          color="#b8935f"
          roughness={0.5}
          metalness={0.15}
        />
      </RoundedBox>

      {/* Desk edge highlight */}
      <mesh position={[0, 0.08, 2.5]}>
        <boxGeometry args={[8, 0.02, 0.05]} />
        <meshStandardMaterial color="#9a7a4f" roughness={0.6} metalness={0.1} />
      </mesh>

      {/* Desk shadow plane */}
      <mesh position={[0, 0.076, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[8, 5]} />
        <shadowMaterial opacity={0.2} />
      </mesh>

      {/* Coffee cup (to the side) */}
      <group position={[2.8, 0.08, 0.5]}>
        <mesh position={[0, 0.15, 0]}>
          <cylinderGeometry args={[0.12, 0.1, 0.3, 32]} />
          <meshStandardMaterial color="#f8f8f8" roughness={0.25} metalness={0.15} />
        </mesh>
        {/* Coffee inside */}
        <mesh position={[0, 0.28, 0]}>
          <cylinderGeometry args={[0.11, 0.11, 0.02, 32]} />
          <meshStandardMaterial color="#5e3a23" roughness={0.7} metalness={0.1} />
        </mesh>
      </group>

      {/* Notebook (to the side) */}
      <RoundedBox args={[0.6, 0.03, 0.8]} radius={0.01} smoothness={2} position={[-2.5, 0.09, 0.3]} rotation={[0, 0.3, 0]}>
        <meshStandardMaterial color="#3a3a3a" roughness={0.6} metalness={0.1} />
      </RoundedBox>

      {/* Pen */}
      <mesh position={[-2.3, 0.11, 0.5]} rotation={[0, 0, Math.PI / 4]}>
        <cylinderGeometry args={[0.015, 0.015, 0.5, 16]} />
        <meshStandardMaterial color="#2a2a2a" roughness={0.3} metalness={0.7} />
      </mesh>

      <MacBookPro />
    </group>
  );
}

function LoadingFallback() {
  return (
    <mesh>
      <boxGeometry args={[4, 2, 0.5]} />
      <meshStandardMaterial color="#1a4d6f" wireframe />
    </mesh>
  );
}

export function Laptop() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 2.5, 9], fov: 55 }}
        gl={{ alpha: true, antialias: true }}
        shadows
      >
        <ambientLight intensity={1.2} />
        <directionalLight
          position={[8, 12, 8]}
          intensity={2.5}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        <directionalLight position={[-8, 8, -5]} intensity={1.8} />
        <directionalLight position={[0, 10, 5]} intensity={1.5} />
        <spotLight
          position={[0, 15, 0]}
          intensity={2}
          angle={0.6}
          penumbra={1}
          castShadow
        />
        <pointLight position={[5, 5, 5]} intensity={1.5} color="#ffffff" />
        <pointLight position={[-5, 5, -5]} intensity={1.5} color="#ffffff" />

        <Suspense fallback={<LoadingFallback />}>
          <DeskSetup />
        </Suspense>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          minPolarAngle={Math.PI / 3.2}
          maxPolarAngle={Math.PI / 2.3}
          minAzimuthAngle={-Math.PI / 4}
          maxAzimuthAngle={Math.PI / 4}
        />
      </Canvas>
    </div>
  );
}
