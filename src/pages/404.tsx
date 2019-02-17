import React from "react"
import { graphql, GatsbyPageComponent } from "gatsby"
import _get from "lodash.get"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { NotFounQuery } from "../query-result-types/NotFounQuery"

class NotFoundPage extends React.Component<GatsbyPageComponent<NotFounQuery>> {
  render() {
    const { data } = this.props

    const siteTitle = _get(data, [`site`, `siteMetadata`, `title`], "")

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="404: Not Found" />
        <h1>Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </Layout>
    )
  }
}

export default NotFoundPage

export const pageQuery = graphql`
  query NotFounQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
