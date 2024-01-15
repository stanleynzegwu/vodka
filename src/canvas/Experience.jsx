import {
  Center,
  ContactShadows,
  Environment,
  OrbitControls,
  Preload,
  Scroll,
  ScrollControls,
  useProgress,
  useTexture,
} from "@react-three/drei";
import { CanModel } from "./CanModel";
import { Canvas } from "@react-three/fiber";
import CameraRig from "./CameraRig";
import PlaneBackgound from "./PlaneBackgound";
import { WineBottle } from "./WineBottle";
import { useMemo } from "react";

const Experience = () => {
  // const progress = useProgress((state) => state.progress);
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
      <OrbitControls enableDamping={false} enabled={false} />
      <ambientLight intensity={1} color={"#babad1"} />
      <directionalLight position={[1, 2, 0]} intensity={2} />
      <Environment files="/textures/city.hdr" />
      {/* <PlaneBackgound /> */}
      <Center>
        <CameraRig>
          {/* <CanModel /> */}
          <WineBottle />
        </CameraRig>
      </Center>

      <Preload all />
    </Canvas>
  );
};

export default Experience;
