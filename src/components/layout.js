/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import styled from "@emotion/styled"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const LayoutContainer = styled.div`
    padding: 20px;
    width: 80%;
    margin-left: 20%;
    /* background-color: #292a2d; */
    overflow: auto;
  `

  const MainContainer = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
  `

  return (
    <MainContainer>
      <Header siteTitle={data.site.siteMetadata.title} />
      <LayoutContainer>
        <main>{children}</main>
      </LayoutContainer>
      <footer></footer>
    </MainContainer>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
