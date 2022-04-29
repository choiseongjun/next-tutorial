import React from "react";

interface Props {
  titleName: string;
}
const title = ({ titleName }: Props) => {
  return (
    <div className=" mb-[20px] font-medium text-[32px] relative block">
      {titleName}
    </div>
  );
};
export default title;
