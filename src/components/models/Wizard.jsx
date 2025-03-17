"use client";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Wizard = React.memo(function Wizard(props) {
  const { nodes } = useGLTF('/models/Create_a_guy_using_la_0317101009_texture.glb');

  const modelRef = useRef(); 

  useFrame((state) => {
    if (modelRef.current) { 
      modelRef.current.position.y =
        0.2 + Math.sin(state.clock.elapsedTime) * 0.15; 
    }
  });

  return (
    <group ref={modelRef} position={[0, 0.2, 0]} rotation={[0, 5, 6]} scale={[1.5, 1.5, 1.5]} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_0.geometry}
        material={nodes.mesh_0.material}
      />
    </group>
  );
});

export default Wizard;
useGLTF.preload('/models/Create_a_guy_using_la_0317101009_texture.glb');

