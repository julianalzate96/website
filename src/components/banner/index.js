import React from "react"
import Background from "gatsby-background-image"
import Image from "gatsby-image"
import "../../styles/background.scss"

export default function Banner({ background, alt, profile, altProfile }) {
  return (
    <Background className="background" fluid={background.asset.fluid} alt={alt}>
      <div className="title-container">
        <div className="title">
          <div className="text">
            <h1>I,M JULIAN ALZATE DIAZ</h1>
            <h4>I'M A FRONTEND DEVELOPER AND BEER LOVER</h4>
          </div>
        </div>
      </div>
    </Background>
  )
}
