import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"
// import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live"
import Highlight, { defaultProps } from "prism-react-renderer"
import Layout from "./layout"
import SEO from "./seo"

const components = {
  Link,
  pre: props => {
    const language = props?.children?.props?.className?.split("-")[1] || ""
    return (
      <Highlight
        {...defaultProps}
        code={props.children.props.children}
        language={language}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    )
  },
  table: props => {
    return (
      <div style={{ overflowX: "auto" }}>
        <table {...props}></table>
      </div>
    )
  },
} // Provide common components here

export default function PageTemplate({ data: { mdx } }) {
  return (
    <Layout>
      <SEO title={mdx.frontmatter.title} />
      <h1>{mdx.frontmatter.title}</h1>
      <MDXProvider components={components}>
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </MDXProvider>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`
