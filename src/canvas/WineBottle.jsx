import React, { useEffect, useLayoutEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { LoadTextures } from "../utils";
import useStore from "../store/useStore";
import { label_And_Color } from "../constants";
import { useFrame, useThree } from "@react-three/fiber";
import { useControls } from "leva";

export function WineBottle(props) {
  const { nodes, materials } = useGLTF("/models/wineBottle1.glb");

  const rationScale = Math.min(1.2, Math.max(0.5, window.innerWidth / 1280));
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
  // gsap.registerPlugin(ScrollTrigger);
  // useLayoutEffect(() => {
  //   new ScrollTrigger({});
  //   // component About.tsx
  //   tl.to(groupRef.current.position, {
  //     x: 1.7,
  //     y: 0.45,
  //     z: -0.45,
  //     scrollTrigger: {
  //       trigger: ".section_two",
  //       start: "top bottom",
  //       end: "top top",
  //       scrub: true,
  //       immediateRender: false,
  //     },
  //   }).to(groupRef.current.rotation, {
  //     x: -0.84,
  //     y: 1,
  //     z: -0.76,
  //     scrollTrigger: {
  //       trigger: ".section_two",
  //       start: "top bottom",
  //       end: "top top",
  //       scrub: true,
  //       immediateRender: false,
  //     },
  //   });
  // }, []);
  gsap.registerPlugin(ScrollTrigger);
  useLayoutEffect(() => {
    new ScrollTrigger({});
    // component About.tsx
    tl.to(groupRef.current.position, {
      // x: 1.7,
      y: -0.1,
      // z: -0.45,
      scrollTrigger: {
        trigger: ".section_one",
        start: "top top",
        end: "center bottom",
        scrub: true,
        immediateRender: false,
      },
    })
      .to(groupRef.current.rotation, {
        // x: -0.84,
        y: Math.PI * 2,
        // z: -0.76,
        scrollTrigger: {
          trigger: ".section_one",
          start: "top top",
          end: "center center",
          scrub: true,
          immediateRender: false,
        },
      })
      .to(groupRef.current.rotation, {
        x: -1,
        // y: 1,
        z: -1,
        scrollTrigger: {
          trigger: ".section_two",
          start: "top center",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      });
    // .to(groupRef.current.rotation, {
    //   x: -0.84,
    //   y: 1,
    //   z: -0.76,
    //   scrollTrigger: {
    //     trigger: ".section_two",
    //     start: "top bottom",
    //     end: "top top",
    //     scrub: true,
    //     immediateRender: false,
    //   },
    // });
    // .to(groupRef.current.rotation, {
    //   x: -0.84,
    //   y: 1,
    //   z: -0.76,
    //   scrollTrigger: {
    //     trigger: ".section_two",
    //     start: "top bottom",
    //     end: "top top",
    //     scrub: true,
    //     immediateRender: false,
    //   },
    // });
  }, []);

  const [label, _] = label_And_Color[vodka_variant];
  materials["Material.003"].map = textures[label];

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
    <group scale={rationScale}>
      <group
        ref={groupRef}
        {...props}
        dispose={null}
        scale={0.55}

        // position={[position.x, position.y, position.z]}
        // rotation={[rotation.x, rotation.y, rotation.z]}
      >
        <group name="Mesh_Bottle" rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            name="Bottle-labelPartBack"
            geometry={nodes["Bottle-labelPartBack"].geometry}
            material={materials.glassBottle}
          />
          <mesh
            name="Bottle-labelPartFront"
            geometry={nodes["Bottle-labelPartFront"].geometry}
            material={materials["Material.003"]}
          />
          <mesh
            name="bottle_cork"
            geometry={nodes.bottle_cork.geometry}
            material={materials.bottle_neck}
          />
          <mesh
            name="bottle_other"
            geometry={nodes.bottle_other.geometry}
            material={materials.glassBottle}
          />
        </group>
        <mesh
          name="bottle_bottomAndTopCap"
          geometry={nodes.bottle_bottomAndTopCap.geometry}
          material={materials.glassBottomBottle}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/wineBottle1.glb");
