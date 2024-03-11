import { useState } from "react";
import { FOOTER_CONTENT } from "../constants";

const Footer = () => {
  const [expanded, setExpanded] = useState([]);

  const handleExpansion = (index) => {
    expanded.includes(index)
      ? setExpanded(expanded.filter((val) => val !== index))
      : setExpanded(expanded.concat(index));
  };

  return (
    <div className={`relative lg:h-screen w-full px-4 py-6 flex flex-col bg-gray-100 z-20 pt-20`}>
      <div className="h-[95%] py-10 max-lg:w-full flex flex-col lg:flex-row justify-between lg:items-center max-lg:gap-6">
        <div className="h-full">
          <div className="max-lg:text-center">
            <span className="uppercase font-bold text-xl ">stan</span>
            <span> wine</span>
          </div>
        </div>
        {FOOTER_CONTENT.map(({ title, list }, index) => (
          <div
            key={index}
            className="flex flex-col h-full cursor-pointer"
            onClick={() => handleExpansion(index)}
          >
            <div className="max-lg:flex max-lg:justify-between max-lg:border-b-[.8px] border-gray-700">
              <h2 className="capitalize font-medium pb-2 lg:pb-6">{title}</h2>
              <img
                src={"arrow-down.svg"}
                alt="Arrow"
                className={`w-7 lg:hidden`}
                style={{
                  transform: expanded.includes(index) ? "rotate(270deg)" : "rotate(90deg)",
                  transition: "transform 0.1s ease",
                }}
              />
            </div>
            <div
              className={`${
                expanded.includes(index) ? "visible flex flex-col" : "hidden"
              } lg:flex flex-col`}
            >
              {list.map((item, index) => (
                <span key={index} className="">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="relative h-[5%] flex flex-col max-lg:gap-6 items-center lg:flex-row justify-between">
        <img className="object-cover w-48" src="images/payment_options.png" alt="payment_options" />
        <span className="text-gray-500 text-sm">
          Copyright 2024 STAN Group Ltd. All rights reserved.
        </span>
      </div>
    </div>
  );
};

export default Footer;
