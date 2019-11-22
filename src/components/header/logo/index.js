import React from "react"
import { Link } from "gatsby"

export default function Logo() {
  return (
    <div className="logo">
      <Link to="/">
        <h1>JA</h1>
      </Link>
      <i className="small material-icons">menu</i>
    </div>
  )
}
