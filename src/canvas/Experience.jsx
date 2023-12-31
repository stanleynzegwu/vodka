import {
  Center,
  ContactShadows,
  Environment,
  OrbitControls,
  Preload,
  Scroll,
  ScrollControls,
  useTexture,
} from "@react-three/drei";
import { CanModel } from "./CanModel";
import { Canvas } from "@react-three/fiber";
import CameraRig from "./CameraRig";

const Experience = () => {
  return (
    <Canvas
      shadows
      camera={{
        fov: 50,
        near: 0.1,
        far: 100,
        // position: [33, 27, -28],
      }}
    >
      <OrbitControls enableDamping={false} enabled={false} />
      <ambientLight intensity={1} color={"#babad1"} />
      <directionalLight position={[1, 2, 0]} intensity={2} />
      <Environment files="/textures/city.hdr" />
      <CameraRig>
        <Center>
          <CanModel />
        </Center>
      </CameraRig>
      <Preload all />
    </Canvas>
  );
};

export default Experience;
