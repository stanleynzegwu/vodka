import * as THREE from "three";
import { Plane, shaderMaterial, useTexture } from "@react-three/drei";
import { useThree, extend, useFrame } from "@react-three/fiber";
import vertexShader from "../shaders/plane.vertex.glsl";
import fragmentShader from "../shaders/plane.fragment.glsl";
import { useEffect, useMemo, useRef } from "react";
import useStore from "../store/useStore";
import { animateProgression } from "../utils";
import { resolveLygia } from "resolve-lygia";

const PlaneBackgound = () => {
  const planeShaderMaterialRef = useRef();
  const { viewport, ...others } = useThree();
  const bgColor = useStore((state) => state.bgColor);
  const newBgColor = useStore((state) => state.newBgColor);
  const isLerpProgress = useStore((state) => state.isLerpProgress);
  const update_isLerpProgress = useStore((state) => state.update_isLerpProgress);

  const perlinTexture = useTexture("/images/perlin.png");
  perlinTexture.wrapS = THREE.RepeatWrapping;
  perlinTexture.wrapT = THREE.RepeatWrapping;

  const PlaneShaderMaterial = shaderMaterial(
    {
      uCursor: new THREE.Vector2(0, 0),
      time: 0,
      color: new THREE.Color(bgColor.r, bgColor.g, bgColor.b),
      colorB: new THREE.Color(newBgColor.r, newBgColor.g, newBgColor.b),
      uProgression: 0,
      uPerlinTexture: perlinTexture,
    },
    resolveLygia(vertexShader),
    resolveLygia(fragmentShader)
  );

  // declaratively
  extend({ PlaneShaderMaterial });

  const cursor = { x: 0, y: 0 };

  window.addEventListener("mousemove", (event) => {
    cursor.x = (event.clientX / window.innerWidth) * 2 - 1;
    cursor.y = -(event.clientY / window.innerHeight) * 2 + 1;

    //adapt to width and height
    let adaptX = (cursor.x * viewport.width) / 2;
    let adaptY = (cursor.y * viewport.height) / 2;

    planeShaderMaterialRef.current.uniforms.uCursor.value.x = adaptX;
    planeShaderMaterialRef.current.uniforms.uCursor.value.y = adaptY;
    // console.log(viewport.width * planeShaderMaterialRef.current.uniforms.uCursor.value.x);
  });

  useEffect(() => {
    if (isLerpProgress) {
      animateProgression(
        planeShaderMaterialRef.current.uniforms.uProgression,
        update_isLerpProgress
      );
    }
  }, [isLerpProgress]);

  useFrame(() => {
    planeShaderMaterialRef.current.uniforms.color.value = bgColor;
    planeShaderMaterialRef.current.uniforms.colorB.value = newBgColor;
  });

  return (
    <Plane args={[viewport.width, viewport.height]}>
      <planeShaderMaterial ref={planeShaderMaterialRef} />
    </Plane>
  );
};

export default PlaneBackgound;
