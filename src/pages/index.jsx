import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { rhythm, scale } from "../utils/typography"

import SEO from "../components/seo"
import Image from "../components/image"
import Layout from "../components/layout"
import Socials from "../components/socials"

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
          margin: `0 auto`,
          maxWidth: `600px`,
          textAlign: `center`,
        }}
      >
        <Image />
        <h1
          style={{
            ...scale(1.2),
            marginTop: rhythm(1),
            marginBottom: rhythm(1),
          }}
        >
          {data.site.siteMetadata.title}
        </h1>
        <p style={{ ...scale(0.4) }}>
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
