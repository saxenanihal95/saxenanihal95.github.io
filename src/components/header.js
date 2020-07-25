import PropTypes from "prop-types"
import React from "react"
import logo from "../images/PsyCoder1.png"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import { useColorMode } from "theme-ui"

const HeaderContainer = styled.header`
  height: 100vh;
  width: 20%;
  padding: 20px;
  background-color: ${props => props.theme.colors.sidebarBackground};
  @media screen and (max-width: 480px) {
    width: 100%;
  }
`

const Header = ({ siteTitle }) => {
  const [colorMode, setColorMode] = useColorMode()
  return (
    <HeaderContainer>
      <Link to="/">
        <img src={logo} />
      </Link>
      <button
        onClick={e => {
          setColorMode(colorMode === "default" ? "dark" : "default")
        }}
      >
        Toggle {colorMode === "default" ? "Dark" : "Light"}
      </button>
    </HeaderContainer>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
