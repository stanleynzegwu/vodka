import { useState } from "react";
import { FAQ } from "../constants";

const Section_four = () => {
  const [expanded, setExpanded] = useState([]);

  const handleExpansion = (index) => {
    expanded.includes(index)
      ? setExpanded(expanded.filter((val) => val !== index))
      : setExpanded(expanded.concat(index));
  };

  return (
    <div className="relative px-4 md:px-8 my-8 w-full z-20 bg-white" id="section_four">
      <span className="block uppercase text-lg font-bold mb-4 md:mb-6">faq</span>
      <div className="flex flex-col gap-4">
        {FAQ.map(({ question, answer }, index) => (
          <div
            key={index}
            className="bg-gray-100 px-4 rounded-t-lg cursor-pointer rounded-b-lg"
            onClick={() => handleExpansion(index)}
          >
            <div className="py-4 flex justify-between ">
              <p className="font-semibold text-lg">{question}</p>
              <span className="text-xl font-bold ">{expanded.includes(index) ? "-" : "+"}</span>
            </div>
            <p
              className={`${
                expanded.includes(index) ? "" : "hidden"
              } text-sm py-4 border-t rounded-b-lg`}
            >
              {answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section_four;
