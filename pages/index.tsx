import Head from "next/head";

import Todos from "@/components/todos";

export default function Home() {
  return (
    <>
      <Head>
        <title>My todo list</title>
      </Head>
      <Todos />
    </>
  );
}
