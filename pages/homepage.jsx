import Head from "next/head";
import { getSortedPostsData } from "../lib/posts";

function HomePage({ allPostsData }) {
  const names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton"];

  return (
    <div>
      <Head title="Develop. Preview. Ship. 🚀" />

      <ul>
        {allPostsData.map(({ id, date, title }) => (
          <li key={id}>
            {title}
            <br />
            {id}
            <br />
            {date}
          </li>
        ))}
      </ul>
    </div>
  );
}
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
export default HomePage;
