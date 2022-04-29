import React from "react";
import Header from "../../components/header";
import Title from "../../components/booklist/title";
import Picture from "../../components/picture";
const index = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      {" "}
      <Header>
        <Title titleName="안녕하세요" />
        <Picture />
      </Header>
    </div>
  );
};

export default index;
