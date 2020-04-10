import React from "react"
import { Link } from "gatsby"
import { Button, Card, CardContent, Typography } from '@material-ui/core';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Layout from "../components/layout"
import "../styles/layout.scss"
import SEO from "../components/seo"
import StickyFooter from "../components/footer"

const IndexPage = () => (
  <Layout>
    <SEO title="Home page" />
    <div className="container-card">
    <Card variant="outlined" 
    style={{
      backgroundColor: "transparent",
      border:"3px solid grey",
      borderRightStyle: "none",
      borderLeftStyle: "none",
      }}>
      <CardContent>
        <Typography  color="textSecondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="h2">
        zvsdsdfddsfsdf
        </Typography>
        <Typography  color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
        </Typography>
      </CardContent>
    </Card>
    </div>
    <div className="container-button">
    <ButtonGroup color="primary" aria-label="outlined primary button group" 
    style={{
      display: "flex",
      justifyContent: "center",
      
      }} >
  <Button style={{
    border:"3px solid grey",
  }}><Link to="/tech/"  
  style={{
    textDecoration:"none",
    color:"black"
    }}>О нас</Link></Button>
  <Button style={{
    border:"3px solid grey",
  }} ><Link to="/tech/"  
  style={{
    textDecoration:"none",
    color:"black"
    }}>Техника</Link></Button>
  <Button style={{
    border:"3px solid grey",
  }}><Link to="/tech/"  
  style={{
    textDecoration:"none",
    color:"black"
    }}>Контакты</Link></Button>
</ButtonGroup>
</div>
    <StickyFooter/>
  </Layout>
)

export default IndexPage
