import { getAllPostIds, getPostData } from "../../lib/posts";
import Layout from "../../components/layout";
import { useRouter } from "next/router";
import Date from "../../components/date";

export default function Detail({ postData }) {
  return (
    <Layout>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
      <br />
      <Date dateString={postData.date} />
      <br />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </Layout>
  );
}
export const getStaticPaths = async () => {
  // const posts = await fetch("https://jsonplaceholder.typicode.com/posts").then(
  //   (r) => r.json()
  // );
  const posts = [
    {
      id: 1,
      name: "pre-rendering",
    },
    {
      id: 2,
      name: "ssg-ssr",
    },
  ];
  return {
    paths: posts.map((post) => {
      return {
        params: {
          id: post.name,
        },
      };
    }),
    fallback: false,
  };
};

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
