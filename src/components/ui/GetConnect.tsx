import { FaLocationArrow } from "react-icons/fa6";
import React from "react";
import MagicButton from "./MagicButton";

const GetConnect = () => {
  return (
    <div className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      {/* <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div> */}

      <div className="flex flex-col items-center">
         
        <h1 className="heading max-w-[45vw] lg:max-w-full">
            Ready to take <span className="text-purple">your</span> digital
          presence to the next level? 
        </h1>

        <p className="text-white-200 mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:contact@jsmastery.pro">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
    </div>
  );
};

export default GetConnect;
