import * as THREE from "three";
import { Plane, shaderMaterial } from "@react-three/drei";
import { useThree, extend, useFrame } from "@react-three/fiber";
import vertexShader from "../shaders/plane.vertex.glsl";
import fragmentShader from "../shaders/plane.fragment.glsl";
import { useRef } from "react";

const PlaneBackgound = () => {
  const planeShaderMaterialRef = useRef();
  const { viewport, ...others } = useThree();
  // console.log(others);

  const PlaneShaderMaterial = shaderMaterial(
    { time: 0, color: new THREE.Color(0.2, 0.0, 0.1) },
    vertexShader,
    fragmentShader
  );

  // declaratively
  extend({ PlaneShaderMaterial });

  // useFrame((state, delta) => {
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
