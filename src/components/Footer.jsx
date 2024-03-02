import { FOOTER_CONTENT } from "../constants";

const Footer = () => {
  return (
    <div className={`relative lg:h-screen w-full px-4 py-6 flex flex-col bg-gray-100 z-20`}>
      <div className="h-[95%] py-10 max-lg:w-full flex flex-col lg:flex-row justify-between lg:items-center max-lg:gap-6">
        <div className="h-full">
          <div className="">
            <span className="uppercase font-bold text-xl ">stan</span>
            <span> wine</span>
          </div>
        </div>
        {FOOTER_CONTENT.map(({ title, list }, index) => (
          <div key={index} className="flex flex-col h-full">
            <h2 className="capitalize font-medium pb-2 lg:pb-6">{title}</h2>
            <div className="flex flex-col">
              {list.map((item, index) => (
                <span key={index} className="">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="h-[5%]">paypal viva honda</div>
    </div>
  );
};

export default Footer;
