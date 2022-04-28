import React from "react";
import { useRouter } from "next/router";

const Detail = () => {
  const router = useRouter();

  return (
    <>
      <div>{router.query.id}</div>
      <div>test</div>
    </>
  );
};

export default Detail;
