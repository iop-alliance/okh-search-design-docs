import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Open Know-How Search</title>
        <meta
          name="description"
          content="Find open source hardware projects."
        />
        <link rel="icon" href="/favicon-48.png" type="image/png" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon-apple-touch.png" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      hello
    </div>
  );
};

export default Home;
