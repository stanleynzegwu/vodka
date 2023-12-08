import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { LoadTextures } from "../utils";
import useStore from "../store/useStore";
import { label_And_Color } from "../constants";
export function CanModel(props) {
  const { nodes, materials } = useGLTF("/models/canModel.glb");
  const vodka_variant = useStore((state) => state.vodka_variant);
  const textures = LoadTextures([
    "vodkaBlack_label",
    "vodkaBlue_label",
    "vodkaPurple_label",
    "vodkaRed_label",
  ]);

  const [label, _] = label_And_Color[vodka_variant];
  materials.Material.map = textures[label];

  return (
    <group {...props} dispose={null} rotation-y={Math.PI / 1.5}>
      <mesh name="others" geometry={nodes.others.geometry} material={materials.Aluminio} />
      <mesh name="cock" geometry={nodes.cock.geometry} material={materials.AluminioAzul} />
      <mesh
        name="bodyTexture"
        geometry={nodes.bodyTexture.geometry}
        material={materials.Material}
      />
      <mesh name="rim" geometry={nodes.rim.geometry} material={materials["Material.001"]} />
      <mesh
        name="bodyColor"
        geometry={nodes.bodyColor.geometry}
        material={materials["Material.002"]}
      />
    </group>
  );
}

useGLTF.preload("/models/canModel.glb");
