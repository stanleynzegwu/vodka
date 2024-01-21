"use client";

import { Canvas } from "@react-three/fiber";
import { Center, Environment, Preload } from "@react-three/drei";
import useStore from "../store/useStore";
import { animateToVodkaCan } from "../utils";
import { VodkaVariant_picker } from ".";
import PlaneBackgound from "../canvas/PlaneBackgound";
import { wineData } from "../constants";
import { Grape, Strawberry } from "./svg";

const Section_one = () => {
  const vodka_variant = useStore((state) => state.vodka_variant);
  const updateVodka_variant = useStore((state) => state.updateVodka_variant);

  //////////
  const canModel = useStore((state) => state.canModel);
  // console.log(canModel?.getObjectByName("bottle_other").material.color);
  return (
    <div className="relative h-[200vh] w-full" id="section_one">
      <div className="relative h-[100vh] w-full">
        <Scene>
          <PlaneBackgound />
        </Scene>
      </div>
      {/* <div className="absolute w-full h-full top-0 left-0">
        <Grape />
        <Strawberry />
      </div> */}
      <div className="absolute top-80 left-20 text-white text-lg z-20 max-lg:hidden">
        Fuel your day with STAN Wine! Packed with <br /> natural caffiene and Taurine for a voost of
        <br />
        energy and Vitamin B cpmplex for sharp focus,
        <br />
        our drinks got you covered.
      </div>
      <div className="px-4 flex flex-col justify-center items-center w-full h-[100vh]">
        <div className="flex flex-col gap-12 items-center">
          <h2 className="font-bold text-2xl md:text-4xl lg:text-5xl text-center">
            4 refreshing flavored wine <br />
            drink to choose from
          </h2>
          <button className="capitalize bg-red-300 rounded-full px-4 py-2 font-bold text-md z-20">
            shop all
          </button>
        </div>
      </div>
      {/* <VodkaVariant_picker /> */}
      <div className="vodkaVariant_picker fixed max-lg:left-1/2 max-lg:transform max-lg:-translate-x-1/2 bottom-0 right-10 bg-blue-200 w-[250px] max-w-10 rounded-t-3xl z-20">
        <div className="relative w-full h-20 rounded-t-3xl">
          <div
            className={`absolute top-[-30px] left-0 bg-transparent w-full h-28 flex justify-between items-center`}
          >
            {wineData.map(({ imagePath, variant, glassColor, bottleNeckColor }, index) => (
              <img
                src={imagePath}
                alt={`${variant}-image`}
                className={`vodkaPicker-transition cursor-pointer z-20 ${
                  vodka_variant === variant ? "h-full w-auto" : "h-4/5 w-auto"
                }`}
                key={index}
                onClick={() => {
                  //so if the Bottle label is already the one in store, clicking that won't do anything
                  if (vodka_variant === variant) return;

                  animateToVodkaCan(canModel, glassColor, bottleNeckColor);
                  updateVodka_variant(variant);
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section_one;

export const Scene = ({ children }) => {
  return (
    <Canvas>
      <ambientLight intensity={1.5} color={"#babad1"} />
      <directionalLight position={[1, 2, 0]} intensity={2} />
      <Environment files="/textures/city.hdr" />
      <Center>{children}</Center>
      <Preload all />
    </Canvas>
  );
};
