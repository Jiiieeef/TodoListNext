import { Text } from "@chakra-ui/react";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>My todo list</title>
      </Head>
      <Text fontSize="lg">Todo list in progress</Text>
    </>
  );
}
