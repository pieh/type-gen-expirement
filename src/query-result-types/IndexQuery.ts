/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: IndexQuery
// ====================================================

export interface IndexQuery_site_siteMetadata {
  title: string | null;
}

export interface IndexQuery_site {
  siteMetadata: IndexQuery_site_siteMetadata | null;
}

export interface IndexQuery_allMarkdownRemark_edges_node_fields {
  slug: string | null;
}

export interface IndexQuery_allMarkdownRemark_edges_node_frontmatter {
  date: any | null;
  title: string | null;
}

export interface IndexQuery_allMarkdownRemark_edges_node {
  excerpt: string | null;
  fields: IndexQuery_allMarkdownRemark_edges_node_fields | null;
  frontmatter: IndexQuery_allMarkdownRemark_edges_node_frontmatter | null;
}

export interface IndexQuery_allMarkdownRemark_edges {
  /**
   * The item at the end of the edge
   */
  node: IndexQuery_allMarkdownRemark_edges_node | null;
}

export interface IndexQuery_allMarkdownRemark {
  /**
   * A list of edges.
   */
  edges: (IndexQuery_allMarkdownRemark_edges | null)[] | null;
}

export interface IndexQuery {
  site: IndexQuery_site | null;
  /**
   * Connection to all MarkdownRemark nodes
   */
  allMarkdownRemark: IndexQuery_allMarkdownRemark | null;
}
