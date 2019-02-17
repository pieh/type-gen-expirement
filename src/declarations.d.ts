// This file is used to hold ambient type declarations, as well as type shims
// for npm module without type declarations, and assets files.

// For example, to shim modules without declarations, use:
// declare module "package-without-declarations"

// And to shim assets, use (one file extension per `declare`):
// declare module "*.png"
declare const __PATH_PREFIX__: string

declare module "typography-theme-wordpress-2016" {
  import { TypographyOptions } from "typography"

  const theme: TypographyOptions
  export default theme
}

declare module "gatsby" {
  export { Link, graphql } from "gatsby"
  import { WindowLocation } from "@reach/router"

  // proposed new exported type for adding props easier
  // as well as providing typings for other props
  // like pageContext
  export type GatsbyPageComponent<TData = any> = {
    location: WindowLocation
    data: TData
  }

  // adjust StaticQuery typings to accept generics (shape of query results)
  type RenderCallback<TData> = (data: TData) => React.ReactNode

  interface StaticQueryProps<TData> {
    query: any
    render?: RenderCallback<TData>
    children?: RenderCallback<TData>
  }

  export class StaticQuery<TData = any> extends React.Component<
    StaticQueryProps<TData>
  > {}
}

declare module "gatsby-image" {
  import * as React from "react"

  interface FixedObject {
    // this definitely is not true
    // we need to fix gatsby-transformer-sharp graphql types to use non-null decorator for these
    width: number | null
    height: number | null
    src: string | null
    srcSet: string | null

    // seems like optional types `?:` produces "<Type> | undefined"
    // which is not compatible with "<Type> | null" that is produced by
    // typegen from query results
    base64: string | undefined | null

    // rest as-is (not used in example site)
    tracedSVG?: string
    srcWebp?: string
    srcSetWebp?: string
  }

  // rest is copy&paste from https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-image/index.d.ts
  interface FluidObject {
    aspectRatio: number
    src: string
    srcSet: string
    sizes: string
    base64?: string
    tracedSVG?: string
    srcWebp?: string
    srcSetWebp?: string
  }

  interface GatsbyImageProps {
    resolutions?: FixedObject
    sizes?: FluidObject
    fixed?: FixedObject
    fluid?: FluidObject
    fadeIn?: boolean
    title?: string
    alt?: string
    className?: string | object
    critical?: boolean
    style?: object
    imgStyle?: object
    placeholderStyle?: object
    backgroundColor?: string | boolean
    onLoad?: () => void
    onStartLoad?: (param: { wasCached: boolean }) => void
    onError?: (event: any) => void
    Tag?: string
    itemProp?: string
  }

  export default class GatsbyImage extends React.Component<
    GatsbyImageProps,
    any
  > {}
}
