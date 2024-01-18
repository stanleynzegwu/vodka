import { wineData } from "../constants";
import useStore from "../store/useStore";
import { animateToVodkaCan } from "../utils";

const Section_two = () => {
  const vodka_variant = useStore((state) => state.vodka_variant);
  const updateVodka_variant = useStore((state) => state.updateVodka_variant);
  const canModel = useStore((state) => state.canModel);
  return (
    <div
      className="relative flex justify-center section_two h-screen w-full z-20  bg-gray-200"
      id="section_two"
    >
      <div className="flex rounded-lg lg:h-[75%] w-[95%] bg-yellow-200">
        {wineData.map(
          ({ imagePath, variant, glassColor, bottleNeckColor, desc, backgroundColor }, index) => (
            <div
              className={`smooth-transition first:rounded-l-lg last:rounded-r-lg flex pointer-events-auto cursor-pointer ${
                vodka_variant === variant ? "flex-4" : "flex-2"
              }`}
              style={{ backgroundColor }}
              key={index}
              onClick={() => {
                //so if the Bottle label is already the one in store, clicking that won't do anything
                if (vodka_variant === variant) return;

                animateToVodkaCan(canModel, glassColor, bottleNeckColor);
                updateVodka_variant(variant);
              }}
            >
              <div
                className={`flex justify-center items-center ${
                  vodka_variant === variant ? "" : "w-full"
                }`}
              >
                <img src={imagePath} alt={variant} className="h-[65%] aspect-auto" />
              </div>
              <div
                className={`px-4 ${
                  vodka_variant === variant ? "flex flex-col gap-4 justify-center" : "hidden"
                }`}
              >
                <h2 className="uppercase font-extrabold text-2xl">{variant}</h2>
                <p>{desc}</p>
                <button className="font-semibold w-32 p-[4px] py-[6px] rounded-full bg-white">
                  Shop now
                </button>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Section_two;
