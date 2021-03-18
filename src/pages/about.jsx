import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

const About = () => {
  return (
    <div style={{ color: `teal` }}>
      <Link to="/contact/">Contact</Link>
      <Header headerText="About Gatsby Header"/>
      <p> Very Reactive </p>
    </div>
  )
}

export default About
