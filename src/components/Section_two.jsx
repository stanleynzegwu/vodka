import { wineData } from "../constants";
import useStore from "../store/useStore";
import { animateToVodkaCan } from "../utils";

const Section_two = () => {
  const vodka_variant = useStore((state) => state.vodka_variant);
  const updateVodka_variant = useStore((state) => state.updateVodka_variant);
  const update_bgColor = useStore((state) => state.update_bgColor);
  const newBgColor = useStore((state) => state.newBgColor);
  const update_newBgColor = useStore((state) => state.update_newBgColor);
  const update_isLerpProgress = useStore((state) => state.update_isLerpProgress);
  const canModel = useStore((state) => state.canModel);

  return (
    <div
      className="section_two relative max-md:px-4 max-lg:pb-10 flex justify-center lg:h-screen w-full z-20 bg-white"
      id="section_two"
    >
      <div className="rounded-lg flex flex-col max-lg:gap-20 max-lg:justify-between lg:flex-row lg:gap-0 lg:h-[75%] lg:w-[95%] ">
        {wineData.map(
          (
            {
              imagePath,
              variant,
              glassColor,
              bottleNeckColor,
              desc,
              backgroundColor,
              headerBgColor,
            },
            index
          ) => (
            <div
              className={`relative min-h-[150px] smooth-transition rounded-lg lg:rounded-none lg:first:rounded-l-lg lg:last:rounded-r-lg flex pointer-events-auto cursor-pointer ${
                vodka_variant === variant ? "lg:flex-4" : "lg:flex-2"
              }`}
              style={{ backgroundColor }}
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
            >
              <div
                // className={`flex justify-center items-center ${
                //   vodka_variant === variant ? "" : "w-full"
                // }`}
                className={`absolute lg:static h-52 lg:h-full right-[-10px] bottom-[-52px] lg:flex lg:justify-center lg:items-center ${
                  vodka_variant === variant ? "" : "lg:w-full"
                }`}
              >
                <img
                  src={imagePath}
                  alt={variant}
                  // className="absolute right-0 bottom-[-40px] h-40 lg:static lg:h-[65%] aspect-auto"
                  className="h-full lg:h-[65%] aspect-auto"
                />
              </div>
              <div
                className={`max-lg:w-[80%] max-lg:py-6 px-4 max-lg:flex max-lg:flex-col max-lg:gap-4 max-lg:justify-between ${
                  vodka_variant === variant
                    ? "lg:flex lg:flex-col lg:gap-4 lg:justify-center"
                    : "lg:hidden"
                }`}
              >
                <h2 className="uppercase font-extrabold text-2xl">{variant}</h2>
                <p>{desc}</p>
                <button className="text-sm lg:text-lg font-semibold w-24 lg:w-32 p-[4px] py-[6px] rounded-full bg-white">
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

// import { wineData } from "../constants";
// import useStore from "../store/useStore";
// import { animateToVodkaCan } from "../utils";

// const Section_two = () => {
//   const vodka_variant = useStore((state) => state.vodka_variant);
//   const updateVodka_variant = useStore((state) => state.updateVodka_variant);
//   const canModel = useStore((state) => state.canModel);
//   return (
//     <div
//       className="relative flex justify-center section_two h-screen w-full max-w-full z-20  bg-gray-200"
//       id="section_two"
//     >
//       <div className="rounded-lg flex flex-col lg:flex-row max-lg:justify-between max-lg:gap-8 lg:gap-0 lg:h-[75%] lg:w-[95%] bg-yellow-200">
//         {wineData.map(
//           ({ imagePath, variant, glassColor, bottleNeckColor, desc, backgroundColor }, index) => (
//             <div
//               className={`relative min-h-[150px] smooth-transition rounded-lg lg:rounded-none lg:first:rounded-l-lg lg:last:rounded-r-lg flex pointer-events-auto cursor-pointer ${
//                 vodka_variant === variant ? "lg:flex-4" : "lg:flex-2"
//               }`}
//               // className={`smooth-transition first:rounded-l-lg last:rounded-r-lg flex pointer-events-auto cursor-pointer ${
//               //   vodka_variant === variant ? "flex-4" : "flex-2"
//               // }`}
//               style={{ backgroundColor }}
//               key={index}
//               onClick={() => {
//                 //so if the Bottle label is already the one in store, clicking that won't do anything
//                 if (vodka_variant === variant) return;

//                 animateToVodkaCan(canModel, glassColor, bottleNeckColor);
//                 updateVodka_variant(variant);
//               }}
//             >
//               <div
//                 // className={`flex justify-center items-center ${
//                 //   vodka_variant === variant ? "" : "w-full"
//                 // }`}
//                 className={`absolute lg:static h-32 lg:h-full right-0 bottom-[-40px] lg:flex lg:justify-center lg:items-center ${
//                   vodka_variant === variant ? "" : "lg:w-full"
//                 }`}
//               >
//                 <img
//                   src={imagePath}
//                   alt={variant}
//                   // className="h-[65%] aspect-auto"
//                   className="h-full lg:h-[65%] aspect-auto"
//                 />
//               </div>
//               <div
//                 // className={`px-4 ${
//                 //   vodka_variant === variant ? "flex flex-col gap-4 justify-center" : "hidden"
//                 // }`}
//                 className={`max-lg:w-[80%] px-4 ${
//                   vodka_variant === variant
//                     ? "lg:flex lg:flex-col lg:gap-4 lg:justify-center"
//                     : "lg:hidden"
//                 }`}
//               >
//                 <h2 className="uppercase font-extrabold text-2xl">{variant}</h2>
//                 <p>{desc}</p>
//                 <button className="font-semibold w-32 p-[4px] py-[6px] rounded-full bg-white">
//                   Shop now
//                 </button>
//               </div>
//             </div>
//           )
//         )}
//       </div>
//     </div>
//   );
// };

// export default Section_two;
