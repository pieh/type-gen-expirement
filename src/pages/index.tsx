import React from "react"
import { Link, graphql, GatsbyPageComponent } from "gatsby"
import _get from "lodash.get"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

import {
  IndexQuery,
  IndexQuery_allMarkdownRemark_edges,
} from "../query-result-types/IndexQuery"

class BlogIndex extends React.Component<GatsbyPageComponent<IndexQuery>> {
  render() {
    const { data } = this.props

    const siteTitle = _get(data, ["site", "metadata", "title"], "")
    const posts: IndexQuery_allMarkdownRemark_edges[] = _get(
      data,
      ["allMarkdownRemark", "edges"],
      []
    )

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="All posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <Bio />
        {posts.map(({ node }) => {
          const title =
            _get(node, ["frontmatter", "title"]) ||
            _get(node, ["fields", "slug"])

          return (
            <div key={_get(node, ["fields", "slug"])}>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link
                  style={{ boxShadow: `none` }}
                  to={_get(node, ["fields", "slug"])}
                >
                  {title}
                </Link>
              </h3>
              <small>{_get(node, ["fields", "date"])}</small>
              <p
                dangerouslySetInnerHTML={{
                  __html: _get(node, ["excerpt"]) || "",
                }}
              />
            </div>
          )
        })}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
