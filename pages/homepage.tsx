import Head from "next/head";
import { getSortedPostsData } from "../lib/posts";

function HomePage({ allPostsData }) {
  const names: string[] = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton"];
  const title: string = "Develop. Preview. Ship. 🚀";
  return (
    <div>
      <Head>{title}</Head>

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
