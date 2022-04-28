import { getAllPostIds, getPostData } from "../../lib/posts";
import Layout from "../../components/layout";
import Date from "../../components/date";
import { post, postData } from "../../model/posts";

interface Props {
  postData: postData;
}

export default function Detail({ postData }: Props) {
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
  const posts: post[] = [
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
    paths: posts.map((post: post) => {
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
