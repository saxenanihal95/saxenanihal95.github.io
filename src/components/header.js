import PropTypes from "prop-types"
import React from "react"
import logo from "../images/PsyCoder1.png"
import styled from "@emotion/styled"
import { Link } from "gatsby"

const Logo = styled.img`
  max-width: 250px;
`

const HeaderContainer = styled.div`
  border-bottom: 1px solid #f4f4f4;
  padding: 20px;
`

const Header = ({ siteTitle }) => (
  <header>
    <HeaderContainer>
      <Link to="/">
        <Logo src={logo} />
      </Link>
    </HeaderContainer>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
