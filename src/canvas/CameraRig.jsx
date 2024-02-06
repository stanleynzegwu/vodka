import { useFrame, useThree } from "@react-three/fiber";
import { easing } from "maath";
import { useRef } from "react";

const CameraRig = ({ children }) => {
  const groupRef = useRef();

  useFrame((state, delta) => {
    // set the model rotation smoothly
    easing.dampE(
      groupRef.current.rotation,
      [state.pointer.y / 5, -state.pointer.x / 5, 0],
      0.25,
      delta
    );
  });

  return <group ref={groupRef}>{children}</group>;
};

export default CameraRig;
