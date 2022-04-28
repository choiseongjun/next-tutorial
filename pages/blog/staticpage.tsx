import React from "react";

const staticPage = ({ time }) => {
  return <div>static{time}</div>;
};
export const getStaticProps = async () => {
  // 5초마다 새로고침 시 시간이 갱신됩니다.
  return { props: { time: new Date().toLocaleString() }, revalidate: 1 };
};

export default staticPage;
