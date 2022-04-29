import React from "react";

interface Props {
  children: JSX.Element | JSX.Element[] | React.ReactNode;
}
export const Carousel: any = React.forwardRef(
  ({ children }: Props, ref: any) => {
    const innerRef: React.RefObject<HTMLInputElement> = React.createRef();

    React.useImperativeHandle(ref, () => ({
      next() {
        const { current: carousel } = innerRef;
        carousel.scroll({
          left: carousel.scrollLeft + carousel.offsetWidth,
          behavior: "smooth",
        });
      },
      prev() {
        const { current: carousel } = innerRef;
        carousel.scroll({
          left: carousel.scrollLeft - carousel.offsetWidth,
          behavior: "smooth",
        });
      },
    }));

    return (
      <div className="Carousel" ref={innerRef}>
        {children}
      </div>
    );
  }
);

Carousel.Item = Item;

function Item({ children }) {
  return <div className="Carousel--item">{children}</div>;
}
