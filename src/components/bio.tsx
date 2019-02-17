import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import _get from "lodash.get"

import { rhythm } from "../utils/typography"
import { BioQuery } from "../query-result-types/BioQuery"

function Bio() {
  return (
    <StaticQuery<BioQuery>
      query={bioQuery}
      render={data => {
        if (!data.site || !data.site.siteMetadata) {
          return null
        }

        const { siteMetadata } = data.site
        return (
          <div
            style={{
              display: `flex`,
              marginBottom: rhythm(2.5),
            }}
          >
            {data.avatar &&
              data.avatar.childImageSharp &&
              data.avatar.childImageSharp.fixed && (
                <Image
                  fixed={data.avatar.childImageSharp.fixed}
                  alt={_get(siteMetadata, [`author`]) || ``}
                  style={{
                    marginRight: rhythm(1 / 2),
                    marginBottom: 0,
                    minWidth: 50,
                    borderRadius: `100%`,
                  }}
                  imgStyle={{
                    borderRadius: `50%`,
                  }}
                />
              )}
            <p>
              Written by <strong>{_get(siteMetadata, ["author"])}</strong> who
              lives and works in San Francisco building useful things.
              {siteMetadata.social && siteMetadata.social.twitter && (
                <React.Fragment>
                  {` `}
                  <a
                    href={`https://twitter.com/${_get(siteMetadata, [
                      `social`,
                      `twitter`,
                    ])}`}
                  >
                    You should follow him on Twitter
                  </a>
                </React.Fragment>
              )}
            </p>
          </div>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`

export default Bio
