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
export async function getStaticPaths() {
  const paths = [{ params: { id: "pre-rendering" } }];
  return { paths, fallback: "blocking" };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
