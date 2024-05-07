import React from "react";
import { CardMap } from "./common/Helper";
const AboutSection = () => {
  return (
    <div className="pt-4 sm:pt-1 pb-12 sm:pb-16 relative z-20 overflow-hidden">
      <div className=" absolute -bottom-11 -right-11 -z-10 w-32 h-32 md:w-40 md:h-40 rounded-full blur-3xl bg-opacity-45 bg-bluewhite"></div>
      <div className="max-w-container container lg:pb-16 mb-1">
        <button className="font-Open font-semibold text-sm md:text-base text-green leading-md border border-green rounded-roundedxxl bg-green bg-opacity-10 py-2.5 px-23 uppercase block mx-auto transition-all duration-300 ease-linear hover:bg-opacity-65 hover:text-white">
          ABOUT US
        </button>
        <h2 className="font-Roboto font-bold text-4xl md:text-5xl text-black leading-sm text-center pt-2">
          Who <span className="text-green">We Are</span>
        </h2>
        <div className="flex flex-row flex-wrap -mx-3 justify-center pt-4 md:pt-6 lg:pt-9">
          {CardMap.map((data, index) => (
            <div key={index} className="sm:w-6/12 lg:w-4/12 px-3 pt-6">
              <div className="border border-bluelight rounded-2xl bg-CardBg px-4 xl:px-6 pb-4 lg:pb-6 relative overflow-hidden z-10 h-full max-w-borderwidth md:max-w-full hover:scale-[1.02] transition-all duration-300 ease-linear">
                <span className="w-[1px] h-7 bg-bgBorder block ms-8"></span>
                <span className="w-full h-[1px] bg-bgBorder block absolute max-w-borderwidth left-0 top-14 -z-10"></span>
                <div className="bg-blue6D rounded-full border border-gray max-w-16 h-16 flex justify-center items-center">
                  <div className="bg-blue0F rounded-full border border-gray w-11 h-11 flex justify-center items-center">
                    <img className="w-1/2" src={data.src} alt={data.alt} />
                  </div>
                </div>
                <h3 className="font-Open font-semibold text-xl leading-lg pt-4 sm:pt-6">
                  {data.heading}
                </h3>
                <p
                  className={`${data.class} font-Open font-normal text-sm md:text-base !leading-lg opacity-70 pt-3`}
                >
                  {data.Paragraph}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
