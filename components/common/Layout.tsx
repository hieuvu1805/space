import Head from "next/head"
import { ReactNode } from "react"

import Footer from "@components/organisms/Footer"
import Header from "@components/organisms/Header"

type LayoutProps = {
  children?: ReactNode
  title?: string
}

export default function Layout({ children, title }: LayoutProps): JSX.Element {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <div className="main">{children}</div>
      <Footer />
    </>
  )
}
