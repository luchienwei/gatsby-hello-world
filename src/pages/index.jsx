import { Link } from "gatsby"
import React from "react"
import Header from "../components/header"

export default function Home() {
  return (
    <div style={{ color: "purple" }}>
      <Link to="/contact/">Contact</Link>
      <Header headerText="Hello Gatsby" />
      <p> what a world</p>
    </div>
  )
}
