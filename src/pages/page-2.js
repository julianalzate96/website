import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <form id="form" name="contacg" data-netlify="true">
      <input type="email" placeholder="Email*" require/>
      <button type="submit">Submit</button>
    </form>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
