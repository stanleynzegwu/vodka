import useStore from "../store/useStore";
import { animateToVodkaCan } from "../utils";

const VodkaVariant_Picker = () => {
  const updateVodka_variant = useStore((state) => state.updateVodka_variant);

  //////////
  const canModel = useStore((state) => state.canModel);
  return (
    <div className=" bottom-0 right-10 bg-blue-200 max-w-10 rounded-t-lg z-20">
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
  );
};

export default VodkaVariant_Picker;
