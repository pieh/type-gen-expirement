import React from "react"
import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"
import _get from "lodash.get"

import { DefaultSEOQuery } from "../query-result-types/DefaultSEOQuery"

interface SEOProps {
  description?: string
  lang?: string
  meta?: Array<any>
  keywords?: Array<string>
  title: string
}

function SEO({
  description,
  lang = `en`,
  meta = [],
  keywords = [],
  title,
}: SEOProps) {
  return (
    <StaticQuery<DefaultSEOQuery>
      query={detailsQuery}
      render={data => {
        const metaDescription =
          description ||
          _get(data, [`site`, `siteMetadata`, `description`]) ||
          ``
        return (
          <Helmet
            htmlAttributes={{
              lang,
            }}
            title={title}
            titleTemplate={`%s | ${_get(data, [
              `site`,
              `siteMetadata`,
              `title`,
            ])}`}
            meta={[
              {
                name: `description`,
                content: metaDescription,
              },
              {
                property: `og:title`,
                content: title,
              },
              {
                property: `og:description`,
                content: metaDescription,
              },
              {
                property: `og:type`,
                content: `website`,
              },
              {
                name: `twitter:card`,
                content: `summary`,
              },
              {
                name: `twitter:creator`,
                content: _get(data, [`site`, `siteMetadata`, `author`]),
              },
              {
                name: `twitter:title`,
                content: title,
              },
              {
                name: `twitter:description`,
                content: metaDescription,
              },
            ]
              .concat(
                keywords.length > 0
                  ? {
                      name: `keywords`,
                      content: keywords.join(`, `),
                    }
                  : []
              )
              .concat(meta)}
          />
        )
      }}
    />
  )
}

export default SEO

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`
