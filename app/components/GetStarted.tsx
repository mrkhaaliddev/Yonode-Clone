import { Button } from "@/components/ui/button";
import React from "react";
import websiteImage from "../../public/Website image.png";
import Image from "next/image";

const GetStarted = () => {
  return (
    <>
      <div className="pl-[105px] mb-10 pt-10 justify-center bg-gradient-to-b from-[#e4d7f9] overflow-x-hidden w-full h-[850px]">
        <div className="flex gap-2 justify-center align-middle items-center bg-gradient-to-tr from-[#e4d7f9] to-secondary w-[400px] h-10 rounded-full my-20 mx-auto border-2 border-primary">
          <span className="text-sm font-medium">
            Yonode has officially launched!
          </span>
          <Button
            variant="link"
            className="flex text-center text-sm gap-2 hover:gap-4"
          >
            Read me
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4 text-center"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </Button>
        </div>
        <div className="flex items-center">
          <div className="flex flex-col gap-8 w-[50%]">
            <h1 className="text-[55px] leading-[70px] font-bold text-gray-700">
              Develop Servers <br /> Efficiently & Rapidly
            </h1>
            <p className="text-gray-500 leading-7 font-medium text-xl">
              Yonode is a{" "}
              <span className="text-slate-950 font-normal">
                Node.js toolkit{" "}
              </span>{" "}
              <br /> that streamlines your workflow, enabling you <br /> to
              craft efficient server solutions rapidly.
            </p>
            <div className="flex ">
              <Button
                variant="default"
                className="text-[17px] text-slate-50 py-6 px-6 font-semibold"
              >
                Get Started
              </Button>
              <Button
                variant="outline"
                className="ml-5 text-[17px] border py-6 px-6 font-semibold flex hover:gap-x-2"
              >
                <span>View on github</span>
                <span className="ml-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    />
                  </svg>
                </span>
              </Button>
            </div>
          </div>
          <div className="image-container">
            <Image
              src={websiteImage}
              alt="Descriptive text about the image"
              width={1000}
              height={1000}
              objectFit="cover"
              className="large-image ml-[150px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default GetStarted;
