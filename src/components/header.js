import PropTypes from "prop-types"
import React from "react"
import logo from "../images/PsyCoder1.png"
import styled from "@emotion/styled"
import { Link } from "gatsby"

const HeaderContainer = styled.header`
  height: 100vh;
  width: 20%;
  position: fixed;
  padding: 20px;
  /* background: #252627; */
`

const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <Link to="/">
      <img src={logo} />
    </Link>
  </HeaderContainer>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
