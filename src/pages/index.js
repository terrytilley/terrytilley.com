import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Socials from "../components/socials"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <div
        style={{
          maxWidth: `600px`,
          margin: `0 auto`,
          textAlign: `center`,
        }}
      >
        <Image />
        <h1>{data.site.siteMetadata.title}</h1>
        <p>
          Front end developer at{" "}
          <a
            href="https://www.serpico.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Serpico
          </a>{" "}
          👋
        </p>
        <Socials />
      </div>
    </Layout>
  )
}

export default IndexPage
