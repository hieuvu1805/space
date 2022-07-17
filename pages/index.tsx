import type { GetServerSideProps, NextPage } from "next"

import Layout from "@components/common/Layout"
import Rocket from "@components/molecules/Rocket"
import { IRocket } from "@interfaces"

type Props = {
  rockets: IRocket[]
}

const Home: NextPage<Props> = ({ rockets }) => {
  if (!rockets?.length) {
    return null
  }

  return (
    <Layout title="Rockets">
      <h1 className="hidden">Rockets</h1>
      <div className="pt-1 bg-[url('/images/background.jpeg')]">
        {rockets.map((rocket) => (
          <Rocket key={rocket.id} {...rocket} />
        ))}
      </div>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=3600, stale-while-revalidate=36000"
  )

  const fetchRocket = await fetch(process.env.API_URL + "/rockets")
  const rockets = await fetchRocket.json()

  return {
    props: {
      rockets,
    },
  }
}

export default Home
