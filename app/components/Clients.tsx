import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { FaFacebook, FaGithub, FaYoutube } from "react-icons/fa";
import mustafa from "../../public/mustafa.png";
import khaalid from "../../public/khaalid.png";
import AbdiKaafi from "../../public/Abdikaafi.jpeg";
import Image from "next/image";

const Clients = () => {
  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold mb-16 text-center">
        Loved by tech people
      </h1>
      <div className="w-full">
        <Carousel>
          <CarouselContent>
            <CarouselItem className="basis-1/3">
              {" "}
              <div className="ml-10 w-[400px] p-3 flex flex-col gap-y-6">
                <div className="flex items-center gap-x-4">
                  {" "}
                  <span>
                    <Image
                      src={mustafa}
                      alt="mustafa"
                      width={100}
                      height={100}
                      className="bg-primary rounded-full flex justify-center items-center text-white w-14 h-14"
                    />
                  </span>{" "}
                  <span className="flex text-start flex-col">
                    <h1 className="text-xl font-semibold">Mustafa 4A</h1>
                    <p className="text-sm text-slate-500">Senior developer</p>
                  </span>
                </div>
                <div className="text-start">
                  <p className="text-slate-500 text-sm leading-6">
                    "Yonode has been a catalyst for a transformative shift in
                    our server development. It has empowered us to prioritize
                    essential business logic while making substantial reductions
                    in development hours. As a result, our server infrastructure
                    stands as a testament to modernity and efficiency, all
                    thanks to the game-changing impact of Yonode."
                  </p>
                </div>
                <div className="flex items-center gap-x-3">
                  <span>
                    <FaGithub className="w-5 h-5 cursor-pointer" />
                  </span>
                  <span>
                    <FaFacebook className="w-5 h-5 cursor-pointer" />
                  </span>
                  <span>
                    <FaYoutube className="w-5 h-5 cursor-pointer" />
                  </span>
                </div>
              </div>{" "}
            </CarouselItem>
            <CarouselItem className="basis-1/3">
              {" "}
              <div className="ml-10 w-[400px] p-3 flex flex-col gap-y-6">
                <div className="flex items-center gap-x-4">
                  {" "}
                  <span>
                    <Image
                      src={khaalid}
                      alt="khaalid"
                      width={100}
                      height={100}
                      className="bg-primary rounded-full flex justify-center items-center text-white w-14 h-14"
                    />
                  </span>{" "}
                  <span className="flex text-start flex-col">
                    <h1 className="text-xl font-semibold">Khaalid Boss</h1>
                    <p className="text-sm text-slate-500">
                      MERN Stack Developer
                    </p>
                  </span>
                </div>
                <div className="text-start">
                  <p className="text-slate-500 text-sm leading-6">
                    “Yonode transformed our development process, providing the
                    freedom to prioritize essential business logic. It
                    significantly slashed development hours, expediting the
                    creation of a cutting-edge and highly efficient server
                    infrastructure”
                  </p>
                </div>
                <div className="flex items-center gap-x-3">
                  <span>
                    <FaGithub className="w-5 h-5 cursor-pointer" />
                  </span>
                  <span>
                    <FaFacebook className="w-5 h-5 cursor-pointer" />
                  </span>
                  <span>
                    <FaYoutube className="w-5 h-5 cursor-pointer" />
                  </span>
                </div>
              </div>{" "}
            </CarouselItem>
            <CarouselItem className="basis-1/3">
              {" "}
              <div className="ml-10 w-[400px] p-3 flex flex-col gap-y-6">
                <div className="flex items-center gap-x-4">
                  {" "}
                  <span>
                    <Image
                      src={AbdiKaafi}
                      alt="AbdiKaafi"
                      width={100}
                      height={100}
                      className="bg-primary rounded-full flex justify-center items-center text-white w-14 h-14"
                    />
                  </span>{" "}
                  <span className="flex text-start flex-col">
                    <h1 className="text-xl font-semibold">Abdikafi Miirshe</h1>
                    <p className="text-sm text-slate-500">
                      FullStack developer
                    </p>
                  </span>
                </div>
                <div className="text-start">
                  <p className="text-slate-500 text-sm leading-6">
                    "Yonode has been a game-changer for our server development.
                    It empowered us to focus on core business logic while
                    dramatically reducing development hours. Our server
                    infrastructure is now modern and efficient, thanks to
                    Yonode's impact."
                  </p>
                </div>
                <div className="flex items-center gap-x-3">
                  <span>
                    <FaGithub className="w-5 h-5 cursor-pointer" />
                  </span>
                  <span>
                    <FaFacebook className="w-5 h-5 cursor-pointer" />
                  </span>
                  <span>
                    <FaYoutube className="w-5 h-5 cursor-pointer" />
                  </span>
                </div>
              </div>{" "}
            </CarouselItem>
          </CarouselContent>
        </Carousel>
        {/* <div className="ml-10 w-[400px] p-3 flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4">
          {" "}
          <span>
            <Image
              src={mustafa}
              alt="mustafa"
              width={100}
              height={100}
              className="bg-primary rounded-full flex justify-center items-center text-white w-14 h-14"
            />
          </span>{" "}
          <span className="flex text-start flex-col">
            <h1 className="text-xl font-semibold">Mustafa 4A</h1>
            <p className="text-sm text-slate-500">
              Software Engineer, Open Source Maintainer
            </p>
          </span>
        </div>
        <div className="text-start">
          <p className="text-slate-500 text-sm leading-6">
            "Yonode has been a catalyst for a transformative shift in our server
            development. It has empowered us to prioritize essential business
            logic while making substantial reductions in development hours. As a
            result, our server infrastructure stands as a testament to modernity
            and efficiency, all thanks to the game-changing impact of Yonode."
          </p>
        </div>
        <div className="flex items-center gap-x-3">
          <span>
            <FaGithub className="w-5 h-5" />
          </span>
          <span>
            <FaFacebook className="w-5 h-5" />
          </span>
          <span>
            <FaYoutube className="w-5 h-5" />
          </span>
        </div>
      </div>{" "} */}
      </div>
    </div>
  );
};

export default Clients;
