import Calculator from "@/components/calculator";
import Head from "next/head";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center w-full min-h-screen bg-black overflow-y-auto">
      <Head>
        <title>Calculator</title>
      </Head>
      <Calculator />
    </main>
  );
}
