import React from "react";

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
      <div className="flex flex-row">
        <div className="basis-1/4">01</div>
        <div className="basis-1/4">02</div>
        <div className="basis-1/2">03</div>
      </div>
    </div>
  );
};

export default index;
