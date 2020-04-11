import React from "react"
import { Button } from '@material-ui/core'
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = () => (
  <Layout>
    <SEO title="contact" />
    <h1>Контакты</h1>
    <Button style={{
    border:"3px solid grey",
  }}><Link to="/"  
  style={{
    textDecoration:"none",
    color:"white"
    }}>Назад</Link></Button>
  </Layout>
)

export default Contact
