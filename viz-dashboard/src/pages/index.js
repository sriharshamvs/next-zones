import Head from "next/head"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Banner from "../components/Banner"
import Articles from "../components/Articles"

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Head>
        <title>NewsClick</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />
      <Articles />
      <Footer className="pt-8"/>
    </div>
  )
}
