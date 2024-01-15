import { useThree } from "@react-three/fiber";
import useStore from "../store/useStore";
import { animateToVodkaCan } from "../utils";
import { VodkaVariant_picker } from ".";
import Grape from "./svg/Grape";

const Section_one = () => {
  const vodka_variant = useStore((state) => state.vodka_variant);
  const updateVodka_variant = useStore((state) => state.updateVodka_variant);

  //////////
  const canModel = useStore((state) => state.canModel);
  // console.log(canModel?.getObjectByName("bottle_other").material.color);
  return (
    <div className="relative h-screen w-full" id="section_one">
      <div className="w-full h-full flex flex-end items-center">
        <Grape />
      </div>
      section one
      {/* <VodkaVariant_picker /> */}
      <div className="vodkaVariant_picker fixed bottom-0 right-10 bg-blue-200 max-w-10 rounded-t-lg z-20">
        <div className="relative w-full h-full">
          <div className="relative w-full flex">
            {[
              [
                "./images/red-vodka-can.png",
                "Classic",
                { r: 0.05, g: 0.0, b: 0.0 },
                { r: 0.6, g: 0.0, b: 0.0 },
              ],
              [
                "./images/red-vodka-can.png",
                "Cranberry",
                { r: 0.6, g: 0.5, b: 0.2 },
                { r: 0.6, g: 0.0, b: 0.0 },
              ],
              [
                "./images/red-vodka-can.png",
                "Coconut & pineApple",
                { r: 0.4, g: 0.0, b: 0.0 },
                { r: 1.0, g: 1.0, b: 1.0 },
              ],
              [
                "./images/red-vodka-can.png",
                "Grape",
                { r: 0.4, g: 0.2, b: 0.2 },
                { r: 0.0, g: 0.0, b: 0.0 },
              ],
            ].map(([image, variant, glassColor, bottleNeckColor], index) => (
              <img
                src={image}
                alt={`${image}-image`}
                className={`h-16 w-auto cursor-pointer z-20`}
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
      ;
    </div>
  );
};

export default Section_one;
