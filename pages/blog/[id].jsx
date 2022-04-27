import React from "react";
import { useRouter } from "next/router";

const detail = () => {
  const router = useRouter();

  return (
    <>
      <h1>{router.query.id}</h1>
      <div>test</div>
    </>
  );
};

export default detail;
