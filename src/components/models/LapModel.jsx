
"use client";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const LapModel = React.memo(function HatModel(props) {
  const { nodes, materials } = useGLTF("/models/Create_a_laptop_0317094001_texture.glb");

  const modelRef = useRef();

  useFrame(() => {
    modelRef.current.rotation.y += 0.007;
  });
  return (
    <group
      {...props}
      dispose={null}
      ref={modelRef}
      scale={[1.8, 1.8, 1.8]}
      rotation={[0.4, -1, 0]}
      position={[0, 1.5, 0]}
    >
        <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_0.geometry}
        material={nodes.mesh_0.material}
      />
    </group>
  );
});

export default LapModel;
useGLTF.preload("/models/Create_a_laptop_0317094001_texture.glb");
