import { forwardRef } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  const MyButton = forwardRef(({ onClick, href }, ref) => {
    return (
      <a href={href} onClick={onClick} ref={ref}>
        Click Me
      </a>
    );
  });
  MyButton.displayName = "about";
  return (
    <div className={styles.container}>
      <Head>
        <title>tutorial</title>
        <meta name="description" content="튜토리얼" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/homepage">
            <a>section1 - pre-rendering</a>
          </Link>
        </li>
        {/* <li>
          <Link href="/about" passHref>
            <MyButton />
          </Link>
        </li> */}
        <li>
          <Link
            href={{
              pathname: "/blog/[slug]",
              query: { slug: "my-post" },
            }}
          >
            <a>section2 - Dynamic routes</a>
          </Link>
        </li>
        <li>
          <Link
            href={{
              pathname: "/posts/pre-rendering",
            }}
          >
            <a>section2 - Dynamic routes-pre-rendering</a>
          </Link>
        </li>
        <li>
          <Link
            href={{
              pathname: "/posts/ssg-ssr",
              // query: { slug: "ssg-ssr" },
            }}
          >
            <a>section2 - Dynamic routes-ssg-ssr</a>
          </Link>
        </li>
        {/* <li> 
          <Link
            href={{
              pathname: "/blog/ssr",
            }}
          >
            <a>SSR</a>
          </Link>
        </li> */}
        <li>
          <Link
            href={{
              pathname: "/blog/staticpage",
            }}
          >
            <a>static</a>
          </Link>
        </li>
      </ul>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
