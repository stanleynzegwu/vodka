import * as THREE from "three";
import { Plane, shaderMaterial } from "@react-three/drei";
import { useThree, extend, useFrame } from "@react-three/fiber";
import vertexShader from "../shaders/plane.vertex.glsl";
import fragmentShader from "../shaders/plane.fragment.glsl";
import { useEffect, useMemo, useRef } from "react";

const PlaneBackgound = () => {
  const planeShaderMaterialRef = useRef();
  const { viewport } = useThree();
  const PlaneShaderMaterial = shaderMaterial(
    { uCursor: new THREE.Vector2(0, 0), time: 0, color: new THREE.Color(0.2, 1.0, 0.0) },
    vertexShader,
    fragmentShader
  );

  // declaratively
  extend({ PlaneShaderMaterial });

  let cursor = { x: 0, y: 0 };
  // window.addEventListener("mousemove", (event) => {
  //   cursor.x = event.clientX / window.innerWidth;
  //   cursor.y = event.clientY / window.innerHeight;

  //   console.log(cursor);
  // });
  window.addEventListener("mousemove", (event) => {
    planeShaderMaterialRef.current.uniforms.uCursor.value.x = event.clientX / window.innerWidth;
    planeShaderMaterialRef.current.uniforms.uCursor.value.y = event.clientY / window.innerHeight;
  });

  // useFrame((state, delta) => {
  //   console.log(planeShaderMaterialRef.current.uniforms.uCursor.value.x);
  //   planeShaderMaterialRef.current.uniforms.color.value.b =
  //     Math.sin(state.clock.elapsedTime) * 0.25;
  //   planeShaderMaterialRef.current.uniforms.time.value = state.clock.elapsedTime;
  // });

  return (
    <Plane args={[viewport.width, viewport.height]}>
      <planeShaderMaterial ref={planeShaderMaterialRef} />
    </Plane>
  );
};

export default PlaneBackgound;
