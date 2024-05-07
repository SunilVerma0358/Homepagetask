import React from "react";
import UnlockBul from "../assets/image/UnlockSectionImg.webp";
import ellipseImg from "../assets/image/ellipseCard.webp";
import { Arrow } from "./common/SvgExport";
const UnlockBest = () => {
  return (
    <div className="py-12 sm:py-16">
      <div className="container lg:pt-16 mt-1 lg:pb-12">
        <div className=" bg-bigCard max-w-YourBestCard mx-auto rounded-xxl p-One">
          <div className="bg-bluegreen mx-auto rounded-xxl overflow-hidden px-6 md:px-12 py-7 sm:py-10 md:!py-Sixty relative z-20">
            <div className="absolute -z-20 top-0 right-[-10%] ">
              <img
                className=" max-w-ellipse"
                src={ellipseImg}
                alt="ellipseImg"
              />
            </div>
            <div className="flex md:flex-row flex-wrap -mx-3 items-center flex-col-reverse pb-4 md:pb-30">
              <div className="w-full md:w-7/12 px-3 pt-6 md:pt-0 text-center md:text-start">
                <h2 className="font-Roboto font-semibold text-4xl leading-sm text-white">
                  Unlock Your Best Self
                </h2>
                <p className=" font-Open font-normal text-white leading-lg opacity-70 pt-4 text-center md:text-start">
                  Don’t put off what could be your brightest future. Your unique
                  <span className="lg:block">
                    DNA holds the blueprint for ultimate health and happiness
                  </span>
                </p>
                <button className="font-Open font-semibold text-blue6D leading-md text-base bg-white rounded-md border border-blue py-13 px-7 flex items-center gap-1 mt-6 mx-auto md:me-auto md:ms-0 group hover:bg-blue6D hover:text-white duration-300 ease-linear ">
                  Start Transforming
                  <span className="group-hover:translate-x-2 transition-all ease-linear duration-300">
                    <Arrow />
                  </span>
                </button>
              </div>
              <div className="w-full md:w-5/12 px-3">
                <div className="max-w-Mdimg sm:max-w-img md:max-w-Mdimg mx-auto md:ms-auto md:me-0 overflow-hidden  rounded-xl">
                  <img
                    className="w-full rounded-xl hover:scale-[1.05] transition-all ease-linear duration-300"
                    src={UnlockBul}
                    alt="Unlock Your Best"
                  />
                </div>
              </div>
            </div>
            <a
              href="#!"
              className="font-Open font-normal text-sm text-white leading-lg italic underline opacity-90 text-center block"
            >
              Act fast! Exclusive slots for our personalized DNA analysis are
              filling up. Claim yours and step into a life where wellness is
              woven into your genes
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnlockBest;
