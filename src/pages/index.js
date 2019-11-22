import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner"

export const query = graphql`
  query HomeBackground {
    allSanityBackground {
      edges {
        node {
          image {
            asset {
              fluid {
                ...GatsbySanityImageFluid
              }
            }
          }
          alt
          profile {
            asset {
              fluid {
                ...GatsbySanityImageFluid
              }
            }
          }
          profileAlt
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {
  // console.log(data)
  return (
    <Layout>
      <SEO title="Home" />
      <Banner
        background={data.allSanityBackground.edges[0].node.image}
        alt={data.allSanityBackground.edges[0].node.alt}
        profile={data.allSanityBackground.edges[0].node.profile}
        altProfile={data.allSanityBackground.edges[0].node.altProfile}
      />
    </Layout>
  )
}

export default IndexPage
