import React, { useEffect, useLayoutEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { LoadTextures } from "../utils";
import useStore from "../store/useStore";
import { label_And_Color } from "../constants";
import { useFrame, useThree } from "@react-three/fiber";
import { useControls } from "leva";

export function CanModel(props) {
  const { nodes, materials } = useGLTF("/models/can2.glb");
  const groupRef = useRef();
  const vodka_variant = useStore((state) => state.vodka_variant);
  const textures = LoadTextures([
    "vodkaBlack_label",
    "vodkaBlue_label",
    "vodkaPurple_label",
    "vodkaRed_label",
  ]);

  const { scene, camera } = useThree();
  const tl = gsap.timeline();
  gsap.registerPlugin(ScrollTrigger);
  useLayoutEffect(() => {
    new ScrollTrigger({});
    // component About.tsx
    tl.to(groupRef.current.position, {
      x: 1.7,
      y: 0.45,
      z: -0.45,
      scrollTrigger: {
        trigger: ".section_two",
        start: "top bottom",
        end: "top top",
        scrub: true,
        immediateRender: false,
      },
    }).to(groupRef.current.rotation, {
      x: -0.84,
      y: 1,
      z: -0.76,
      scrollTrigger: {
        trigger: ".section_two",
        start: "top bottom",
        end: "top top",
        scrub: true,
        immediateRender: false,
      },
    });

    // .to(scene.rotation, {
    // 	x: -0.53,
    // 	y: -3.48,
    // 	z: -0.21,
    // 	scrollTrigger: {
    // 		trigger: ".second-section",
    // 		start: "top bottom",
    // 		end: "top top",
    // 		scrub: true,
    // 		immediateRender: false,
    // 	},
    // })

    // // component - BuyNow.tsx
    // .to(camera.position, {
    // 	x: 5,
    // 	y: 3.8,
    // 	z: 2.8,
    // 	scrollTrigger: {
    // 		trigger: ".third-section",
    // 		start: "top bottom",
    // 		end: "top top",
    // 		scrub: true,
    // 		immediateRender: false,
    // 	},
    // })
    // .to(scene.position, {
    // 	x: 2.31,
    // 	y: 0.01,
    // 	z: -0.7,
    // 	scrollTrigger: {
    // 		trigger: ".third-section",
    // 		start: "top bottom",
    // 		end: "top top",
    // 		scrub: true,
    // 		immediateRender: false,
    // 	},
    // })
    // .to(scene.rotation, {
    // 	x: 0.67,
    // 	y: -12.9,
    // 	z: 0.79,
    // 	scrollTrigger: {
    // 		trigger: ".third-section",
    // 		start: "top bottom",
    // 		end: "top top",
    // 		scrub: true,
    // 		immediateRender: false,
    // 	},
    // });
  }, []);

  const [label, _] = label_And_Color[vodka_variant];
  materials.Material.map = textures[label];

  ///////////
  const update_canModel = useStore((state) => state.update_canModel);

  const { position, rotation } = useControls({
    position: {
      value: { x: 0, y: 0.5, z: 0 },
      step: 0.05,
    },
    rotation: {
      min: -Math.PI * 2,
      max: Math.PI * 2,
      value: { x: 0, y: 0, z: 0 },
      step: 0.04,
    },
  });

  // useFrame((state, delta) => {
  //   state.camera.rotation.x = rotation.x;
  //   state.camera.rotation.y = rotation.y;
  //   state.camera.rotation.z = rotation.z;

  //   state.camera.position.x = position.x;
  //   state.camera.position.y = position.y;
  //   state.camera.position.z = position.z;
  // });

  useEffect(() => {
    update_canModel(groupRef.current);
  }, []);

  return (
    <group
      ref={groupRef}
      {...props}
      dispose={null}
      // position={[position.x, position.y, position.z]}
      // rotation={[rotation.x, rotation.y, rotation.z]}
    >
      <mesh
        name="others"
        geometry={nodes.others.geometry}
        material={materials.Aluminio}
        position={[1.081, -0.189, 0.079]}
        rotation={[0, 0.382, 0]}
      />
      <mesh
        name="cock"
        geometry={nodes.cock.geometry}
        material={materials.AluminioAzul}
        position={[1.139, 1.605, 0.078]}
        rotation={[0, 0.382, 0]}
      />
      <mesh
        name="bodyTexture"
        geometry={nodes.bodyTexture.geometry}
        material={materials.Material}
        position={[1.081, 0.084, 0.079]}
        rotation={[0, 0.382, 0]}
      />
      <mesh
        name="rim"
        geometry={nodes.rim.geometry}
        material={materials["Material.001"]}
        position={[1.081, 1.571, 0.079]}
        rotation={[0, 0.382, 0]}
      />
      <mesh
        name="bodyColor"
        geometry={nodes.bodyColor.geometry}
        material={materials.Material}
        position={[1.081, 1.391, 0.079]}
        rotation={[0, 0.382, 0]}
      />
    </group>
  );
}

useGLTF.preload("/models/can2.glb");
