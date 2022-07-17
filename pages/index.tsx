import type { NextPage } from "next"
// import Image from "next/image"

import Layout from "@components/common/Layout"
const Home: NextPage = ({ data }) => {
  console.log(data)

  return (
    <Layout title="Home">
      <h1>Rockets</h1>
    </Layout>
  )
}

export async function getServerSideProps() {
  const res = await fetch(process.env.API_URL + "/films")
  return { props: { data: await res.json() } }
}

export default Home
