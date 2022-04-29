import React from "react";
import Image from "next/image";

const index = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4"></div>
      <div className="columns-2">
        <p>Well, let me tell you something, ...</p>
        <p className="break-before-column">Sure, go ahead, laugh...</p>
        <p>Maybe we can live without...</p>
        <p>Look. If you think this is...</p>
      </div>
      <div>flex-area</div>
      <div className="flex flex-row">
        <div className="basis-1/4">01</div>
        <div className="basis-1/4">02</div>
        <div className="basis-1/2">03</div>
      </div>
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="md:shrink-0">
            <img
              className="h-48 w-full object-cover md:h-full md:w-48"
              src={require("./test.jpeg")}
              alt="Man looking at item at a store"
            />
            {/* <Image
              className="h-48 w-full object-cover md:h-full md:w-48"
              src={require("./test.jpeg")}
              alt="Vercel Logo"
              width={72}
              height={16}
            /> */}
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              Case study
            </div>
            <a
              href="#"
              className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
            >
              Finding customers for your new business
            </a>
            <p className="mt-2 text-slate-500">
              Getting a new business off the ground is a lot of hard work. Here
              are five ideas you can use to find your first customers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
