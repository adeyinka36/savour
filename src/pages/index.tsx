import Head from 'next/head'
import { Inter } from 'next/font/google'
import Main from "@/components/Main";
import Body from "@/components/Body";
import Prices from "@/components/Prices";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>FOODIE</title>
        <meta name="description" content="Worlds best food and drink buffet" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Main/>
      <Body/>
      <Prices/>
    </>
  )
}
