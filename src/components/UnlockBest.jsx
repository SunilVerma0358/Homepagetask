import React from "react";
import UnlockBul from "../assets/image/UnlockSectionImg.webp";
import ellipseImg from "../assets/image/ellipseCard.webp";
import { Arrow } from "./common/SvgExport";
const UnlockBest = () => {
  return (
    <div className="py-16">
      <div className="container lg:pt-16 mt-1 lg:pb-12">
        <div className=" bg-bigCard max-w-YourBestCard mx-auto rounded-xxl p-One">
          {" "}
          <div className="bg-bluegreen mx-auto rounded-xxl overflow-hidden px-12 py-14 relative z-20">
            <div className="absolute -z-20 top-0 right-[-10%] ">
              <img
                className=" max-w-ellipse"
                src={ellipseImg}
                alt="ellipseImg"
              />
            </div>
            <div className="flex md:flex-row flex-wrap -mx-3 items-center flex-col-reverse pb-8">
              <div className="w-full md:w-7/12 px-3 pt-6 md:pt-0">
                <h2 className="font-Roboto font-semibold text-4xl leading-sm text-white">
                  Unlock Your Best Self
                </h2>
                <p className=" font-Open font-normal text-white leading-lg opacity-70 pt-4">
                  Don’t put off what could be your brightest future. Your unique
                  <span className="lg:block">
                    DNA holds the blueprint for ultimate health and happiness
                  </span>
                </p>
                <button className="font-Open font-semibold text-blue6D leading-md text-base bg-white rounded-md border border-blue py-[14px] px-7 flex items-center gap-1 mt-6 ">
                  Start Transforming
                  <span>
                    <Arrow />
                  </span>
                </button>
              </div>
              <div className="w-full md:w-5/12 px-3">
                <div className="max-w-Mdimg sm:max-w-img md:max-w-Mdimg mx-auto md:ms-auto md:me-0 ">
                  <img
                    className="w-full rounded-xl"
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
