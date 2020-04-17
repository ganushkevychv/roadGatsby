import React from "react"
import { Button } from '@material-ui/core'
import { Link } from "gatsby"
import SEO from "../components/seo"

const Contact = () => (
  <div className="container">
    <SEO title="contact" />
    <h1>Контакты</h1>
    <div className="contact-card">
      
    </div>
    <Button style={{
    border:"3px solid grey",
  }}><Link to="/"  
  style={{
    textDecoration:"none",
    color:"white"
    }}>Назад</Link></Button>
  </div>
)

export default Contact
