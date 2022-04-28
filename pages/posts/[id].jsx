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
export async function getStaticPaths(data) {
  // const paths = [{ params: { id: "test" } }];
  // return { paths, fallback: "blocking" };
  return {
    paths: [{ params: {} }],
    // { parmas: {} }[] 형태로 paths 리턴해야 함
    // 빌드 시에 해당 페이지들을 static으로 생성
    fallback: true | false | "blocking",
    // fallback을 리턴해야 함
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
