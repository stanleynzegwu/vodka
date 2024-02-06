import {
  Center,
  ContactShadows,
  Environment,
  OrbitControls,
  Preload,
  useProgress,
  useTexture,
} from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import CameraRig from "./CameraRig";
import { WineBottle } from "./WineBottle";
import { useMemo } from "react";

const Experience = () => {
  // const progress = useProgress((state) => state.progress);

  // const { x: mouseX, y: mouseY } = useThree((state) => state.mouse);
  // console.log(mouseX);
  return (
    <Canvas
      shadows
      camera={{
        fov: 50,
        near: 0.1,
        far: 200,
        // position: [0, 0, 5],
      }}
    >
      {/* <OrbitControls
        makeDefault
        enableDamping={false}
        enabled={false}
      /> */}
      <ambientLight intensity={1} color={"#babad1"} />
      {/* <directionalLight position={[1, 2, 0]} intensity={2} /> */}
      <Environment files="/textures/city.hdr" />

      <Center>
        <CameraRig>
          <WineBottle />
        </CameraRig>
      </Center>

      <Preload all />
    </Canvas>
  );
};

export default Experience;
