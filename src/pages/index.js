import React from "react"
import { Link } from "gatsby"
import { Button, Card, CardContent, Typography, CardMedia,CardActionArea, Avatar } from '@material-ui/core';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import "../styles/layout.scss"
import SEO from "../components/seo"

import logoRoad from "../images/logoRoad.png"
 
const IndexPage = () => (
  <div className="container">
    <SEO title="Home page" />
    <div className="container-logo">
    <Card variant="outlined" style={{borderRightStyle: "none",
      borderLeftStyle: "none",
      backgroundColor: "transparent",
   
      }}>
      
     <Avatar style={{
width:"200px",
height:"200px"
     }}
              alt="builder"
              src={logoRoad}
            />
     
    </Card>
    </div>
    <div className="container-card">
    <Card variant="outlined" 
    style={{
      backgroundColor: "transparent",
      border:"3px solid grey",
      borderRightStyle: "none",
      borderLeftStyle: "none",
      }}>
      <CardContent>
        <Typography  color="textSecondary" variant="h1" gutterBottom component="h1">
        Елисаветдорбуд
        </Typography>
        <Typography variant="h5" component="h2">
        Ремонт дорог – наше призвание!
        </Typography>
      </CardContent>
    </Card>
    </div>
    <div className="container-button">
    <ButtonGroup color="primary" aria-label="outlined primary button group" 
    style={{
      padding:"10px"
      }} >
  <Button style={{
    border:"3px solid grey",
  }}><Link to="/about/"  
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
  }}><Link to="/contact/"  
  style={{
    textDecoration:"none",
    color:"black"
    }}>Контакты</Link></Button>
</ButtonGroup>
</div>

    </div>
  
)

export default IndexPage
