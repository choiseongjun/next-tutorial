import React from "react";
import axios from "axios";

const ssr = ({ user }) => {
  return (
    <div>
      <img src={user.avatar_url}></img>
    </div>
  );
};
export const getServerSideProps = async () => {
  try {
    const res = await axios.get("https://api.github.com/users/c17an");

    if (res.status === 200) {
      const user = res.data;
      return { props: { user } };
    }
    return { props: {} };
  } catch (error) {
    console.log(error);
    return { props: {} };
  }
};
export default ssr;
