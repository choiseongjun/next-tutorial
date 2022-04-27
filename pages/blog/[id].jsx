import React from "react";
import { useRouter } from "next/router";

const detail = () => {
  const router = useRouter();

  return (
    <>
      <div>{router.query.id}</div>
      <div>test</div>
    </>
  );
};

export default detail;
