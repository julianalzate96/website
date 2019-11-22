import React from "react"
import Github from "../../../../images/svg/github.svg"
import Instagram from "../../../../images/svg/instagram.svg"
import Linkedin from "../../../../images/svg/linkedin.svg"

export default function Icons() {
  return (
    <div className="icons">
      <a href="https://github.com/julianalzate96" target="_blank" rel="noopener noreferrer" ><Github className="github icon" /></a>
      <a href="https://www.linkedin.com/in/andres-julian-alzate-diaz-526532183/" target="_blank" rel="noopener noreferrer"><Linkedin className="linkedin icon" /></a>
      <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer"><Instagram className="instagram icon" /></a>
    </div>
  )
}
