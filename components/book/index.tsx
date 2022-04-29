import React from "react";

const index = ({ book }) => {
  console.log("book=", book);
  return (
    <div className="w-[280px] h-[455px]  rounded-tl-[15px] rounded-tr-[15px] rounded-bl-[10px] rounded-br-[10px]   ">
      <div className="bg-slate-600 w-[280px] h-[280px] rounded-tl-[15px] rounded-tr-[15px]"></div>
      <div className="shadow-10cus w-[280px] h-[175px] rounded-bl-[10px] rounded-br-[10px]">
        <div className="px-[20px] pt-[20px] pb-[4px]">
          <p className="text-[18px] font-medium tracking-[-0.9px] text-center">
            {book.name}
            <br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default index;
