import { useThree } from "@react-three/fiber";
import useStore from "../store/useStore";
import { animateToVodkaCan } from "../utils";
import VodkaVariant_Picker from "./VodkaVariant_picker";

const Section_one = () => {
  const updateVodka_variant = useStore((state) => state.updateVodka_variant);

  //////////
  const canModel = useStore((state) => state.canModel);

  return (
    <div className="relative h-screen w-full" id="section_one">
      section one
      {/* <VodkaVariant_Picker /> */}
      <div className="absolute bottom-0 right-10 bg-blue-200 max-w-10 rounded-t-lg">
        <div className="relative w-full h-full">
          <div className=" top-0 right-0 w-full flex ">
            {[
              ["./images/red-vodka-can.png", "Classic"],
              ["./images/red-vodka-can.png", "Cranberry"],
              ["./images/red-vodka-can.png", "Coconut & pineApple"],
              ["./images/red-vodka-can.png", "Grape"],
            ].map(([image, variant], index) => (
              <img
                src={image}
                alt=""
                className="h-16 w-auto cursor-pointer z-20"
                key={index}
                onClick={() => {
                  animateToVodkaCan(canModel);
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
