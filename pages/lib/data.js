import axios from "axios";

export async function getStaticProps() {
  // Get external data from the file system, API, DB, etc.
  const test = axios.get(
    "https://api.sampleapis.com/baseball/hitsSingleSeason"
  );

  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    // data: test,
    content: "\nThis is content.",
    data: {
      title: "Front Matter",
    },
  };
}
