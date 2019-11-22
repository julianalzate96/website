import PropTypes from "prop-types"
import React from "react"
import Logo from "./logo"
import SocialIcons from "./social-icons"
import ContactMe from "./contact-me"
import "../../styles/header.scss"

const Header = ({ siteTitle }) => (
  <header>
    <Logo />
    <SocialIcons />
    <ContactMe />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
