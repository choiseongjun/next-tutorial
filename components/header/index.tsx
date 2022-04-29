import React, { useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import { BsInfoCircle } from "react-icons/bs";
import { BsBasket3 } from "react-icons/bs";
import { Carousel } from "../carouesel";

interface Props {
  children: JSX.Element | JSX.Element[] | React.ReactNode;
}
const index = ({ children }: Props) => {
  const ref: any = React.useRef();

  // useEffect(() => {
  //   setTimeout(() => {
  //     ref.current.next();
  //   }, 1000);
  // }, []);
  return (
    <div>
      <header className="w-[1200px]">
        <div className="h-100 flex items-center">
          <div className="font-bold text-[24px] ">베비북스</div>
          <ul className="flex pl-[271px]">
            <li className="font-bold">상품</li>
            <li className="pl-60 font-bold">MD 추천</li>
            <li className="pl-60 font-bold">이벤트</li>
            <li className="pl-60 font-bold">고객센터</li>
            <li className="pl-60 font-bold">장바구니</li>
            <li className="pl-60 font-bold">마이페이지</li>
          </ul>
          <ul className="flex pl-[78px] ">
            <li className="pr-[32px]">
              <FiSearch size={24} />
            </li>
            <li className="pr-[32px]">
              <BsInfoCircle size={24} />
            </li>
            <li>
              <BsBasket3 size={24} />
            </li>
          </ul>
        </div>
      </header>

      {/* <Carousel ref={ref}>
        <Carousel.Item>1</Carousel.Item>
        <Carousel.Item>2</Carousel.Item>
        <Carousel.Item>3</Carousel.Item>
      </Carousel> */}
      <div className="inline-block">{children}</div>
    </div>
  );
};

export default index;
