/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: BioQuery
// ====================================================

export interface BioQuery_avatar_childImageSharp_fixed {
  base64: string | null;
  width: number | null;
  height: number | null;
  src: string | null;
  srcSet: string | null;
}

export interface BioQuery_avatar_childImageSharp {
  fixed: BioQuery_avatar_childImageSharp_fixed | null;
}

export interface BioQuery_avatar {
  /**
   * The child of this node of type imageSharp
   */
  childImageSharp: BioQuery_avatar_childImageSharp | null;
}

export interface BioQuery_site_siteMetadata_social {
  twitter: string | null;
}

export interface BioQuery_site_siteMetadata {
  author: string | null;
  social: BioQuery_site_siteMetadata_social | null;
}

export interface BioQuery_site {
  siteMetadata: BioQuery_site_siteMetadata | null;
}

export interface BioQuery {
  avatar: BioQuery_avatar | null;
  site: BioQuery_site | null;
}
