"use client";

import { Canvas, useThree } from "@react-three/fiber";
import { Center, Environment, Preload } from "@react-three/drei";
import useStore from "../store/useStore";
import { animateToVodkaCan } from "../utils";
import PlaneBackgound from "../canvas/PlaneBackgound";
import { wineData } from "../constants";
import { Grape, Strawberry } from "./svg";
import { pickerBgColor } from "../constants";

const Section_one = () => {
  const vodka_variant = useStore((state) => state.vodka_variant);
  const updateVodka_variant = useStore((state) => state.updateVodka_variant);
  const update_bgColor = useStore((state) => state.update_bgColor);
  const newBgColor = useStore((state) => state.newBgColor);
  const update_newBgColor = useStore((state) => state.update_newBgColor);
  const update_isLerpProgress = useStore((state) => state.update_isLerpProgress);

  //////////
  const canModel = useStore((state) => state.canModel);
  // console.log(canModel?.getObjectByName("bottle_other").material.color);
  // const apparelSelected = useMemo(() => apparelConfig.find((item) => item.name === apparelType), [canModel]);

  const getColor = (brand) => {
    return wineData.find(({ variant }) => variant === brand).backgroundColor;
  };

  return (
    <div className="relative h-[200vh] w-full" id="section_one">
      <div className="relative h-[100vh] w-full " id="planeDiv">
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
          <h2
            className={`font-bold text-2xl md:text-4xl lg:text-5xl text-center`}
            style={{ color: getColor(vodka_variant) }}
          >
            4 refreshing flavored wine <br />
            drink to choose from
          </h2>
          <div className="lg:hidden">
            Fuel your day with STAN Wine! Packed with <br /> natural caffiene and Taurine for a
            voost of
            <br />
            energy and Vitamin B cpmplex for sharp focus,
            <br />
            our drinks got you covered.
          </div>
          <button className="capitalize bg-red-300 rounded-full px-4 py-2 font-bold text-md z-20">
            shop all
          </button>
        </div>
      </div>
      {/* <VodkaVariant_picker /> */}
      <div
        className={`transition-pickerBgColor vodkaVariant_picker fixed max-lg:left-1/2 max-lg:transform max-lg:-translate-x-1/2 bottom-0 right-10 w-[250px] max-w-10 rounded-t-3xl z-20 `}
        style={{ backgroundColor: pickerBgColor(vodka_variant) }}
      >
        <div className="relative w-full h-20 rounded-t-3xl">
          <div
            className={`absolute top-[-30px] left-0 bg-transparent w-full h-28 flex justify-between items-center`}
          >
            {wineData.map(
              ({ imagePath, variant, glassColor, bottleNeckColor, headerBgColor }, index) => (
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
                    update_bgColor(newBgColor.r, newBgColor.g, newBgColor.b);
                    update_newBgColor(headerBgColor.r, headerBgColor.g, headerBgColor.b);
                    update_isLerpProgress(true);
                  }}
                />
              )
            )}
          </div>
        </div>
      </div>
      {/* <h2 className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/4 text-white opacity-[4.5px] font-extrabold text-[100px] leading-none">
        STAN WINE
      </h2>
      <h2 className="font-outline-1 absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/4 text-transparent font-extrabold text-[100px] z-50 leading-none ">
        STAN WINE{" "}
      </h2> */}
    </div>
  );
};

export default Section_one;

export const Scene = ({ children }) => {
  return (
    <Canvas>
      <Center>{children}</Center>
      <Preload all />
    </Canvas>
  );
};
