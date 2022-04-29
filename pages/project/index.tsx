import React from "react";
import Header from "../../components/header";
import Title from "../../components/booklist/title";
import Book from "../../components/book";

const bookList = [
  {
    name: "아들과 아버지 (단비어린이 문학)(양장본)",
    writer: "이정록",
    publisher: "단비어린이",
    oriPrice: 17800,
    saleRatio: 30,
    salePrice: 14800,
  },
  {
    name: "아들과 아버지 (단비어린이 문학)(양장본)",
    writer: "이정록",
    publisher: "단비어린이",
    oriPrice: 17800,
    saleRatio: 30,
    salePrice: 14800,
  },
  {
    name: "아들과 아버지 (단비어린이 문학)(양장본)",
    writer: "이정록",
    publisher: "단비어린이",
    oriPrice: 17800,
    saleRatio: 30,
    salePrice: 14800,
  },
  {
    name: "아들과 아버지 (단비어린이 문학)(양장본)",
    writer: "이정록",
    publisher: "단비어린이",
    oriPrice: 17800,
    saleRatio: 30,
    salePrice: 14800,
  },
  {
    name: "아들과 아버지 (단비어린이 문학)(양장본)",
    writer: "이정록",
    publisher: "단비어린이",
    oriPrice: 17800,
    saleRatio: 30,
    salePrice: 14800,
  },
  {
    name: "아들과 아버지 (단비어린이 문학)(양장본)",
    writer: "이정록",
    publisher: "단비어린이",
    oriPrice: 17800,
    saleRatio: 30,
    salePrice: 14800,
  },
  {
    name: "아들과 아버지 (단비어린이 문학)(양장본)",
    writer: "이정록",
    publisher: "단비어린이",
    oriPrice: 17800,
    saleRatio: 30,
    salePrice: 14800,
  },
  {
    name: "아들과 아버지 (단비어린이 문학)(양장본)",
    writer: "이정록",
    publisher: "단비어린이",
    oriPrice: 17800,
    saleRatio: 30,
    salePrice: 14800,
  },
];

const index = () => {
  return (
    <div className="flex justify-center items-center">
      {" "}
      <Header>
        <div className="flex justify-between mt-[182px]">
          <Title titleName="이 달의 추천도서" />
          <div className="mt-[23px]">전체보기</div>
        </div>
        <div className="grid gap-5 grid-cols-4">
          {bookList.map((book, index: number) => (
            <div key={index}>
              <Book book={book} />
            </div>
          ))}
        </div>
      </Header>
    </div>
  );
};

export default index;
